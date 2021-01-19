import React, { Component } from 'react';
import { Form, Button, Input, Message, Label } from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import web3 from '../../ethereum/web3';
import plasticBaleContract from '../../ethereum/plasticBale';

class joinAuction extends Component {
    constructor(props) {
        super(props);
        this.state = {


        };
    } 

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




            </div>
        );
    }



}

export default joinAuction; 