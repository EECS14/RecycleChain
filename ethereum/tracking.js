/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
*/
import web3 from './web3'; 
import Tracking from './build/Tracking.json'; 

const instance = new web3.eth.Contract(
    Tracking.abi,
     '0xfe60326950c34d8d1b2d6d2fd26677a9065e4d29'
     // Address of the tracking.sol contract in ropsten network
);

export default instance; 