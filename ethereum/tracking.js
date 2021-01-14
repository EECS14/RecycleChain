/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
*/
import web3 from './web3'; 
import Tracking from './build/Tracking.json'; 

const instance = new web3.eth.Contract(
    Tracking.abi,
     '0x77950110e36c11c053de27587f48c4cd16e669ce'
     // Address of the tracking.sol contract in ropsten network
);

export default instance; 