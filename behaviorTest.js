const Caver = require('caver-js')
const caver = new Caver('https://api.baobab.klaytn.net:8651/')
const web3 = require('web3');
const { expect } = require('chai');
const { constants, expectEvent, expectRevert, BN, ether, time } = require('@openzeppelin/test-helpers');

const contentsAddress = "0x29580d2C69A78D07fd849D973ec14e393cc5088E";
const tokenAddress = "0x88Bbe7a007Cf185575994c855CEDbd13bcc32213";
const escrowAddress = "0xE000cE22D0BF35666ae3C23Ca011dBd750214149";

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
    console.log("\tActive : " + contentInfo.active);
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
    const PaymentHistory = await reward.methods.paymentHistory(contentId).call();
    console.log("\tContent# " + contentId + " : " + PaymentHistory);
}

async function latestContentId() {
    const contentId = ((new BN(await contents.methods.getContentCounter().call())).subn(1)).toNumber();
    return contentId;
}

async function printLatestContentId() {
    const contentId = await latestContentId();
    console.log(contentId);
}

async function printReward(contentId) {
    const holderLength = (await contents.methods.getHolderNum(contentId).call());
    console.log("reward of holder : " + holderAddress);
    for(let i = 0; i < holderLength; i++) {
        const Reward = await reward.methods.getRrewards(i).call();
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
    console.log("\tWithdrawer" + holderAddress + ": " + WithdrawalHistory);
}

async function approve(address, amount) {
    const receipt = await token.methods.approve(address, amount).send({from:owner, gas:'0x4bfd200'});
    console.log("Approve tx hash : " + receipt.transactionHash);
}

async function main() {
    await createContentTest("Content####");
    const contentId = await latestContentId();
    const holderNames = ["Supervisor", "Actor"];
    const addresses = [user_1, user_2];

    await addHolders(contentId, holderNames, addresses, [4,6]);
    await printHolders(contentId);
    await updateHolders(contentId, holderNames, addresses, [3,7]);
    await printHolders(contentId);

}

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

const keyring = caver.wallet.keyring.createFromPrivateKey(privateKey_Owner);
caver.wallet.add(keyring);

module.exports = {
    createContent,
    getAddresses,
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
    printLatestContentId,
    mint,
    getOwner,
    getEscrowAddress,
    approve,
    printContent
};
