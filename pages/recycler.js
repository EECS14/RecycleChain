/*
This is the recycler page where a recycler scans the QR codes and view rewards
Contact used here: an instance of tracking.sol 
To run the app, use the command npm run dev
*/

import React, { Component, lazy, Suspense } from 'react';
import { Card, Table, Button } from 'semantic-ui-react';
import dynamic from 'next/dynamic';
const QRReader = dynamic(() => import('react-qr-reader'), { ssr: false });
import web3 from '../ethereum/web3';
import trackingContract from '../ethereum/tracking'; // import SC instance

class recyclerPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rewards: 0,
            result: '',
            qr: false,
            rows: []
        };
    }

    // retrieve all bottled logged by user from ropsten network 
    componentDidMount = async () => {
        const accounts = await web3.eth.getAccounts();
        trackingContract.events.updateStatusRecycler({
            filter: { recycler: accounts[0] }, fromBlock: 0
        }, function (error, event) { console.log(event)})
        .on('error', console.error);
    };

    // QR reader functions 
    handleScan = data => {
        if (data) {
            this.setState({ result: data });
            this.addRow();
            this.disposeBottle();

        }
    }

    handleError = err => {
        console.error(err)
    }

    onScan = async (event) => {
        event.preventDefault();
        if (this.state.qr === false) {
            this.setState({ qr: true });
        }
        else {
            this.setState({ qr: false });
        }
    };

    // Adds a new row dynamically to the table 
    addRow = () => {
        this.setState((prevState, props) => {
            const bottle = { addr: this.state.result, status: "Pending" };
            return { rows: [...prevState.rows, bottle] };
        });

    };

    // Log bottle as disposed 
    disposeBottle = async () => {

        const accounts = await web3.eth.getAccounts();

        //Add try and catch block here 
        await trackingContract.methods
            .updateStatusDisposed(this.state.result)
            .send({ from: accounts[0] });

    };




    render() {

        const { qr, rows } = this.state

        return (
            <div>
                <h1>Welcome to Recycler's Page</h1>
                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />

                <Card header='Rewards' description={this.state.rewards} meta='ETH' centered='true' />

                <br />
                <br />

                <div className="Scanner" style={{ 'width': '40%', 'margin-left': 'auto', 'margin-right': 'auto' }}>
                    <h2>Dispose a Plastic Bottle
                    <Button className="QrReader" style={{ 'vertical-align': 'middle' }} onClick={this.onScan} > Scan QR Code</Button>
                        <div> {this.state.qr === true ? (<QRReader
                            delay={300}
                            onError={this.handleError}
                            onScan={this.handleScan}
                            style={{ width: "70%" }}
                        />
                        )
                            : ''} </div>
                    </h2>
                </div>

                <br />

                <div className='BottleTable' style={{ 'width': '40%', 'margin-left': 'auto', 'margin-right': 'auto' }}>
                    <Table unstackable size='small'>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Plasitc Bottle Address</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {this.state.rows.map(bottle => (
                                <Table.Row id={this.state.rows.length} >
                                    <Table.Cell>{bottle.addr}</Table.Cell>
                                    <Table.Cell>{bottle.status}</Table.Cell>
                                </Table.Row>
                            ))}
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