/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
Etherscan: https://ropsten.etherscan.io/tx/0x00cd3558d090c045da88cb8a5e0460a5882c3688614223dd143b34258e3bd625
*/
import web3 from './web3'; 
import Tracking from './build/Tracking.json'; 

const instance = new web3.eth.Contract(
    Tracking.abi,
     '0x5bcFbb0e3CA2502577A8C1D32D2567f4ED176D12'
     // Address of the tracking.sol contract in ropsten network
);

export default instance; 