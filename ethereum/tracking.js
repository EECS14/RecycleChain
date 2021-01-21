/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
Etherscan: https://ropsten.etherscan.io/tx/0x05d4c5b5ec85ff8344ff6e5f9d0db1166aea577a150a94d89a8a2a0a1d612756 
*/
import web3 from './web3'; 
import Tracking from './build/Tracking.json'; 

const instance = new web3.eth.Contract(
    Tracking.abi,
     '0xddda6f059797fc37c3eeac54b22bc4844b68f0ba'
     // Address of the tracking.sol contract in ropsten network
);

export default instance; 