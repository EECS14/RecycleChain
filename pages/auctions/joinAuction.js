import React, { Component } from 'react';
import { Form, Button, Input, Message, Icon, Container, Grid, Statistic } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import plasticBaleContract from '../../ethereum/plasticBale';
import registerContract from '../../ethereum/register';
import Layout from '../../components/Layout';

class joinAuction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            join: false,
            registrationSCAddr: '0x7126ec4f68added009015a1f5ac718c4896faa2e',
            errorMessage: '',
            loading: false,
            totalBidders: 0,
            highestBid: 0,
            highestBidder: 'No bids placed',
            highestBidderAddress: '',
            bid: '',
            loading2: false,
            loading3: false
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }


    static async getInitialProps(props) {
        //fetches address of the bale from URL
        const { address } = props.query;

        return { address };
    }

    componentDidMount = async () => {

        const accounts = await web3.eth.getAccounts();
        const plasticBaleSC = plasticBaleContract(this.props.address);

        var biddersnumber = 0;
        var highestbid = 0;
        var isJoin = false;


        plasticBaleSC.getPastEvents("allEvents", { fromBlock: 0, toBlock: 'latest' }, (error, events) => {

            const myfunction = (item) => {

                if (item.event === 'bidderRegistered') {
                    biddersnumber++;
                    item.returnValues['bidderAddress'] === accounts[0] ? isJoin = true : null;


                } else if (item.event === 'auctionStarted') {
                    highestbid = item.returnValues['startingAmount'];

                } else if (item.event === 'bidderExited') {
                    //console.log(item);
                    item.returnValues['bidderAddress'] === accounts[0] ? isJoin = false : null;
                    biddersnumber--;

                } else if (item.event === 'bidPlaced') {
                    highestbid = item.returnValues['amount'];
                    this.findHighestBidder(item.returnValues['biddeAddress']);

                }

            };

            events.forEach(myfunction);

            this.setState({
                totalBidders: biddersnumber,
                highestBid: highestbid,
                join: isJoin
            });


        });


    };

    onJoinAuction = async (event) => {
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            const plasticBaleSC = plasticBaleContract(this.props.address);

            await plasticBaleSC.methods
                .addBidder(this.state.registrationSCAddr, accounts[0])
                .send({ from: accounts[0] });

        } catch (err) {
            this.setState({ errorMessage: err.message });

        }

        // if errorMsg is empty, registration is successful
        if (!this.state.errorMessage) {
            this.setState({ join: true });
        }

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
                .send({ from: accounts[0] });
            this.setState({ join: false });
        }
        catch (err) {
            this.setState({ errorMessage: err.message });

        }

        // if errorMsg is empty, registration is successful
        if (!this.state.errorMessage)
            this.setState({ hasNoError: true });


        this.setState({ loading3: false });


    };


    render() {

        const { join } = this.state;

        return (
            <Layout>
                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />
                {console.log(this.props.address)}
                <div className='statistic'>
                    <h1>Live Auction</h1>
                    <h2> Plastic Bale being auctioned:
                 <h3> {this.props.address} </h3> </h2>
                    <br />

                    <div className='AuctionContainer'>

                        <Statistic.Group widths='three'>
                            <Statistic>
                                <Statistic.Value text>
                                    {this.state.highestBid}
                                    <br />
                            Ether
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

                <br />
                <br />
                <br />

                {join === false ? (<Grid>
                    <Grid.Row centered>
                        <Grid.Column width={6} textAlign="center">
                            <Button loading={this.state.loading} onClick={this.onJoinAuction}>Join Auction </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                ) : null}
                

                {join && (

                    <div className='auctionInput'>
                        <Container>
                            <Grid>
                                <Grid.Row centered>
                                    <Grid.Column width={4} textAlign="center">
                                        <Form onSubmit={this.onPlaceBid} error={!!this.state.errorMessage} success={this.state.hasNoError}>

                                            <Form.Field>
                                                <label>Amount</label>
                                                <Input value={this.state.bid}
                                                    label={{ basic: true, content: 'Ether' }}
                                                    labelPosition='right'
                                                    onChange={event => this.setState({ bid: event.target.value })} />
                                            </Form.Field>

                                            <Message error header="Error!" content={this.state.errorMessage} />


                                            <Message success header="Success!" content="Bid is Placed!" />


                                            <Button loading={this.state.loading2} type='submit'>Place Bid</Button>
                                        </Form>

                                        <br />

                                        <p> You can only exit the auction if no bids were placed!</p>
                                        <Button loading={this.state.loading3} onClick={this.onExitAuction}>Exit Auction </Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Container>


                    </div>

                )}

            </Layout>
        );
    }



}

export default joinAuction; 
