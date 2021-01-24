/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
Etherscan: https://ropsten.etherscan.io/tx/0x3dcd684d78591c0b906747e320b8559b8f456706609e888f369e8db922800a68
*/
import web3 from './web3'; 
import Tracking from './build/Tracking.json'; 

const instance = new web3.eth.Contract(
    Tracking.abi,
     '0x81a0e99b8a691d2f1319783a7e86e90cf594b1e0'
     // Address of the tracking.sol contract in ropsten network
);

export default instance; 