/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
Etherscan: https://ropsten.etherscan.io/tx/0xdd82c9e0dbc600e899aa03ef1232cbf193b16b7617335ea07f37e47a37d275c3
*/
import web3 from './web3'; 
import BottleProduction from './build/BottleProduction.json'; 

const instance = new web3.eth.Contract(
    BottleProduction.abi,
     '0x8eb2eff803db8f9814504c2001bb1960ea4e3bd5'
     // Address of the bottleproduction.sol contract in ropsten network
);

export default instance; 