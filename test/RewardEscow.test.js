const { constants, expectEvent, expectRevert, BN, ether, time } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');
const web3 = require('web3');

const ContentsFactory = artifacts.require('Contents');
const ERC20Factory = artifacts.require('RewardToken');
const RewardFactory = artifacts.require('RewardEscrow');

require('chai').should();
let contents;
let token;
let reward;

contract ('RewardEscrow', accounts  =>{
    const balanceOfReceiver = new BN('20000');
    const balanceOfSender = new BN('60000');
    const firstId = new BN('0');
    const secondId = new BN('1');
    const por1 = new BN('2');
    const por2 = new BN('3');
    const por3 = new BN('5');
    const contentFee1 = new BN('10000');
    const contentFee2 = new BN('40000');
    const supervisor = web3.utils.toHex("Supervisor");
    const actor = web3.utils.toHex("Actor");
    const author = web3.utils.toHex("Author");
    const [owner, holder1, holder2, holder3, ...others] = accounts;
    beforeEach(async () => {
        contents = await ContentsFactory.new({from : owner});
        token = await ERC20Factory.new( {from : owner});
        reward = await RewardFactory.new(token.address, contents.address, {from : owner});
        await contents.createContent("CONTENT1", {from : owner});
        await contents.createContent("CONTENT2", {from : owner});
        await contents.addHolders(firstId, [supervisor, actor, author], [holder1, holder2, holder3], [por1, por2, por3], {from : owner});
        await contents.addHolders(secondId, [supervisor, actor, author], [holder1, holder2, holder3], [por2, por3, por1], {from : owner});
    });

    describe("#pay()", () => {
        beforeEach(async () => {
            await token.mint(owner, balanceOfSender, {from : owner});
            await token.mint(reward.address, balanceOfReceiver, {from : owner});
            console.log(await(contents.getHolderNum(firstId)));
            console.log(await(contents.denominator()));
            console.log(await(contents.getHolderInfo(firstId, firstId)));
            console.log(await(reward.getAddress()));
        });
       it("test", async () => {
            await reward.pay(firstId, contentFee1, reward.address, {from : owner});
            await reward.pay(secondId, contentFee2, reward.address, {from : owner});
        });

        it("Appropriate token been distributed", async () => {
            (await reward.getReward(holder1)).should.be.bignumber.equal(new BN("14000"));
            (await reward.getReward(holder2)).should.be.bignumber.equal(new BN("23000"));
            (await reward.getReward(holder3)).should.be.bignumber.equal(new BN("13000"));
        });

        it("msg.sender's balance should decrease", async () => {
            (await token.balanceOf(owner)).should.be.bignumber.equal(balanceOfSender.sub(contentFee1).sub(contentFee2));
        });

        it("contract's balance should increase", async () => {
            (await token.balanceOf(reward.address)).should.be.bignumber.equal(balanceOfReceiver.add(contentFee1).add(contentFee2));
        });

        it("Appropriate value should be stored in paymentHistory", async () => {
            await reward.pay(firstId, contentFee2, {from : owner});
            ((await reward.paymentsHistory(firstId)).firstId).should.be.bignumber.equal(contentFee2);
            ((await reward.paymentsHistory(firstId)).secondId).should.be.bignumber.equal(contentFee1);
            (await reward.paymentsHistoryLength(firstId)).should.be.bignumber.equal(new BN('2'));
            (await reward.paymentsHistory(firstId, new BN('0'))).should.be.bignumber.equal(contentFee2);
            (await reward.paymentsHistory(firstId, new BN('1'))).should.be.bignumber.equal(contentFee1);
        });


    });


    describe("#withdraw()", () => {
          beforeEach(async () => {
              await token.mint(owner, balanceOfSender);
              await token.mint(reward.address, balanceOfReceiver);
              await reward.pay(firstId, contentFee1, {from : owner});
              await reward.pay(firstId, contentFee2, {from : owner});
              await reward.withdraw(holder1, {from : owner});
              await reward.withdraw(holder3, {from : owner});
          });

          it("Appropriate token been erased", async () => {
              _rewards[holder1].should.be.bignumber.equal(new BN("0"));
              _rewards[holder2].should.be.bignumber.equal(new BN("23000"));
              _rewards[holder3].should.be.bignumber.equal(new BN("0"));
          });

          it("contract's balance should decrease", async () => {
              (await token.balanceOf(reward.address)).should.be.bignumber.equal(blanaceOfReceiver.add(contentFee1).add(contentFee2).sub(new BN('27000')));
          });

          it("Appropriate value should be stored in withdrawalHistory", async () => {
              await reward.pay(firstId, contentFee2, {from : owner});
              await reward.withdraw(holder1, {from : owner});
              ((await reward.withdrawalHistory(holder1)).firstId).should.be.bignumber.equal(new BN('8000'));
              ((await reward.withdrawalHistory(holder1)).secondId).should.be.bignumber.equal(new BN('14000'));
              (await reward.withdrawalHistoryLength(holder1)).should.be.bignumber.equal(new BN('2'));
              (await reward.withdrawalHistory(holder1, new BN('0'))).should.be.bignumber.equal(new BN('8000'));
              (await reward.withdrawalHistory(holder1, new BN('1'))).should.be.bignumber.equal(new BN('14000'));
          });


      });





});
