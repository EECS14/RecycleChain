/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
Etherscan: https://ropsten.etherscan.io/tx/0x1569a64e3d51a7f59a41e80773d63a3128b8e740dca7109ead72378257c0d4df
*/
import web3 from './web3'; 
import register from './build/Register.json'; 

const instance = new web3.eth.Contract(
    register.abi,
     '0x7126ec4f68added009015a1f5ac718c4896faa2e'
     // Address of the regist.sol contract in ropsten network
);

export default instance; 