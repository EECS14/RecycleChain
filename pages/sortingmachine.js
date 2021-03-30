import React, { Component } from 'react';
import { Menu, Button, Message, Form, Input, Container, Grid } from 'semantic-ui-react';

import dynamic from 'next/dynamic';
const QRReader = dynamic(() => import('react-qr-reader'), { ssr: false });

import web3 from '../ethereum/web3';
import trackingContract from '../ethereum/tracking';
import Layout from '../components/Layout';
import ipfs from './ipfs';

class sortingmachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productionMachine: false,
            sortingMachine: false,
            result: '',
            buffer:'',  //(new)
            ipfsHash: null, //(new)
            qr: false,
            sellerAddress: '0x33b5dCc58986e735d7718692e36E18d00a8Ac1C7',
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
        this.setState({ errorMessage: '' });

        try {
            await trackingContract.methods
                .updateStatusSorted(this.state.registerSCAddress, this.state.sellerAddress, this.state.result)
                .send({ from: accounts[0] });
        } catch (err) {
            this.setState({ errorMessage: err.message });

        }

        this.setState({ loading: false });

    };

    // Controls the size of the plastic bale 
    onSetBaleLimit = async (event) => {

        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
        this.setState({ loading: true, errorMessage1: '' });


        try {
            await trackingContract.methods
                .setBottlesSortedLimit(this.state.bottlesLimit)
                .send({ from: accounts[0] });
        } catch (err) {
            this.setState({ errorMessage1: err.message });

        }

        this.setState({ loading: false });

    };


    //(new)
    captureFile =(event) => {
        event.stopPropagation()
        event.preventDefault();
        const file = event.target.files[0]
        let reader = new window.FileReader() // he used const instead of let
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(reader)    
      };//Capture File
      
    convertToBuffer = async(reader) => {
        //file is converted to a buffer for upload to IPFS
        const buffer = await Buffer.from(reader.result);
        //set this buffer -using es6 syntax
        this.setState({buffer});
        console.log('buffer', this.state.buffer)
    };// converToBuffer

    onUpload = async(event) =>  {
        event.preventDefault()
        const result = await ipfs.add(this.state.buffer);
        this.setState({ ipfsHash: result.path })
        console.log('ifpsHash', this.state.ipfsHash)
    }


    render() {

        const { qr } = this.state

        return (
            <Layout>

                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />
                <div className='SortingMachine'>
                    <h1>Welcome to Sorting Machine Page</h1>
                    <br/>
                
                    <Container>
                        <Grid>
                            <Grid.Row centered>
                                <Grid.Column width={6} textAlign="center">
                                    <Form onSubmit={this.onUpload}>
                                        <input type='file' onChange={this.captureFile}/>
                                        <input type='submit' />
                                    </Form>

                                    <Form onSubmit={this.onSetBaleLimit} error={!!this.state.errorMessage1} >
                                        <Form.Field>
                                            <label>Number of Bottles in a Plastic Bale</label>
                                            <Input value={this.state.bottlesLimit}
                                                onChange={event => this.setState({ bottlesLimit: event.target.value })} />
                                        </Form.Field>

                                        <Button loading={this.state.loading} type='submit'>Set Limit</Button>
                                    </Form>

                                    <Form error={!!this.state.errorMessage} success={this.state.hasNoError} >
                                        <div className="Scanner" >
                                            <br /> <br />
                                          
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
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>

                </div>




            </Layout>

        );
    }

}

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 
export default sortingmachine; 