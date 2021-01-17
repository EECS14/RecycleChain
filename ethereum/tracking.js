/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
Etherscan: https://ropsten.etherscan.io/tx/0x67a8c2d74a1837e7ed0c6affc2fcc43114cef4ca1b8d1b53aa7f2d596c309b7f 
*/
import web3 from './web3'; 
import Tracking from './build/Tracking.json'; 

const instance = new web3.eth.Contract(
    Tracking.abi,
     '0x7263faa0067c4611fcf1094a80a73becdc29771e'
     // Address of the tracking.sol contract in ropsten network
);

export default instance; 