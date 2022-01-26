require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remind million gloom area swallow test'; 
let testAccounts = [
"0xd5e928eb3ad55e25ede2a6540db37c4e4b148163c57fd87bb6f0c09832f0fe4a",
"0x1b73d1a1239d04679fbd258a19d2e90165ddd3321c35bc6f5cc26e43915e9031",
"0x61a6aaf6a4ab4fa9bb2df9d5bd4e7b98f101d2256d3ac03af161a93546180ab6",
"0x7e0d78ff96cf99d2ae8c7ecafe2ec4d01afd213c0bcc2e6f24e519cc9eb9d8f6",
"0xd4843835744bcf8fe4d3fe4fec0d3ba2421acd30c880ded994df45a388630c7b",
"0x55eab44eebae37524119a3982a94a03737fc54306c319eecd727bfbc7f5e4a58",
"0x1cd181a074cfba31034abf45c376ca300e3c546a4948faf889b18bc36557eade",
"0x05f19b51fb9a00408afad10a04abb19abb91db09753ede3d2aec3096abd462a9",
"0xd3ed29e88419ea155301ac01d2c33e44a1222b1056c0d18d097d4e638a772f72",
"0xabd0a9a63d6a95e0c6086ce825e798198893ed241e80e980c6f7ddd836dc335f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


