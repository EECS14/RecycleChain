import React, { Component } from 'react';
import { Icon, Step } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import trackingContract from '../../ethereum/tracking';

class show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortingFacilityAddr: '',
            buyerAddr: ''
        };
    }

    static async getInitialProps(props) {

        //1. fetches address of the bottle from the URL
        //Perfomed at the server before html is loaded
        const { address } = props.query;

        return { address };
    }

    //2. fetches all events related to the updating the bottle route
    // to find address of the entity 
    componentDidMount = async () => {
        const accounts = await web3.eth.getAccounts();

        trackingContract.events.updateStatusMachine({
            filter: { plasticBottleAddress: this.props.address }, fromBlock: 0
        }, function (error, event) {
            console.log(event.returnValues['sellerAddress']);
            this.setState({ sellerAddress: event.returnValues['sellerAddress'] });
        }.bind(this))
            .on('error', console.error);
    };



    render() {

        return (
            <div>

                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />

                <h1>Track {this.props.address}</h1>

                <Step.Group stackable='tablet'>
                    <Step>
                        <Icon name='qrcode' />
                        <Step.Content>
                            <Step.Title>Disposed</Step.Title>
                            <Step.Description>Choose your shipping options</Step.Description>
                        </Step.Content>
                    </Step>
                    <Step active>
                        <Icon name='recycle' />
                        <Step.Content>
                            <Step.Title>Sorted</Step.Title>
                            <Step.Description>Enter billing information</Step.Description>
                        </Step.Content>
                    </Step>
                    <Step disabled>
                        <Icon name='ethereum' />
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