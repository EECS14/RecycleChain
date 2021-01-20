import React, { Component } from 'react';
import { Form, Button, Input, Message, Icon, Image, Statistic } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import plasticBaleContract from '../../ethereum/plasticBale';

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
            highestBidder:''
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
        var highestbid =0;
        var highestbidder=''; 

        plasticBaleSC.getPastEvents("allEvents",{fromBlock: 0, toBlock:'latest'},(error, events)=>{
            console.log(events);

            const myfunction = (item) => {

                if(item.event==='bidderRegistered'){
                    //console.log(item);
                    biddersnumber++; 
                    //console.log(biddersnumber);
                    
                }else if(item.event==='auctionStarted'){
                    highestbid = item.returnValues['startingAmount']; 

                }else if (item.event==='bidderExited'){
                    //console.log(item);
                    biddersnumber--;

                }else if(item.event==='bidPlaced'){
                    highestbid = item.returnValues['amount']; 
                    highestbidder = item.returnValues['bidderAddress'];

                }

            };

            events.forEach(myfunction);

            this.setState({totalBidders: biddersnumber,
                 highestBid: highestbid});
           

    });

   
    };

    onJoinAuction = async (event) => {
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();

        this.setState({loading: true, errorMessage: ''});

        try {
            const plasticBaleSC = plasticBaleContract(this.props.address); 

            await plasticBaleSC.methods
                .addBidder(this.state.registrationSCAddr, accounts[0])
                .send({ from: accounts[0]});

        } catch (err) {
            this.setState({ errorMessage: err.message });
            
        }

        // if errorMsg is empty, registration is successful
        if (!this.state.errorMessage){
            this.setState({ join: true }); 
        }

            this.setState({loading: false});
    };



    onExitAuction = async () => {


    };


    findHighestBidder = async () =>{

        
    };


    render() {

        const{join}=this.state; 

        return (
            <div>
                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />
                 {console.log(this.props.address)}

                <h1>Live Auction</h1>
                <h2> Plastic Bale being auctioned: {this.props.address} </h2>
                <br/>

                <div className='AuctionContainer'>

                    <Statistic.Group widths='four'>
                        <Statistic>
                            <Statistic.Value text>
                                {this.state.highestBid}
                            <br/>
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

                        <Statistic>
                            <Statistic.Value>
                                <Icon name='user' /> {this.state.highestBidder}
                      </Statistic.Value>
                            <Statistic.Label>Highest Bidder</Statistic.Label>
                        </Statistic>


                    </Statistic.Group>

                </div>

          <br/>
          <br/>

          <Button loading={this.state.loading} onClick={this.onJoinAuction}>Join Auction </Button>
                
            {join && ( 

                <div className='auctionInput'>
                <Form onSubmit={this.onStartAuction} error={!!this.state.errorMessage} success={this.state.hasNoError}>

                    <Form.Field width={4}>
                        <label>Amount</label>
                        <Input value={this.state.startingPrice}
                            label={{ basic: true, content: 'Wei' }}
                            labelPosition='right'
                            onChange={event => this.setState({ startingPrice: event.target.value })} />
                    </Form.Field>

                    <Message error header="Error!" content={this.state.errorMessage} />


                    <Message success header="Success!" content="Bid is Placed!" />


                    <Button loading={this.state.loading} type='submit'>Place Bid</Button>
                </Form>

                <br/>

                <p> You can only exit the auction if no bids were placed!</p>
                <Button loading={this.state.loading} onClick={this.onExitAuction}>Exit Auction </Button> 
                </div>
                )}
                
            </div>
        );
    }



}

export default joinAuction; 