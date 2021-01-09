/*
Deploying the contracts to the ropsten network using the command 
truffle deploy --network ropsten  
*/

const Register = artifacts.require("./Register.sol");
const BottleProduction = artifacts.require("./BottleProduction.sol");
const Tracking = artifacts.require(",/Tracking.sol");

module.exports = function(deployer) {
  deployer.deploy(Register);
  deployer.deploy(BottleProduction);
  deployer.deploy(Tracking);
};


/*
To check the deployed smart contracts use the command 
truffle console --network ropsten 
*/