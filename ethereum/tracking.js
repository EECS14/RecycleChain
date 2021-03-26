/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
Etherscan: https://ropsten.etherscan.io/tx/0x5121c0253fdfe09556bba5ce7ad7d0851a70a458fa8247a3790042865d212ff8
*/
import web3 from './web3'; 
import Tracking from './build/Tracking.json'; 

const instance = new web3.eth.Contract(
    Tracking.abi,
     '0x9cdC88b5d9D5516669127D1b1937D59CDBAd5A21'
     // Address of the tracking.sol contract in ropsten network
);

export default instance; 