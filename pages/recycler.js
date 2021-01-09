/*
This is the recycler page where a recycler scans the QR codes and view rewards
Contact used here: an instance of tracking.sol 
To run the app, use the command npm run dev
*/

import React, { Component } from 'react';
import { Card, Table, Button } from 'semantic-ui-react';
var QrReader = require('react-qr-reader');
import web3 from '../ethereum/web3';
import trackingContract from '../ethereum/tracking'; // import SC instance

class recyclerPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rewards: 0,
            bottleStatus: '',
            result: '',
            qr: false
        };


    }

    handleScan = data => {
        if (data) {
            this.setState({
                result: data
            });
        }
    }

    handleError = err => {
        console.error(err)
    }

    onScan = async (event) => {
        event.preventDefault();
        if (this.state.qr === false)
            this.setState({ qr: true });
        else
            this.setState({ qr: false });
    };


    renderQRReader() {
        return (
            <div>
                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '100%' }}
                />
                <p>{this.state.result}</p>
            </div>

        );
    }

    renderBottlesTable() {

        return (
            <Table.Row>
                <Table.Cell>John</Table.Cell>
                <Table.Cell>Completed</Table.Cell>
            </Table.Row>

        );

    }

    render() {

        const {qr} = this.state

        return (
            <div>
                <h1>Welcome to Recycler's Page</h1>
                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />

                <Card header='Rewards' description={this.state.rewards} meta='ETH' centered='true' />

                <br />
                <br />

                <div className="Scanner">
                    <h2>Dispose a Plastic Bottle </h2>
                    <Button className="QrReader" onClick={this.onScan} > Scan QR Code</Button>
                    <div> {this.state.qr === true && this.state.result === '' ? <QrReader
                        delay={this.state.delay}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{ width: "25%" }}
                    /> : ''} </div>
                </div>

                <div className='BottleTable' style={{ 'width': '40%', 'margin-left': 'auto', 'margin-right': 'auto' }}>
                    <Table unstackable size='small'>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Plasitc Bottle Address</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                            </Table.Row>

                        </Table.Header>
                        <Table.Body>
                            {this.renderBottlesTable()}
                        </Table.Body>

                    </Table>
                </div>


            </div>

        );
    }

}

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 
export default recyclerPage; 