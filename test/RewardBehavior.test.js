const { constants, expectEvent, expectRevert, BN, ether, time } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');
const web3 = require('web3');

const RewardMinterFactory = artifacts.require('RewardMinter');

require('chai').should();
var rewardMinter;
contract ('RewardMinter', accounts  =>{
    var firstId = new BN('0');
    var secondId = new BN('1');
    var thirdId = new BN('2');

    var por1 = new BN('2');
    var por2 = new BN('3');
    var por3 = new BN('5');
    var contentFee1 = new BN('10000');
    var contentFee2 = new BN('30000');
    const [owner, holder1, holder2, holder3, ...others] = accounts;
    //aa


    describe("", () => {

      beforeEach(async function(){
        rewardMinter = await RewardMinterFactory.new({from : owner});
        await rewardMinter.createContent('TEST1', {from : owner});
        await rewardMinter.createContent('TEST2', {from : owner});
      });

      it("", async () => {
        console.log("Info after Content Creation");
        console.log("Content 1");
        console.log("name: ", (await rewardMinter.getContentInfo(firstId)).name);
        console.log("contentID: ", (await rewardMinter.getContentInfo(firstId)).contentId.words[0]);
        console.log("active: ", (await rewardMinter.getContentInfo(firstId)).active);
        console.log("")
        console.log("Content 2");
        console.log("name: ", (await rewardMinter.getContentInfo(secondId)).name);
        console.log("contentID: ", (await rewardMinter.getContentInfo(secondId)).contentId.words[0]);
        console.log("active: ", (await rewardMinter.getContentInfo(secondId)).active);
        console.log("")
        console.log("")
        console.log("")

      });

    });


    describe("", () => {

      beforeEach(async function(){
        this.rewardMinter = await RewardMinterFactory.new({from: owner});

        await rewardMinter.addHolders(firstId, [holder1,holder2,holder3], [por1,por2, por3], {from : owner});
        await rewardMinter.addHolders(secondId, [holder1,holder2,holder3], [por2, por3, por1], {from : owner});
      });

      it("", async () => {
        console.log("Info after Add Holders");
        console.log("Content 1");
        console.log("Holder");
        console.log((await rewardMinter.getHolderInfo(firstId, new BN('0'))).holder, ": ", (await rewardMinter.getHolderInfo(firstId, new BN('0'))).portion.words[0]);
        console.log((await rewardMinter.getHolderInfo(firstId, new BN('1'))).holder, ": ", (await rewardMinter.getHolderInfo(firstId, new BN('1'))).portion.words[0]);
        console.log((await rewardMinter.getHolderInfo(firstId, new BN('2'))).holder, ": ", (await rewardMinter.getHolderInfo(firstId, new BN('2'))).portion.words[0]);
        console.log("")
        console.log("Content 2");
        console.log("Holder");
        console.log((await rewardMinter.getHolderInfo(secondId, new BN('0'))).holder, ": ", (await rewardMinter.getHolderInfo(secondId, new BN('0'))).portion.words[0]);
        console.log((await rewardMinter.getHolderInfo(secondId, new BN('1'))).holder, ": ", (await rewardMinter.getHolderInfo(secondId, new BN('1'))).portion.words[0]);
        console.log((await rewardMinter.getHolderInfo(secondId, new BN('2'))).holder, ": ", (await rewardMinter.getHolderInfo(secondId, new BN('2'))).portion.words[0]);
        console.log("")
        console.log("")
        console.log("")

      });


    });


    describe('', () => {
      beforeEach(async function(){
        this.rewardMinter = await RewardMinterFactory.new({from: owner});
      //  await rewardMinter.deleteHolders(firstId, {from : owner});
        await rewardMinter.deleteHolders(firstId, {from : owner});
        await rewardMinter.deleteHolders(secondId, {from : owner});
        await rewardMinter.addHolders(firstId, [holder1,holder2,holder3], [por3,por2, por1], {from : owner});
        await rewardMinter.addHolders(secondId, [holder1,holder2,holder3], [por1, por3, por2], {from : owner});
      });

      it("", async () => {
        console.log("Info after Update Holders");
        console.log("Content 1");
        console.log("Holder");
        console.log((await rewardMinter.getHolderInfo(firstId, new BN('0'))).holder, ": ", (await rewardMinter.getHolderInfo(firstId, new BN('0'))).portion.words[0]);
        console.log((await rewardMinter.getHolderInfo(firstId, new BN('1'))).holder, ": ", (await rewardMinter.getHolderInfo(firstId, new BN('1'))).portion.words[0]);
        console.log((await rewardMinter.getHolderInfo(firstId, new BN('2'))).holder, ": ", (await rewardMinter.getHolderInfo(firstId, new BN('2'))).portion.words[0]);
        console.log("")
        console.log("Content 2");
        console.log("Holder");
        console.log((await rewardMinter.getHolderInfo(secondId, new BN('0'))).holder, ": ", (await rewardMinter.getHolderInfo(secondId, new BN('0'))).portion.words[0]);
        console.log((await rewardMinter.getHolderInfo(secondId, new BN('1'))).holder, ": ", (await rewardMinter.getHolderInfo(secondId, new BN('1'))).portion.words[0]);
        console.log((await rewardMinter.getHolderInfo(secondId, new BN('2'))).holder, ": ", (await rewardMinter.getHolderInfo(secondId, new BN('2'))).portion.words[0]);
        console.log("")
        console.log("")
        console.log("")

      });
    });

    describe("", () => {

      beforeEach(async function(){
        this.rewardMinter = await RewardMinterFactory.new({from: owner});

      });
      it("", async () => {
        await rewardMinter.disableContent(firstId, {from : owner});
        await rewardMinter.disableContent(secondId, {from : owner});
        console.log("Info after disable Content");
        console.log("Content 1");
        console.log("active: ", (await rewardMinter.getContentInfo(firstId)).active);
        console.log("")
        console.log("Content 2");
        console.log("active: ", (await rewardMinter.getContentInfo(secondId)).active);
        console.log("")
        console.log("")
        console.log("")

      });

      describe("", () => {

        beforeEach(async function(){

        });

        it("", async () => {
          await rewardMinter.activateContent(firstId, {from : owner});
          await rewardMinter.activateContent(secondId, {from : owner});
          await rewardMinter.pay(firstId, contentFee1, {from : owner});
          console.log("Info after payment1");
          console.log((await rewardMinter.getHolderInfo(secondId, new BN('0'))).holder, ": ", (await rewardMinter.getHolderInfo(secondId, new BN('0'))).portion.words[0], ": ", (await rewardMinter.balanceOf(holder1)).words[0]);
          console.log((await rewardMinter.getHolderInfo(secondId, new BN('1'))).holder, ": ", (await rewardMinter.getHolderInfo(secondId, new BN('1'))).portion.words[0], ": ", (await rewardMinter.balanceOf(holder2)).words[0]);
          console.log((await rewardMinter.getHolderInfo(secondId, new BN('2'))).holder, ": ", (await rewardMinter.getHolderInfo(secondId, new BN('2'))).portion.words[0], ": ", (await rewardMinter.balanceOf(holder3)).words[0]);
          console.log("")
          console.log("")
          console.log("")

        });

        it("Content Information", async () => {
          await rewardMinter.pay(secondId, contentFee2, {from : owner});
          console.log("Info after payment2");
          console.log((await rewardMinter.getHolderInfo(firstId, new BN('0'))).holder, ": ", (await rewardMinter.getHolderInfo(firstId, new BN('0'))).portion.words[0], ": ", (await rewardMinter.balanceOf(holder1)).words[0]);
          console.log((await rewardMinter.getHolderInfo(firstId, new BN('1'))).holder, ": ", (await rewardMinter.getHolderInfo(firstId, new BN('1'))).portion.words[0], ": ", (await rewardMinter.balanceOf(holder2)).words[0]);
          console.log((await rewardMinter.getHolderInfo(firstId, new BN('2'))).holder, ": ", (await rewardMinter.getHolderInfo(firstId, new BN('2'))).portion.words[0], ": ", (await rewardMinter.balanceOf(holder3)).words[0]);
          console.log("")
          console.log("")
          console.log("")

          });

      });

    });

});
