import React, { Component } from 'react'; 
import web3 from '../../ethereum/web3';
import trackingContract from '../../ethereum/tracking'; 
//import { Divider } from 'semantic-ui-react';

class show extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            sortingFacilityAddr:'',
            buyerAddr:''
        };
    }

   static async getInitialProps(props){

        //1. fetches address of the bottle from the URL
        //Perfomed at the server before html is loaded
        const {address} = props.query;

        return {address};
        }

        //2. fetches all events related to the updating the bottle route
        // to find address of the entity 
        componentDidMount = async () => {
        const accounts = await web3.eth.getAccounts();
        
        trackingContract.events.updateStatusMachine({
            filter: { plasticBottleAddress: this.props.address}, fromBlock: 0
        }, function (error, event) {
            console.log(event.returnValues['plasticBottleAddress']);
            /*For debugging purposes 
            console.log(event);
            console.log(this.state.bottlesLogged.indexOf(event.returnValues['plasticBottleAddress'] ));
            console.log(this.state.rows);
            console.log(event.returnValues['plasticBottleAddress']);
            let index = this.state.bottlesLogged.indexOf(event.returnValues['plasticBottleAddress']);
            this.updateRow(index, event.returnValues['status']);  */
        }.bind(this))
            .on('error', console.error);

        };

        

    render(){
        
        return (
            <div>
                <h1>Track {this.props.address}</h1>
            </div>
            
        );
    }
    
    }
    
    //At the end of each page, a component is expected to be returned 
    // If not, Next.js throws an error 
    export default show; 