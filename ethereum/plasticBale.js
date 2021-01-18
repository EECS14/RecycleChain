/*
purpose: Returns a new instance of plasticbale.sol 
*/

import web3 from './web3'; 
import plasticbale from './build/PlasticBale.json'; 

export default (address) => {
return new web3.eth.Contract(plasticbale.abi,
    address
    ); 

};