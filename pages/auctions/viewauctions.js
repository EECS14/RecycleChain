import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import trackingContract from '../../ethereum/tracking'; 
import plasticBaleContract from '../../ethereum/plasticBale';

class viewauctions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            plasticBaleInstances: []

        };
    }


    componentDidMount = async () => {

        //1. Fetch plastic bale addresses which are contract addresses/auction addresses 
        const accounts = await web3.eth.getAccounts();
        //NOTE: Set the account back to account[0]
        trackingContract.events.plasticBaleCompleted({
            filter: { sellerAddress: accounts[1] }, fromBlock: 0
        }, function (error, event) {
            //Debugging 
            console.log(event); 
            this.setState(prevState => ({ plasticBaleInstances: [...prevState. plasticBaleInstances, event.returnValues['PlasticBale']]}));
        }.bind(this))
            .on('error', console.error);


            for(let i=0; i<this.state.plasticBaleInstances.length;i++){
                //1.  create a new instance 
                const plasticBaleSC = plasticBaleContract(plasticBaleInstances[i]); 
                //2. Check auctionStarted events 
                plasticBaleSC.events.auctionStarted({fromBlock: 0}, function (error, event) {
                    console.log(event);
                    //3.render card 

            }.bind(this))
            .on('error', console.error);
            
        }
            
    

    };



    render() {

        return (
            <div>
                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />

                <h1>Open Auctions</h1>
                <h2></h2>
                
            </div>
        );
    }

}

export default viewauctions; 