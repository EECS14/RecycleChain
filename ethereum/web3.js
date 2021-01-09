/*
Purpose: import this file to get access to web3
Primary provider is MetaMask 
*/
import Web3 from 'web3'; 

//Connect metamask to the webapp 

window.ethereum.enable().catch(error => {
  // User denied account access
 console.log(error)
})


//current provider is the provider injected by MetaMask 
let web3;

//typeof is used to check if window is defined 
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider( 'https://ropsten.infura.io/v3/a5dc022ed8df4754b509e1f289d10b05');
  web3 = new Web3(provider);
} 

export default web3;
