/*
This is the recycler page where a recycler scans the QR codes and view rewards
Contact used here: an instance of tracking.sol 
To run the app, use the command npm run dev
*/

import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import trackingContract from '../ethereum/tracking'; // import SC instance

class recyclerPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rewards:0
        };
    }




    render() {

        return (
            <div>
                <h1>Welcome to Recycler's Page</h1>
                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />

                <Card header='Rewards' description={this.state.rewards} meta='ETH' centered='true'/>

                
            </div>

        );
    }

}

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 
export default recyclerPage; 