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
            hasNoError: false,
            loading: false
        };
    }


    static async getInitialProps(props) {
        //fetches address of the bale from URL
        const { address } = props.query;
    
        return { address };
    }

    componentDidMount = async () => {


    };


    onJoinAuction = async (event) => {
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();

        try {
            const plasticBaleSC = plasticBaleContract(this.props.address); 

            await plasticBaleSC.methods
                .addBidder(this.state.registrationSCAddr, accounts[0])
                .send({ from: accounts[0]});

        } catch (err) {
            this.setState({ errorMessage: err.message });
            this.setState({ hasError: false });
        }

        // if errorMsg is empty, registration is successful
        if (!this.state.errorMessage){
            this.setState({ hasNoError: true, join:true }); 
        }

            this.setState({loading: false});
    };



    onExitAuction = async () => {


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
                                22
                            <br/>
                            Wei
                            </Statistic.Value>
                            <Statistic.Label>Highest Bid</Statistic.Label>
                        </Statistic>

                        <Statistic>
                            <Statistic.Value>
                                <Icon name='users' /> 10
                      </Statistic.Value>
                            <Statistic.Label>Bidders</Statistic.Label>
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