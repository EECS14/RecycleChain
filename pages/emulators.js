/*
Note: Seller address is hardcoded in the sorting machine
*/
import React, { Component } from 'react';
import { Menu, Button, Message, Form, Input} from 'semantic-ui-react';
import dynamic from 'next/dynamic';
const QRReader = dynamic(() => import('react-qr-reader'), { ssr: false });
import web3 from '../ethereum/web3';
import trackingContract from '../ethereum/tracking';
import Layout from '../components/Layout';

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
            hasNoError: false, 
            bottlesLimit: '',
            errorMessage1: '', 
            loading: false
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
        const accounts = await web3.eth.getAccounts();
        this.setState({ errorMessage: ''});

        try {
            await trackingContract.methods
                .updateStatusSorted(this.state.registerSCAddress, this.state.sellerAddress, this.state.result)
                .send({ from: accounts[0] });
        } catch (err) {
            this.setState({ errorMessage: err.message });

        }

        this.setState({loading: false});

    };

    // Controls the size of the plastic bale 
    onSetBaleLimit = async (event) => {

        event.preventDefault(); 
        const accounts = await web3.eth.getAccounts();
        this.setState({loading: true, errorMessage1: ''});

        
        try {
            await trackingContract.methods
                .setBottlesSortedLimit(this.state.bottlesLimit)
                .send({ from: accounts[0] });
        } catch (err) {
            this.setState({ errorMessage1: err.message });
            
        }

        this.setState({loading: false});

    };



    render() {

        const { productionMachine, sortingMachine, qr } = this.state

        return (
            <Layout>
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

                    <div className="Container1" style={{ 'width': '70%', 'margin-left': 'auto' }}> 
                    
                    <Form onSubmit={this.onSetBaleLimit} error={!!this.state.errorMessage1} >
                        <Form.Field width={6}>
                            <label>Number of Bottles in a Plastic Bale</label>
                            <Input value={this.state.bottlesLimit}
                                onChange={event => this.setState({ bottlesLimit: event.target.value })} />
                        </Form.Field>
                        <Button loading={this.state.loading} type='submit'>Set Limit</Button>
                     </Form>

                        <Form error={!!this.state.errorMessage} success={this.state.hasNoError} >
                            <div className="Scanner" >
                                <br /> <br />
                                <h2>Scan Plastic Bottle </h2>
                                <Button className="QrReader" style={{ 'vertical-align': 'middle' }} onClick={this.onScan} > Scan QR Code</Button>
                                <div> {this.state.qr === true ? (<QRReader
                                    delay={300}
                                    onError={this.handleError}
                                    onScan={this.handleScan}
                                    style={{ width: "35%" }}
                                />
                                )
                                    : ''} </div>

                                <Message error header="Error!" content={this.state.errorMessage} />

                                <Message success header="Success!" content="Plastic bottle status is updated successfully by sorting machine!" />

                            </div>

                        </Form>

                        </div>

                )}


            </Layout>

                );
    }

}

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 
export default index; 