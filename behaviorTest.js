const Caver = require('caver-js')
const caver = new Caver('https://api.baobab.klaytn.net:8651/')
const web3 = require('web3');
const { expect } = require('chai');
const { constants, expectEvent, expectRevert, BN, ether, time } = require('@openzeppelin/test-helpers');

const contentsAddress = "0x37e07Ad8FD41B690724f1fB1F5E66e44f97b8845";
const tokenAddress = "0xE179F7B138D7d0449002ac9f0149Dc5F6c8a145F";
const gatewayAddress = "0xb453AaBFD51944067Fc1Eea4F58e19F6cEe7Fc7d";

const contentsABI = require('./build/contracts/Contents.json').abi;
const tokenABI = require('./build/contracts/RewardToken.json').abi;
const gatewayABI = require('./build/contracts/RewardGateway.json').abi;

//const owner = "<WALLET ADDRESS>";
//const privateKey_Owner = '<WALLET PRIVATE_KEY>';

const owner = "0x084f6ed974d619f14f4a0c488db2f400676dfaf7";
const privateKey_Owner = '0x514e38bf8d40047662f122e936fb990bedc2a183558c0a1f77caa938989a176a';

const user_1 = '0xd3d46e5fad1d359d143e8b1d554c0fce083fa4e7';
const user_2 = '0x180c82da2bbe4196d9d13b3e69baaae4fa9435bf';
const user_3 = '0x70e180b5a1556d509edc0ff013dd63434f4d5174';
const user_4 = '0x79fc12ba37bfb3c88510923a0917aed53d551b57';

const user_1_privatekey = '0xc00e89efc609c2a03d7971a187e6dc6ed60f7b1c326f00488f7da46730500109';

const contents = new caver.contract(contentsABI,contentsAddress);
const token = new caver.contract(tokenABI,tokenAddress);
const reward = new caver.contract(gatewayABI,gatewayAddress);

async function createContent(contentName) {
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
        console.log("\tPortion : " + (holderInfo.holderPortion/10000) + "0%");
    }
}

async function printContent(contentId) {
    console.log("Content info of contentId : " + contentId);
    const contentInfo = await contents.methods.getContentInfo(contentId).call();
    console.log("\tName : " + contentInfo.name);
    console.log("\tID : " + contentInfo.contentId);
    console.log("\tDisabled : " + contentInfo.disabled);
}

async function updateHolders(contentId, names, addresses, portions){
    const byteNames = names.map(x => web3.utils.toHex(x).padEnd(66, '0'));
    const receipt = await contents.methods.updateHolders(contentId, byteNames, addresses, portions).send({from:owner, gas:'0x4bfd200'});
    console.log("Update Holders tx hash : " + receipt.transactionHash);
}


async function deactivateContent(contentId){
    const receipt = await contents.methods.deactivateContent(contentId).send({from:owner, gas:'0x4bfd200'});
    console.log("Deactivate Content tx hash : " + receipt.transactionHash);
}

async function mint(mintAddress, amount){
    await token.methods.addMinter(owner).send({from:owner, gas:'0x4bfd200'});
    const receipt = await token.methods.mint(mintAddress, amount).send({from:owner, gas:'0x4bfd200'});
    console.log("mintAddress's balance : " + await token.methods.balanceOf(mintAddress).call());
    console.log("Mint tx hash : " + receipt.transactionHash);
}

async function transferOwnership(newOwner){
    const receipt = await token.methods.transferOwnership(newOwner).send({from:owner, gas:'0x4bfd200'});
    console.log("Owner : " + await token.methods.owner().call());
    console.log("Transfer owner tx hash : " + receipt.transactionHash);
}

async function activateContent(contentId){
    const receipt = await contents.methods.activateContent(contentId).send({from:owner, gas:'0x4bfd200'});
    console.log("Activate Content tx hash : " + receipt.transactionHash);
}


async function payment(contentId, amount){
    await token.methods.addMinter(gatewayAddress).send({from:owner, gas:'0x4bfd200'});
    const receipt = await reward.methods.pay(contentId, amount).send({from:owner, gas:'0x4bfd200'});
    console.log("Payment Content tx hash : " + receipt.transactionHash);
}


async function printPaymentHistory(contentId){
    console.log("PaymentHistory of contentId : " + contentId);
    const PaymentHistory = await reward.methods.paymentsHistory(contentId).call();
    console.log("\tContent# " + contentId + " : " + PaymentHistory);
}


async function latestContentId() {
    const contentId = ((new BN(await contents.methods.contentCounter().call())).subn(1)).toNumber();
    console.log("Latest Content ID : ", contentId);
    return contentId;
}


async function printExitHistory(holderAddress){
    console.log("exitHistory of exiter : " + holderAddress);
    const exitHistory = await reward.methods["exitHistory(address)"](holderAddress).call();
    console.log("\tHistory : " + exitHistory);
}


async function approveAndExit(holderAddress, amount) {
    const receipt = await token.methods.approveAndExit(amount).send({from:holderAddress, gas:'0x4bfd200'});
    console.log("Approve and Exit tx hash : " + receipt.transactionHash);
}

async function getBalance(holderAddress) {
    console.log("Balance of address : " + holderAddress);
    const balance = await token.methods.balanceOf(holderAddress).call();
    console.log("\tBalance : " + balance);
}

async function main() {
    //await token.methods.setGateway(gatewayAddress).send({from : owner, gas:'0x4bfd200'});
    await createContent("Content");
    const contentId = await latestContentId();
    const holderNames_1 = ["supervisor", "author", "actor"];
    const holderNames_2 = ["supervisor", "author", "actress"];

    const addresses_1 = [user_1, user_2, user_3];
    const addresses_2 = [user_1, user_2, user_4];

    const contentProfit_1 = 100000
    const contentProfit_2 = 150000
    await printContent(contentId);

    await addHolders(contentId, holderNames_1, addresses_1, [30000,20000, 50000]);
    await printHolders(contentId);
    
    await updateHolders(contentId, holderNames_2, addresses_2, [10050,30050, 59900]);
    await printHolders(contentId);

    await activateContent(contentId);
    await deactivateContent(contentId);
    await activateContent(contentId);

    await payment(contentId, contentProfit_1); 
    await payment(contentId, contentProfit_2);
    
    await getBalance(user_1);
    await printPaymentHistory(contentId);

    await approveAndExit(user_1, 3000);

    await printExitHistory(user_1);
    await getBalance(user_1);
    await getBalance(owner);
}
/*
async function main() {
    const decimals = new BN('1000000000000000000'); // 10**18
    const mintAmount = (new BN('200000000').mul(decimals)).toString();
    await mint(user_1, mintAmount);
}
*/
const keyring = caver.wallet.keyring.createFromPrivateKey(privateKey_Owner);
const keyring_user = caver.wallet.keyring.createFromPrivateKey(user_1_privatekey);

caver.wallet.add(keyring);
caver.wallet.add(keyring_user);

main();
//test();




