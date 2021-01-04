import React, { Component } from 'react'; 

class index extends Component{

    static async getInitalProbs(){
    // Code here runs on the server - used for dataloading before the html is loaded on the client 
    // Is a class function which mean it gets called as ClassName.getInitalProbs 
    // Have to return the contract instance 
    
    }
    
    render(){
    
        return (
            <h1>Hellow world2</h1>
        );
    }
    
    }
    
    //At the end of each page, a component is expected to be returned 
    // If not, Next.js throws an error 
    export default index; 