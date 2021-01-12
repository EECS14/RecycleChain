/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
*/
import web3 from './web3'; 
import Tracking from './build/Tracking.json'; 

const instance = new web3.eth.Contract(
    Tracking.abi,
     '0xbb6ae1b1569f5a6ef0228597124b2752b2d2336d'
     // Address of the tracking.sol contract in ropsten network
);

export default instance; 