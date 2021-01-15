/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
*/
import web3 from './web3'; 
import Tracking from './build/Tracking.json'; 

const instance = new web3.eth.Contract(
    Tracking.abi,
     '0x2a0667e60bc3dc1bb0fc20044f2398bf8f57d7db'
     // Address of the tracking.sol contract in ropsten network
);

export default instance; 