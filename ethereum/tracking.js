/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
Etherscan: https://ropsten.etherscan.io/tx/0x2249441a2aaee847e7573067c64999b212216f6b3bd07175c7700805bbbd269f
*/
import web3 from './web3'; 
import Tracking from './build/Tracking.json'; 

const instance = new web3.eth.Contract(
    Tracking.abi,
     '0xe65ece5b552e0274ebf900219e1ee1d5e2ed28d7'
     // Address of the tracking.sol contract in ropsten network
);

export default instance; 