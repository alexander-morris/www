const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require('web3');

var mnemonic = "opinion destroy betray ..."; // 12 word mnemonic
var provider = new HDWalletProvider(mnemonic, "http://localhost:8545");

const web3 = new Web3(provider);

