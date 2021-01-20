import React, { Component } from 'react';
import { Form, Button, Input, Message, Label } from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import web3 from '../../ethereum/web3';
import plasticBaleContract from '../../ethereum/plasticBale';
import Layout from '../../components/Layout';

class startAuction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startingPrice: '',
            errorMessage: '',
            hasNoError: false,
            startDate: new Date()

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

    onStartAuction = async (event) => {
        event.preventDefault();
        
        //web3.eth.handleRevert = true;
        
        //1. Extract time from date
        //2. Conver to Milliseconds
        let closingTime = Math.ceil((this.state.startDate).getTime()/1000);
        console.log(closingTime);
        
        this.setState({loading: true, errorMessage: ''});

    
        try {

            const accounts = await web3.eth.getAccounts();
            //Create new instance of plastic bale SC that has been deployed 
            const plasticBaleSC = plasticBaleContract(this.props.address); 
            await plasticBaleSC.methods.startAuction(closingTime, this.state.startingPrice).send({ from: accounts[0] });
        } catch (err) {
            this.setState({ errorMessage: err.message });
            this.setState({ hasError: false });
        }

        // if errorMsg is empty, registration is successful
        if (!this.state.errorMessage)
            this.setState({ hasNoError: true });

            this.setState({loading: false}); 

    };

    

    render() {

        return (
            <Layout>
                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />

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




            </Layout>
        );
    }

}

export default startAuction; 