import React, { Component } from 'react';
import { Form, Button, Input, Message, Label } from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import web3 from '../../ethereum/web3';
import plasticBaleContract from '../../ethereum/plasticBale';
import Layout from '../../components/Layout';


class joinAuction extends Component {
    constructor(props) {
        super(props);
        this.state = {

        this.setState({ loading: false });
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


    onPlaceBid = async (event) => {

        event.preventDefault();

        this.setState({ loading2: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            const plasticBaleSC = plasticBaleContract(this.props.address);
            await plasticBaleSC.methods
                .placeBid(this.state.registrationSCAddr, this.state.bid)
                .send({ from: accounts[0], value: this.state.bid });
        }
        catch (err) {
            this.setState({ errorMessage: err.message });

        }

        // if errorMsg is empty, registration is successful
        if (!this.state.errorMessage) 
            this.setState({ hasNoError: true });
        

        this.setState({ loading2: false });

    };


    onExitAuction = async (event) => {

        event.preventDefault();

        this.setState({ loading3: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            const plasticBaleSC = plasticBaleContract(this.props.address);
            await plasticBaleSC.methods
                .exitAuction(this.state.registrationSCAddr)
                .send({ from: accounts[0]});

                this.setState({join: false});
        }
        catch (err) {
            this.setState({ errorMessage: err.message });

        }

        // if errorMsg is empty, registration is successful
        if (!this.state.errorMessage) 
            this.setState({ hasNoError: true });
        

        this.setState({ loading3: false });


    };

        };
    } 

    render() {

        return (
            <Layout>
                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />
                {console.log(this.props.address)}

                <h1>Live Auction</h1>
                <h2> Plastic Bale being auctioned: {this.props.address} </h2>
                <br/>

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

                <br />
                <br />

                <Button loading={this.state.loading} onClick={this.onJoinAuction}>Join Auction </Button>

                {join && ( 

                <h1>Set Bale's Auction Parameters: </h1>

                <Form onSubmit={this.onStartAuction} error={!!this.state.errorMessage} success={this.state.hasNoError}>
                    <Form.Field width={6}>
                        <label >Auction Closing Date and Time</label>
                        <DatePicker
                            selected={ this.state.startDate }
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
                        onChange={event => this.setState({ startingPrice: event.target.value })}/> 
                    </Form.Field>
                    
                    <Message error header="Error!" content={this.state.errorMessage} />


                    <Message success header="Success!" content="Auction is Open!" />


                    <Button loading={this.state.loading} type='submit'>Start Auction</Button>
                </Form>



                    <p> You can only exit the auction if no bids were placed!</p>
                    <Button loading={this.state.loading3} onClick={this.onExitAuction}>Exit Auction </Button>
                </div>
                )}

            </Layout>
        );
    }



}

export default joinAuction; 