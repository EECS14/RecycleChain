/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
*/
import web3 from './web3'; 
import Tracking from './build/Tracking.json'; 

const instance = new web3.eth.Contract(
    Tracking.abi,
     '0x575dba34fb067679f2c85ab9c683e6c487d0ac47'
     // Address of the tracking.sol contract in ropsten network
);

export default instance; 