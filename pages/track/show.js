import React, { Component } from 'react';
import { Icon, Step } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import trackingContract from '../../ethereum/tracking';
import registerContract from '../../ethereum/register';

class show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortingFacilityAddr: '',
            disposeDate: '',
            buyerAddr: '',
            sortedActive: false,
            sortedDisabled: true
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

        //Step: Disposed
        //Fetch time of disposing 
        trackingContract.events.updateStatusRecycler({
            filter: { plasticBottleAddress: this.props.address }, fromBlock: 0
        }, function (error, event) {
            //console.log(event.returnValues['time']);
            var time = new Date(event.returnValues['time'] * 1000);
            var date = time.toUTCString();
            //console.log(date);
            this.setState({ disposeDate: date });
        }.bind(this))
            .on('error', console.error);

        //*********************************************************** 
        //Step: Sorted
        // Fetch sorting facility address
        trackingContract.events.updateStatusMachine({
            filter: { plasticBottleAddress: this.props.address }, fromBlock: 0
        }, function (error, event) {
            console.log(event.returnValues['sellerAddress']);
            this.setState({ sellerAddress: event.returnValues['sellerAddress'] });
        }.bind(this))
            .on('error', console.error);

        // Fetch sorting facility address
        trackingContract.events.updateStatusMachine({
            filter: { plasticBottleAddress: this.props.address }, fromBlock: 0
        }, function (error, event) {
            console.log(event.returnValues['sellerAddress']);
            this.setState({ sellerAddress: event.returnValues['sellerAddress'] });
        }.bind(this))
            .on('error', console.error);





    };



    render() {

        const { disposeDate } = this.state;

        return (
            <div>

                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />

                <h1>Track {this.props.address}</h1>

                <Step.Group stackable='tablet'>
                    <Step active>
                        <Icon name='trash alternate' />
                        <Step.Content >
                            <Step.Title>Disposed</Step.Title>
                            <Step.Description> {this.state.disposeDate} </Step.Description>
                        </Step.Content>
                    </Step>
                    <Step active={this.state.sortedActive} disabled={this.state.sortedDisabled}>
                        <Icon name='qrcode' />
                        <Step.Content>
                            <Step.Title>Sorted</Step.Title>
                            <Step.Description>Enter billing information</Step.Description>
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

        );
    }

}

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 
export default show; 