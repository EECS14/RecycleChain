/*
This is the registration page where the goverment entity registers stakeholders 
Contact used here: an instance of register.sol 
To run the app, use the command npm run dev
*/

import React, { Component } from 'react'; 
import registerContract from '../ethereum/register'; // import SC instance

class registrationPage extends Component{

static async getInitalProbs(){
// Code here runs on the server - used for dataloading before the html is loaded on the client 
// Is a class function which mean it gets called as ClassName.getInitalProbs 
// Have to return the contract instance 

}

async componentDidMount(){
    //This is not executed on the server 
   //await registerContract.methods.registerManufactuerer.send(); 
}

render(){

    return (
        <h1>Hellow world2</h1>
    );
}

}

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 
export default registrationPage; 