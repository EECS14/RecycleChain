import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
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
            qr: false
        };
    }

    // QR reader functions 
    handleScan = async (data) => {
        if (data) {
            this.setState({ result: data });
    
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


    render() {

        const { productionMachine, sortingMachine, qr} = this.state
    
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

                    
                    <div className="Scanner" style={{ 'width': '40%', 'margin-left': 'auto', 'margin-right': 'auto' }}>
                        <br/> <br/>
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
                    

                </div>
                    
                )}


            </div>

        );
    }

}

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 
export default index; 