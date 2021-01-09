var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'siege window suspect antique assist sample rich manage music tide regular air';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/a5dc022ed8df4754b509e1f289d10b05")
      },
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  },
  solc:{
    optimizer:{
      enable: true,
      runs: 200
    }
  }
};