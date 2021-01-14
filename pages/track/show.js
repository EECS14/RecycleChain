import React, { Component } from 'react'; 
import { Divider } from 'semantic-ui-react';

class show extends Component{

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

   static async getInitialProps(props){

        //1. fetches address of the bottle from the URL
        //Perfomed at the server before html is loaded
        const { address } = props.query;
        return { address };
        }

        //2. fetches all events related to the updating the bottle route
        // to find address of the entity 
        componentDidMount = async () => {
        const accounts = await web3.eth.getAccounts();

        };

        

    render(){
        
        return (
            <div>
                <h1>Tracking page</h1>
            </div>
            
        );
    }
    
    }
    
    //At the end of each page, a component is expected to be returned 
    // If not, Next.js throws an error 
    export default show; 