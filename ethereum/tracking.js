/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
Etherscan: https://ropsten.etherscan.io/tx/0x4a08c3ec8c492132f26fa4736c6a5abd3ce326acfe14090a3bf06217b36203a0
*/
import web3 from './web3'; 
import Tracking from './build/Tracking.json'; 

const instance = new web3.eth.Contract(
    Tracking.abi,
     '0x6fd4a9942beffecd3be8d39fa253e446ad2853b9'
     // Address of the tracking.sol contract in ropsten network
);

export default instance; 