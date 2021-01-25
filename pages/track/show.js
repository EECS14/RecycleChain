import React, { Component } from 'react';
import { Icon, Step } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import trackingContract from '../../ethereum/tracking';
import registerContract from '../../ethereum/register';
import Layout from '../../components/Layout';

class show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortingFacilityAddr: '',
            disposeDate: '',
            recyclerAddr:'',
            buyerAddr: '',
            sortedActive: false,
            sortedDisabled: true,
            sortDate: '',
            sortingFacilityName: '',
            sortingFacilityLoc: '',
            sortingFacilityAddr: ''
        };
    }

    static async getInitialProps(props) {

        //1. fetches address of the bottle from the URL
        //Perfomed at the server before html is loaded
        const { address } = props.query;

        return { address };
    }

    //2. fetches data from events 
    componentDidMount = async () => {

        const accounts = await web3.eth.getAccounts();
        this.setState({ recyclerAddr: accounts[0] });

        console.log(this.props.address);
        //Step: Disposed
        //Fetch time of disposing 
        trackingContract.events.updateStatusRecycler({
            filter: { plasticBottleAddress: this.props.address }, fromBlock: 0
        }, function (error, event) {
            //console.log(event.returnValues['time']);
            //var date = time.toUTCString();
            var time = new Date(event.returnValues['time'] * 1000);
            var date = time.toString(); 
            this.setState({ disposeDate: date });
        }.bind(this))
            .on('error', console.error);

        //*********************************************************** 
        //Step: Sorted
        // Fetch sorting facility address
        trackingContract.events.updateStatusMachine({
            filter: { plasticBottleAddress: this.props.address }, fromBlock: 0
        }, function (error, event) {
            this.setState({ sellerAddress: event.returnValues['sellerAddress'] });
            var time = new Date(event.returnValues['time'] * 1000);
            var date = time.toString(); 
            this.setState({ sortDate: date});
            this.FetchSellerDetails();
            this.setState({ sortedActive: true, sortedDisabled:false});
        }.bind(this))
            .on('error', console.error);

    };


    componentWillUnmount() {
        this.setState({sortingFacilityAddr: '',
        disposeDate: '',
        recyclerAddr:'',
        buyerAddr: '',
        sortedActive: false,
        sortedDisabled: true,
        sortDate: '',
        sortingFacilityName: '',
        sortingFacilityLoc: '',
        sortingFacilityAddr: ''});
    }

    // Get seller detail
    FetchSellerDetails = async () => {

        const accounts = await web3.eth.getAccounts();

        //returned result is in the callback function 
        await registerContract.methods
            .getSellerDetails(this.state.sellerAddress)
            .call(function (error, result) {
                this.setState({
                    sortingFacilityAddr: result[0],
                    sortingFacilityLoc: result[1],
                    sortingFacilityName: result[2]
                });

            }.bind(this));

    };


    render() {

        const { disposeDate } = this.state;

        return (
            <Layout>

                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />
            <div className='Tracking'>
                
                <h1>You are currently tracking {this.props.address}</h1>

                <Step.Group stackable='tablet'>
                    <Step active>
                        <Icon name='trash alternate' />
                        <Step.Content >
                            <Step.Title>Disposed</Step.Title>
                            <Step.Description> Recycler: {this.state.recyclerAddr} </Step.Description>
                            <Step.Description> Date: {this.state.disposeDate} </Step.Description>
                        </Step.Content>
                    </Step>
                    <Step active={this.state.sortedActive} disabled={this.state.sortedDisabled}>
                        <Icon name='qrcode' />
                        <Step.Content>
                            <Step.Title>Sorted</Step.Title>
                            {this.state.sortedActive === true ? (
                                 <div>
                                    <Step.Description>Sorting Facility: {this.state.sortingFacilityName}</Step.Description>
                                    <Step.Description>Location: {this.state.sortingFacilityLoc}</Step.Description>
                                    <Step.Description>Address: {this.state.sortingFacilityAddr}</Step.Description>
                                    <Step.Description>Date: {this.state.sortDate}</Step.Description>
                                    </div>
                            ): null}
                            
                        </Step.Content>
                    </Step>
                    <Step disabled>
                        <Icon name='factory' />
                        <Step.Content>
                            <Step.Title>Purchased</Step.Title>
                            <Step.Description>Verify order details</Step.Description>
                        </Step.Content>
                    </Step>
                </Step.Group>
                </div>
            </Layout>

        );
    }

}

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 
export default show; 