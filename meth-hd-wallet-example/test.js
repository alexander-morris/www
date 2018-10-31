const { generateMnemonic, EthHdWallet } = require('eth-hd-wallet')

const mnemonic = "round violin orange unit inherit reduce spray dinner allow island you sting"
console.log(mnemonic)

const wallet = EthHdWallet.fromMnemonic(mnemonic)

console.log( wallet instanceof EthHdWallet ); /* true */

wallet.generateAddresses(10)

console.log( wallet.getAddresses() )


const wallet2 = EthHdWallet.fromxpkey("xprv9s21ZrQH143K3SamrPShFgsToU42veUiAg77PTMp4oJjfsVKC2WqmBjVfWFW7xgRfHgsHmCLL8uUjtydhxGEnJCBC34cSVeauY5Lnhey79g")

console.log( wallet2 instanceof EthHdWallet ); /* true */

wallet2.generateAddresses(10)

console.log( wallet2.getAddresses() )

