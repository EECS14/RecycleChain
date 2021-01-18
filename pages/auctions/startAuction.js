import React, { Component } from 'react';
import { Form, Button, Input, Message, Label } from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import web3 from '../../ethereum/web3';
import plasticBaleContract from '../../ethereum/plasticBale';

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
        })
    }

    onStartAuction = async (event) => {
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
        this.setState({loading: true, errorMessage: ''});

        /*
        const time; 

        try {

            const plasticBaleSC = plasticBaleContract(this.props.address); 
            await plasticBaleSC.methods.startAuction(this.state.manufacturerAddr, this.state.manufacturerLocation, this.state.manufacturerName)
                .send({ from: accounts[0] });
        } catch (err) {
            this.setState({ errorMessage: err.message });
            this.setState({ hasError: false });
        }

        // if errorMsg is empty, registration is successful
        if (!this.state.errorMessage)
            this.setState({ hasNoError: true });

            this.setState({loading: false});  */ 

    };

    

    render() {

        return (
            <div>
                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />

                <h1>Set Bale's Auction Parameters: </h1>

                <Form onSubmit={this.onStartAuction} error={!!this.state.errorMessage} success={this.state.hasNoError}>
                    <Form.Field width={6}>
                        <label >Auction Closing Date and Time</label>
                        <DatePicker
                            onChange={this.handleChange}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={30}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm aa"
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


                    <Message success header="Success!" content="Auction is Opended Successfully!" />


                    <Button loading={this.state.loading} type='submit'>Start Auction</Button>
                </Form>




            </div>
        );
    }

}

export default startAuction; 