/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
Etherscan: https://ropsten.etherscan.io/tx/0x4fd27e12012ad43a7a6c180edb0c9f0f2b058a4af402dd8fc8abfe2a3a96703f
*/
import web3 from './web3'; 
import Tracking from './build/Tracking.json'; 

const instance = new web3.eth.Contract(
    Tracking.abi,
     '0xf7d63017bcc6b033f62371dc39ee4a6c2cc3b313'
     // Address of the tracking.sol contract in ropsten network
);

export default instance; 