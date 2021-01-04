/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
*/
import web3 from './web3'; 
import BottleProduction from './build/BottleProduction.json'; 

const instance = new web3.eth.Contract(
    BottleProduction.abi,
     '0xb89704f6501011c2ea4ca6ab91e4b690b8ca62ed'
     // Address of the bottleproduction.sol contract in ropsten network
);

export default instance; 