require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food rent rifle pitch era harvest pave army gas'; 
let testAccounts = [
"0xe4c841f3deb25160c9e4e163d1e300c7f347a6cd702bdac592036800df38e00e",
"0x44feee950070fab17aead3a620e31dc276958ad0e0281af33ff2275be4b70f57",
"0x4ad72693bf8605a8b1c0cdb6086b6ad5594791dd0ced54c7706fd02d8de42a43",
"0x614f56e9a651ddc50c386db4a49731b037a11f25675e50e1f29d26d9d7484d4f",
"0x19fe7500c7e51ee451dbfe575a8fb502d60f9b6b5d5e41001615fb25e755e7b1",
"0xf96dd2f5cec09323c2a12c5ca908d0f8eca6728367dc904dc77e92792d58b499",
"0x51fb9cd0d2f6f3c245b104fa69f0b9b96061267e8818137031c100276ecbf892",
"0xdecd6ce175d6d6cd177e03cd0c8ddaa399c0754fbdca5a91e8903b6e360da81d",
"0x4d1ac95e9d13a3398a4b71b46efe3f9742db7b1fb87cc6409032d37b2e419581",
"0xe914aa7e303970b6754064b5857e19446bca943c3f680c1537c227bfd41c0460"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

