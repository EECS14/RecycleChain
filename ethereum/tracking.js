/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
Etherscan: https://ropsten.etherscan.io/tx/0x4aafa039544175312e464969c394bc08125d6baf08ca37b7c6f0f225c4b036a7
https://ropsten.etherscan.io/tx/0xc97103226f11e65034d14dc1637ad249d9835a618a0ef60da322a2ce7689c0f3
*/
import web3 from './web3'; 
import Tracking from './build/Tracking.json'; 

const instance = new web3.eth.Contract(
    Tracking.abi,
     '0xdf64abab64a4520821ad6586c897ddd9aefd0081'
     // Address of the tracking.sol contract in ropsten network
);

export default instance; 