const Caver = require('caver-js')
const caver = new Caver('https://api.baobab.klaytn.net:8651/')
const web3 = require('web3');
const { expect } = require('chai');
const { constants, expectEvent, expectRevert, BN, ether, time } = require('@openzeppelin/test-helpers');

const contentsAddress = "0x690Dbf2747E3CF56EF38acc27151dB85C882A3EE";
const tokenAddress = "0xD8e53f0C9c4211635fE725c2805ee724DBbCCe9b";
const escrowAddress = "0x94F58b24d1bd53b0b6Ee0ADdD5b142a24117CF50";

const contentsABI = require('./build/contracts/Contents.json').abi;
const tokenABI = require('./build/contracts/RewardToken.json').abi;
const escrowABI = require('./build/contracts/RewardEscrow.json').abi;

const owner = "0x2e3d7182b4d59a295c023C99F41c79BEbae76302";
const privateKey_Owner = '0xe0e14d1353877d5fe0b906b8fc2e7808db69a899683eddd59bd1feb44800038f';

const user_1 = '0x93c5a511b41a5b2d69ecbad4ae98680a5571e8a8';
const user_2 = '0x180c82da2bbe4196d9d13b3e69baaae4fa9435bf';
const user_3 = '0x70e180b5a1556d509edc0ff013dd63434f4d5174';
const user_4 = '0x79fc12ba37bfb3c88510923a0917aed53d551b57';

const contents = new caver.contract(contentsABI,contentsAddress);
const token = new caver.contract(tokenABI,tokenAddress);
const reward = new caver.contract(escrowABI,escrowAddress);

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
        console.log("\tPortion : " + holderInfo.holderPortion + "0%");
    }
}

async function printContent(contentId) {
    console.log("Content info of contentId : " + contentId);
    const contentInfo = await contents.methods.getContentInfo(contentId).call();
    console.log("\tName : " + contentInfo.name);
    console.log("\tID : " + contentInfo.contentId);
    console.log("\tDisabled : " + contentInfo.disabled);
}

async function mint(address, amount) {
    const receipt = await token.methods.mint(address, amount).send({from:owner, gas:'0x4bfd200'});
    console.log("Mint tx hash : " + receipt.transactionHash);
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


async function activateContent(contentId){
    const receipt = await contents.methods.activateContent(contentId).send({from:owner, gas:'0x4bfd200'});
    console.log("Activate Content tx hash : " + receipt.transactionHash);
}


async function payment(contentId, amount){
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


async function printReward(contentId) {
    const holderLength = (await contents.methods.getHolderNum(contentId).call());
    console.log("Reward of holder");
    for(let i = 0; i < holderLength; i++) {
        const holderInfo = await contents.methods.getHolderInfo(contentId,i).call();
        const Reward = await reward.methods.getRewards(holderInfo.holderAddress).call();
        console.log("\tHolder#" + i + ": " + Reward);
    }
}
async function withdrawal(holderAddress){
    const receipt = await reward.methods.withdraw(holderAddress).send({from:owner, gas:'0x4bfd200'});
    console.log("Withdrawal tx hash : " + receipt.transactionHash);
}

async function printWithdrawalHistory(holderAddress){
    console.log("WithdrawalHistory of withdrawer : " + holderAddress);
    const WithdrawalHistory = await reward.methods.withdrawalHistory(holderAddress).call();
    console.log("\tHistory : " + WithdrawalHistory);
}

async function approve(address, amount) {
    const receipt = await token.methods.approve(address, amount).send({from:owner, gas:'0x4bfd200'});
    console.log("Approve tx hash : " + receipt.transactionHash);
}

async function main() {
    await createContent("Content");
    const contentId = await latestContentId();
    const holderNames_1 = ["supervisor", "author", "actor"];
    const holderNames_2 = ["supervisor", "author", "actress"];

    const addresses_1 = [user_1, user_2, user_3];
    const addresses_2 = [user_1, user_2, user_4];

    const contentProfit_1 = 100000
    const contentProfit_2 = 150000
    await printContent(contentId);

    await addHolders(contentId, holderNames_1, addresses_1, [1,3, 6]);
    await printHolders(contentId);
    
    await updateHolders(contentId, holderNames_1, addresses_1, [3,2, 5]);
    await printHolders(contentId);

    await activateContent(contentId);
    await deactivateContent(contentId);
    await activateContent(contentId);

    await mint(owner, contentProfit_1);
    await approve(escrowAddress, contentProfit_1);
    await payment(contentId, contentProfit_1);

    await mint(owner, contentProfit_2);
    await approve(escrowAddress, contentProfit_2);
    await payment(contentId, contentProfit_2);

    await printReward(contentId);
    await printPaymentHistory(contentId);

    await withdrawal(user_1);

    await printReward(contentId);
    await printWithdrawalHistory(user_1);

}

/*
function getEscrowAddress() {
    const address = escrowAddress;
    return address;
}

function getAddresses() {
    const addresses = [user_1, user_2];
    return addresses;
}

function getOwner() {
    const address = owner;
    return address;
}
*/ 

const keyring = caver.wallet.keyring.createFromPrivateKey(privateKey_Owner);
caver.wallet.add(keyring);
main();

module.exports = {
    createContent,
    updateHolders,
    addHolders,
    printHolders,
    deactivateContent,
    activateContent,
    latestContentId,
    payment,
    printPaymentHistory,
    printReward,
    withdrawal,
    printWithdrawalHistory,
    mint,
    approve,
    printContent
};
