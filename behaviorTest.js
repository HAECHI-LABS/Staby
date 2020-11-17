const Caver = require('caver-js')
const caver = new Caver('https://api.baobab.klaytn.net:8651/')
const web3 = require('web3');
const { expect } = require('chai');
const { constants, expectEvent, expectRevert, BN, ether, time } = require('@openzeppelin/test-helpers');

const contentsAddress = "0x5c26AC2D6a7dc3e79E375341D80B819fc0D1B5F0";
const tokenAddress = "0xC35927E0bB7B1021B6533D477A7C969c240E4553";
const escrowAddress = "0x881EAD4C85141C6B6B424F4aB4B4d17c4069bF17";

const contentsABI = require('./build/contracts/Contents.json').abi;
const tokenABI = require('./build/contracts/RewardToken.json').abi;
const escrowABI = require('./build/contracts/RewardEscrow.json').abi;

const owner = "0x2e3d7182b4d59a295c023C99F41c79BEbae76302";
const privateKey_Owner = '0xe0e14d1353877d5fe0b906b8fc2e7808db69a899683eddd59bd1feb44800038f';

const user_1 = '0x93c5a511b41a5b2d69ecbad4ae98680a5571e8a8';
const privateKey_User = '0xabeaec9f2fd1c7793681c395d176a0bbe3617e3427fbd922b08ff665e8b1b9ae';

const user_2 = '0x180c82da2bbe4196d9d13b3e69baaae4fa9435bf';
const privateKey_User2 = '0xabb811917f85e69f1e8420e85affe82f651bca934ca4ab2beaeb36c2d97c2d13';

const contents = new caver.contract(contentsABI,contentsAddress);

async function createContentTest(contentName) {
    const receipt = await contents.methods.createContent(contentName).send({from:owner, gas:'0x4bfd200'});
    console.log("Create Content tx hash : " + receipt.transactionHash);
}

async function addHolders(contentId, names, addresses, portions){
    const byteNames = names.map(x => web3.utils.toHex(x).padEnd(66, '0'));
    const receipt = await contents.methods.addHolders(contentId, byteNames, addresses, portions).send({from:owner, gas:'0x4bfd200'});
    console.log("Add Holders tx hash : " + receipt.transactionHash);
}

async function printHolders(contentId) {
    const holderLength = (await contents.methods.getHolderNum(contentId).call());
    console.log("Holder info of contentId : " + contentId);
    for(let i = 0; i < holderLength; i++) {
      const holderInfo = await contents.methods.getHolderInfo(contentId,i).call();
      console.log("\tHolder #" + i + " : " + web3.utils.hexToUtf8(holderInfo.holderName));
      console.log("\tAddress : " + holderInfo.holderAddress);
      console.log("\tPortion : " + holderInfo.holderPortion + "0%");
    }
}


async function updateHolders(contentId, names, addresses, portions){
    const byteNames = names.map(x => web3.utils.toHex(x).padEnd(66, '0'));
    const receipt = await contents.methods.updateHolders(contentId, byteNames, addresses, portions).send({from:owner, gas:'0x4bfd200'});
    console.log("Update Holders tx hash : " + receipt.transactionHash);
}


async function main() {
    await createContentTest("Content####");
    const contentId = ((new BN(await contents.methods.getContentCounter().call())).subn(1)).toNumber();
    const holderNames = ["Supervisor", "Actor"];
    const addresses = [user_1, user_2];

    await addHolders(contentId, holderNames, addresses, [4,6]);
    await printHolders(contentId);
    await updateHolders(contentId, holderNames, addresses, [3,7]);
    await printHolders(contentId);
}

function getAddresses() {
    const addresses = [user_1, user_2];
    return addresses;
}

const keyring = caver.wallet.keyring.createFromPrivateKey(privateKey_Owner);
caver.wallet.add(keyring);

module.exports = {
  createContentTest,
  getAddresses,
  updateHolders,
  addHolders,
  printHolders,
};
