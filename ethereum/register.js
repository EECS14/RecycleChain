/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
*/
import web3 from './web3'; 
import register from './build/Register.json'; 

const instance = new web3.eth.Contract(
    register.abi,
     '0x7126ec4f68added009015a1f5ac718c4896faa2e'
     // Address of the regist.sol contract in ropsten network
);

export default instance; 