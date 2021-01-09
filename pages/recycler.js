/*
This is the recycler page where a recycler scans the QR codes and view rewards
Contact used here: an instance of tracking.sol 
To run the app, use the command npm run dev
*/

import React, { Component } from 'react';
import { Menu, Form, Button, Input, Message } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import trackingContract from '../ethereum/tracking'; // import SC instance

class recyclerPage extends Component {



    render() {

        return (
            <div>
                <h1>Hello Drug Dealers</h1>
            </div>

        );
    }

}

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 
export default recyclerPage; 