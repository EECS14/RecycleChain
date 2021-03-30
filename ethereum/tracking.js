/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
Etherscan: https://ropsten.etherscan.io/tx/0x61ddd39f25c8f4e11e5353406c968e657d11530b9ef06f0466ed937316ad455e
*/
import web3 from './web3'; 
import Tracking from './build/Tracking.json'; 

const instance = new web3.eth.Contract(
    Tracking.abi,
     '0xBb13CdC1Ae2635699B98a3999C3509514F541641'
     // Address of the tracking.sol contract in ropsten network
);

export default instance; 