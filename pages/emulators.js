/*
Note: Seller address is hardcoded in the sorting machine
*/
import React, { Component } from 'react';
import { Menu, Button, Message, Form } from 'semantic-ui-react';
import dynamic from 'next/dynamic';
const QRReader = dynamic(() => import('react-qr-reader'), { ssr: false });
import web3 from '../ethereum/web3';
import trackingContract from '../ethereum/tracking';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productionMachine: false,
            sortingMachine: false,
            result: '',
            qr: false,
            sellerAddress: '0x334b12DF37984A449b57BAE3F4120f70be177be0',
            registerSCAddress: '0x7126ec4f68added009015a1f5ac718c4896faa2e',
            errorMessage: '',
            hasNoError: false
        };
    }

    // QR reader functions 
    handleScan = async (data) => {
        if (data) {
            this.setState({ result: data });
            this.sortBottle();

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

    // Log bottle as disposed 
    sortBottle = async () => {

        this.setState({ errorMessage: '' });

        const accounts = await web3.eth.getAccounts();

        try {
            await trackingContract.methods
                .updateStatusSorted(this.state.registerSCAddress, this.state.sellerAddress, this.state.result)
                .send({ from: accounts[0] });
        } catch (err) {
            this.setState({ errorMessage: err.message });
            this.setState({ hasError: false });
        }

        // if errorMsg is empty, registration is successful
        if (!this.state.errorMessage)
            this.setState({ hasNoError: true });

    };


    render() {

        const { productionMachine, sortingMachine, qr } = this.state

        return (
            <div>
                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />

                <h1>Emulators Page</h1>
                <p> This page is to emulate the functionality of machines participating in the system <br />
                Choose which machine you would like to emulate
            </p>

                <Menu widths={3}>
                    <Menu.Item name='ProductionLineMachine' onClick={() => this.setState({ productionMachine: true, sortingMachine: false })} > Production Line Machine</Menu.Item>
                    <Menu.Item name='SortingMachine' onClick={() => this.setState({ sortingMachine: true, productionMachine: false })} > Sorting Machine</Menu.Item>
                </Menu>

                {productionMachine && (

                    <h2> Put the code here!!</h2>
                )}

                {sortingMachine && (

                    <Form error={!!this.state.errorMessage} success={this.state.hasNoError} >
                    <div className="Scanner" 
                        style={{ 'width': '40%', 'margin-left': 'auto', 'margin-right': 'auto' }}>
                        <br /> <br />
                        <h2>Scan Plastic Bottle </h2>
                        <Button className="QrReader" style={{ 'vertical-align': 'middle' }} onClick={this.onScan} > Scan QR Code</Button>
                        <div> {this.state.qr === true ? (<QRReader
                            delay={300}
                            onError={this.handleError}
                            onScan={this.handleScan}
                            style={{ width: "60%" }}
                        />
                        )
                            : ''} </div>

                        <Message error header="Error!" content={this.state.errorMessage} />

                        <Message success header="Success!" content="Plastic bottle status is updated successfully by sorting machine!" />

                    </div>

                    </Form>

                )}


            </div>

        );
    }

}

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 
export default index; 