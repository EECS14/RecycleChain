import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import trackingContract from '../../ethereum/tracking'; 


class viewbales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount = async () => {

        
    };



    render() {

        return (
            <div>
                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />

                <h1>Plastic bales produced at your facility</h1>
                
                
            </div>
        );
    }

}

export default viewbales; 