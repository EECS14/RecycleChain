/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
*/
import web3 from './web3'; 
import Tracking from './build/Tracking.json'; 

const instance = new web3.eth.Contract(
    Tracking.abi,
     '0x19d41e07d4018c12fe69429c499d45f520dbfee2'
     // Address of the tracking.sol contract in ropsten network
);

export default instance; 