import React, { Component } from 'react';
import { Form, Button, Input, Message, Statistic, Icon } from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import web3 from '../../ethereum/web3';
import registerContract from '../../ethereum/register';
import plasticBaleContract from '../../ethereum/plasticBale';
import Layout from '../../components/Layout';

class startAuction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startingPrice: '',
            errorMessage: '',
            hasNoError: false,
            startDate: new Date(),
            registrationSCAddr: '0x7126ec4f68added009015a1f5ac718c4896faa2e',
            open: false,
            totalBidders: 0,
            highestBid: 0,
            highestBidder: 'No bids placed',
            highestBidderAddress: '',
            notOver: true,
            loading: false

        };

        this.handleChange = this.handleChange.bind(this);
    }

    static async getInitialProps(props) {

        //fetches address of the bottle from the URL
        const { address } = props.query;

        return { address };
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
        console.log(date);
    }


    componentDidMount = async () => {
        //open is T, render statsictc 
        //open is F, render create bale info

        const accounts = await web3.eth.getAccounts();
        const plasticBaleSC = plasticBaleContract(this.props.address);
        //console.log(this.props.address);

        var isOpen = false;
        var biddersnumber = 0;
        var highestbid = 0;
        var closingTime = 0;

        plasticBaleSC.getPastEvents("allEvents", { fromBlock: 0, toBlock: 'latest' }, (error, events) => {
            console.log(events);

            const myfunction = (item) => {

                if (item.event === 'auctionStarted' && this.props.address === item.returnValues['baleAddress']) {
                    isOpen = true;
                    highestbid = item.returnValues['startingAmount'];
                    closingTime = item.returnValues['closingTime'];
                    console.log(closingTime);

                } else if (item.event === 'bidderRegistered') {
                    biddersnumber++;

                } else if (item.event === 'bidderExited') {
                    biddersnumber--;

                } else if (item.event === 'bidPlaced') {
                    highestbid = item.returnValues['amount'];
                    this.findHighestBidder(item.returnValues['biddeAddress']);

                }

            };

            events.forEach(myfunction);

            this.setState({
                open: isOpen,
                totalBidders: biddersnumber,
                highestBid: highestbid
            });

        });

        /*
        const currentTime = Math.ceil(new Date().getTime() / 1000);
        console.log(currentTime);
        if (closingTime < currentTime) {
            this.endAuction();
        } */

    };


    findHighestBidder = async (address) => {

        const accounts = await web3.eth.getAccounts();
        await registerContract.methods
            .getBuyerDetails(address).call(function (error, result) {
                this.setState({
                    highestBidder: result[1],
                    highestBidderAddress: result[0],
                });

            }.bind(this));

    };




    onStartAuction = async (event) => {
        event.preventDefault();

        //web3.eth.handleRevert = true;

        //1. Extract time from date
        //2. Conver to Milliseconds
        let closingTime = Math.ceil((this.state.startDate).getTime() / 1000);
        console.log(closingTime);

        this.setState({ loading: true, errorMessage: '' });


        try {
            const accounts = await web3.eth.getAccounts();
            const plasticBaleSC = plasticBaleContract(this.props.address);
            await plasticBaleSC.methods.startAuction(closingTime, this.state.startingPrice)
                .send({ from: accounts[0] });
            this.setState({ open: true });
        } catch (err) {
            this.setState({ errorMessage: err.message });
            this.setState({ hasError: false });
        }

        // if errorMsg is empty, registration is successful
        if (!this.state.errorMessage)
            this.setState({ hasNoError: true });

        this.setState({ loading: false });

    };


    onEndAuction = async (event) => {

        event.preventDefault();

        this.setState({ loading: true });

        try {
            const accounts = await web3.eth.getAccounts();
            const plasticBaleSC = plasticBaleContract(this.props.address);
            await plasticBaleSC.methods.endAuction().call();
            this.setState({ notOver: false });

        } catch (err) {
            // REVERT REASON IS ALMOST SHOWN HERE
            console.log(err);
        }

        this.setState({ loading: false });
    };



    render() {

        const { open, notOver } = this.state;

        return (
            <Layout>
                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />

                { open && notOver && (

                    <div className='statistic'>

                        <h1>Live Auction</h1>
                        <h2> Plastic Bale being auctioned: {this.props.address} </h2>
                        <br />

                        <div className='AuctionContainer'>

                            <Statistic.Group widths='three'>
                                <Statistic>
                                    <Statistic.Value text>
                                        {this.state.highestBid}
                                        <br />
                            Wei
                            </Statistic.Value>
                                    <Statistic.Label>Highest Bid</Statistic.Label>
                                </Statistic>

                                <Statistic>
                                    <Statistic.Value>
                                        <Icon name='users' /> {this.state.totalBidders}
                                    </Statistic.Value>
                                    <Statistic.Label>Total Bidders</Statistic.Label>
                                </Statistic>

                                <br />

                                <Statistic>
                                    <Statistic.Value text>
                                        <Icon name='user' /> {this.state.highestBidder}
                                        {/*this.state.highestBidderAddress*/}
                                    </Statistic.Value>
                                    <Statistic.Label>Highest Bidder</Statistic.Label>
                                </Statistic>
                            </Statistic.Group>

                        </div>

                    </div>

                )}


                <br />
                <br />

                <Button loading={this.state.loading} onClick={this.onEndAuction}>Close Auction </Button>


                { !open && (

                    <div className='setAuction'>

                        <h1>Set Bale's Auction Parameters: </h1>

                        <Form onSubmit={this.onStartAuction} error={!!this.state.errorMessage} success={this.state.hasNoError}>
                            <Form.Field width={6}>
                                <label >Auction Closing Date and Time</label>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={20}
                                    timeCaption="time"
                                    dateFormat="MM/dd/yyyy h:mm aa"
                                />
                            </Form.Field>

                            <Form.Field width={4}>
                                <label>Starting Price</label>
                                <Input value={this.state.startingPrice}
                                    label={{ basic: true, content: 'Wei' }}
                                    labelPosition='right'
                                    onChange={event => this.setState({ startingPrice: event.target.value })} />
                            </Form.Field>

                            <Message error header="Error!" content={this.state.errorMessage} />


                            <Message success header="Success!" content="Auction is Open!" />


                            <Button loading={this.state.loading} type='submit'>Start Auction</Button>
                        </Form>

                    </div>
                )}



            </Layout>
        );
    }

}

export default startAuction; 