/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
Etherscan: https://ropsten.etherscan.io/tx/0xde991c52af60d4ed5afec08a3005348074d1d820c0a18be84de02167c347e4aa
*/
import web3 from './web3'; 
import Tracking from './build/Tracking.json'; 

const instance = new web3.eth.Contract(
    Tracking.abi,
     '0xEd82b8C6DAC57296472ea16B5745496bC284C2fE'
     // Address of the tracking.sol contract in ropsten network
);

export default instance; 