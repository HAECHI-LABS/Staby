const { constants, expectEvent, expectRevert, BN, ether, time } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');
const web3 = require('web3');

const RewardMinterFactory = artifacts.require('RewardMinter');

require('chai').should();
var rewardMinter;
contract ('RewardMinter', accounts  =>{
    var firstId = new BN('0');
    var secondId = new BN('1');
    var por1 = new BN('2');
    var por2 = new BN('3');
    var por3 = new BN('5');
    var contentFee1 = new BN('10000');
    var contentFee2 = new BN('30000');
    var supervisor = "Supervisor";
    var actor = "Actor";
    var author = "Author";
    const [owner, holder1, holder2, holder3, ...others] = accounts;


    describe("createContent", () => {

      beforeEach(async function(){
        rewardMinter = await RewardMinterFactory.new({from : owner});
        await rewardMinter.createContent('TEST1', {from : owner});
        await rewardMinter.createContent('TEST2', {from : owner});
      });

      it("Content's name should be equal name", async () => {
        ((await rewardMinter.getContentInfo(firstId)).name).should.be.equal("TEST1");
        ((await rewardMinter.getContentInfo(secondId)).name).should.be.equal("TEST2");

      });

      it("Content's ID should be equal _contentId", async () => {
        ((await rewardMinter.getContentInfo(firstId)).contentId).should.be.bignumber.equal('0');
        ((await rewardMinter.getContentInfo(secondId)).contentId).should.be.bignumber.equal('1');
      });


      it("Content's active should be equal false", async () => {
        ((await rewardMinter.getContentInfo(firstId)).active).should.be.equal(false);
        ((await rewardMinter.getContentInfo(secondId)).active).should.be.equal(false);
      });

      it("Content's active should be equal true when disabled", async () => {
        await rewardMinter.disableContent(firstId, {from : owner});
        await rewardMinter.disableContent(secondId, {from : owner});
        ((await rewardMinter.getContentInfo(firstId)).active).should.be.equal(true);
        ((await rewardMinter.getContentInfo(secondId)).active).should.be.equal(true);
      });

      it("Content's active should be equal false when activated", async () => {
        await rewardMinter.disableContent(firstId, {from : owner});
        await rewardMinter.disableContent(secondId, {from : owner});
        await rewardMinter.activateContent(firstId, {from : owner});
        await rewardMinter.activateContent(secondId, {from : owner});
        ((await rewardMinter.getContentInfo(firstId)).active).should.be.equal(false);
        ((await rewardMinter.getContentInfo(secondId)).active).should.be.equal(false);
      });
    });


    describe("Add holders", () => {

      beforeEach(async function(){
        this.rewardMinter = await RewardMinterFactory.new({from: owner});
      });

      it("#holder and #portion should same", async () => {
        await expectRevert.unspecified(rewardMinter.addHolders(firstId, [supervisor, actor, author], [holder1,holder2,holder3], [por1,por2], {from : owner}));
      });

      it("portion sum should be 10", async () => {
        await expectRevert.unspecified(rewardMinter.addHolders(firstId, [supervisor, actor, author], [holder1,holder2,holder3], [por1,por1, por3], {from : owner}));
      });

      describe("Vaild Case", () => {

        beforeEach(async function(){
          await rewardMinter.addHolders(firstId, [supervisor, actor, author], [holder1,holder2,holder3], [por1,por2, por3], {from : owner});
          await rewardMinter.addHolders(secondId, [supervisor, actor, author],[holder1,holder2,holder3], [por2, por3, por1], {from : owner});
        });

        it("Holder nickName = holderName", async () => {
          ((await rewardMinter.getHolderInfo(firstId, new BN('0'))).holderName).should.be.equal("Supervisor");
          ((await rewardMinter.getHolderInfo(firstId, new BN('1'))).holderName).should.be.equal("Actor");
          ((await rewardMinter.getHolderInfo(firstId, new BN('2'))).holderName).should.be.equal("Author");
          ((await rewardMinter.getHolderInfo(secondId, new BN('0'))).holderName).should.be.equal("Supervisor");
          ((await rewardMinter.getHolderInfo(secondId, new BN('1'))).holderName).should.be.equal("Actor");
          ((await rewardMinter.getHolderInfo(secondId, new BN('2'))).holderName).should.be.equal("Author");
        });

        it("Holder Address = holderAddress", async () => {
          ((await rewardMinter.getHolderInfo(firstId, new BN('0'))).holderAddress).should.be.equal(holder1);
          ((await rewardMinter.getHolderInfo(firstId, new BN('1'))).holderAddress).should.be.equal(holder2);
          ((await rewardMinter.getHolderInfo(firstId, new BN('2'))).holderAddress).should.be.equal(holder3);
          ((await rewardMinter.getHolderInfo(secondId, new BN('0'))).holderAddress).should.be.equal(holder1);
          ((await rewardMinter.getHolderInfo(secondId, new BN('1'))).holderAddress).should.be.equal(holder2);
          ((await rewardMinter.getHolderInfo(secondId, new BN('2'))).holderAddress).should.be.equal(holder3);
        });

        it("Holder Portion = holderPortion", async () => {
          ((await rewardMinter.getHolderInfo(firstId, new BN('0'))).holderPortion).should.be.bignumber.equal(new BN('2'));
          ((await rewardMinter.getHolderInfo(firstId, new BN('1'))).holderPortion).should.be.bignumber.equal(new BN('3'));
          ((await rewardMinter.getHolderInfo(firstId, new BN('2'))).holderPortion).should.be.bignumber.equal(new BN('5'));
          ((await rewardMinter.getHolderInfo(secondId, new BN('0'))).holderPortion).should.be.bignumber.equal(new BN('3'));
          ((await rewardMinter.getHolderInfo(secondId, new BN('1'))).holderPortion).should.be.bignumber.equal(new BN('5'));
          ((await rewardMinter.getHolderInfo(secondId, new BN('2'))).holderPortion).should.be.bignumber.equal(new BN('2'));
        });
      });
    });


    describe("updateHolders test", () => {
      beforeEach(async function(){
        this.rewardMinter = await RewardMinterFactory.new({from: owner});
        await rewardMinter.deleteHolders(firstId, {from : owner});
        await rewardMinter.deleteHolders(secondId, {from : owner});
        await rewardMinter.addHolders(firstId, [supervisor, actor, author], [holder1,holder2,holder3], [por3,por2, por1], {from : owner});
        await rewardMinter.addHolders(secondId, [supervisor, actor, author], [holder1,holder2,holder3], [por1, por3, por2], {from : owner});
      });

      it("Holder nickName = holderName", async () => {
        ((await rewardMinter.getHolderInfo(firstId, new BN('0'))).holderName).should.be.equal("Supervisor");
        ((await rewardMinter.getHolderInfo(firstId, new BN('1'))).holderName).should.be.equal("Actor");
        ((await rewardMinter.getHolderInfo(firstId, new BN('2'))).holderName).should.be.equal("Author");
        ((await rewardMinter.getHolderInfo(secondId, new BN('0'))).holderName).should.be.equal("Supervisor");
        ((await rewardMinter.getHolderInfo(secondId, new BN('1'))).holderName).should.be.equal("Actor");
        ((await rewardMinter.getHolderInfo(secondId, new BN('2'))).holderName).should.be.equal("Author");
      });

      it("Holder Address = holderAddress", async () => {
        ((await rewardMinter.getHolderInfo(firstId, new BN('0'))).holderAddress).should.be.equal(holder1);
        ((await rewardMinter.getHolderInfo(firstId, new BN('1'))).holderAddress).should.be.equal(holder2);
        ((await rewardMinter.getHolderInfo(firstId, new BN('2'))).holderAddress).should.be.equal(holder3);
        ((await rewardMinter.getHolderInfo(secondId, new BN('0'))).holderAddress).should.be.equal(holder1);
        ((await rewardMinter.getHolderInfo(secondId, new BN('1'))).holderAddress).should.be.equal(holder2);
        ((await rewardMinter.getHolderInfo(secondId, new BN('2'))).holderAddress).should.be.equal(holder3);
      });

      it("Holder Portion = holderPortion", async () => {
        ((await rewardMinter.getHolderInfo(firstId, new BN('0'))).holderPortion).should.be.bignumber.equal(new BN('5'));
        ((await rewardMinter.getHolderInfo(firstId, new BN('1'))).holderPortion).should.be.bignumber.equal(new BN('3'));
        ((await rewardMinter.getHolderInfo(firstId, new BN('2'))).holderPortion).should.be.bignumber.equal(new BN('2'));
        ((await rewardMinter.getHolderInfo(secondId, new BN('0'))).holderPortion).should.be.bignumber.equal(new BN('2'));
        ((await rewardMinter.getHolderInfo(secondId, new BN('1'))).holderPortion).should.be.bignumber.equal(new BN('5'));
        ((await rewardMinter.getHolderInfo(secondId, new BN('2'))).holderPortion).should.be.bignumber.equal(new BN('3'));
      });

    });

    describe("get Reward", () => {
      beforeEach(async function(){
        this.rewardMinter = await RewardMinterFactory.new({from: owner});
      });
      it("content must be actiaated", async () => {
        await rewardMinter.disableContent(firstId, {from : owner});
        await rewardMinter.disableContent(secondId, {from : owner});
        await expectRevert.unspecified(rewardMinter.pay(firstId, contentFee1, {from : owner}));
        await expectRevert.unspecified(rewardMinter.pay(secondId, contentFee2, {from : owner}));
      });

      describe("Vaild Case", () => {
        it("correct amount been paid to each holders", async () => {
          await rewardMinter.activateContent(firstId, {from : owner});
          await rewardMinter.activateContent(secondId, {from : owner});
          await rewardMinter.pay(firstId, contentFee1, {from : owner});
          await rewardMinter.pay(secondId, contentFee2, {from : owner});
          (await rewardMinter.balanceOf(holder1)).should.be.bignumber.equal(new BN('11000'));
          (await rewardMinter.balanceOf(holder2)).should.be.bignumber.equal(new BN('18000'));
          (await rewardMinter.balanceOf(holder3)).should.be.bignumber.equal(new BN('11000'));
        });
      });
    });
});
