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

contract('RewardEscrow', accounts  =>{
    const balanceOfReceiver = new BN('2000000');
    const balanceOfSender = new BN('6000000');
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
        reward = await RewardFactory.new(contents.address, token.address,{from : owner});
        await contents.createContent("CONTENT1", {from : owner});
        await contents.createContent("CONTENT2", {from : owner});
        await contents.addHolders(firstId, [supervisor, actor, author], [holder1, holder2, holder3], [por1, por2, por3], {from : owner});
        await contents.addHolders(secondId, [supervisor, actor, author], [holder1, holder2, holder3], [por2, por3, por1], {from : owner});
        await token.mint(owner, balanceOfSender, {from : owner});
        await token.mint(reward.address, balanceOfReceiver, {from : owner});
        await token.approve(reward.address, balanceOfSender, {from : owner});
    });

    describe("#pay()", () => {
        it("Should fail if content is deactivated", async () => {
            await expectRevert.unspecified(reward.pay(firstId, contentFee1,  {from : owner}));
        });
        describe("Valid case", () => {
            beforeEach(async () => {
                await contents.activateContent(firstId, {from : owner});
                await contents.activateContent(secondId, {from : owner});
                await reward.pay(firstId, contentFee1, {from : owner});
                await reward.pay(secondId, contentFee2, {from : owner});
            });

            it("Appropriate balance of token should distributed", async () => {
                (await reward.getRewards(holder1)).should.be.bignumber.equal(new BN("14000"));
                (await reward.getRewards(holder2)).should.be.bignumber.equal(new BN("23000"));
                (await reward.getRewards(holder3)).should.be.bignumber.equal(new BN("13000"));
            });

            it("msg.sender's balance should decrease", async () => {
                (await token.balanceOf(owner)).should.be.bignumber.equal(balanceOfSender.sub(contentFee1).sub(contentFee2));
            });

            it("Contract's balance should increase", async () => {
                (await token.balanceOf(reward.address)).should.be.bignumber.equal(balanceOfReceiver.add(contentFee1).add(contentFee2));
            });

            it("Appropriate value should be stored in paymentHistory", async () => {
                await reward.pay(firstId, contentFee2, {from : owner});
                ((await reward.paymentsHistory(firstId))[0]).should.be.bignumber.equal(contentFee1);
                ((await reward.paymentsHistory(firstId))[1]).should.be.bignumber.equal(contentFee2);
                (await reward.paymentsHistoryLength(firstId)).should.be.bignumber.equal(new BN('2'));
                (await reward.methods["paymentsHistory(uint256,uint256)"](firstId, new BN('0'))).should.be.bignumber.equal(contentFee1);
                (await reward.methods["paymentsHistory(uint256,uint256)"](firstId, new BN('1'))).should.be.bignumber.equal(contentFee2);
            });
        });
    });

    describe("#withdraw()", () => {
        beforeEach(async () => {
            await contents.activateContent(firstId, {from : owner});
            await contents.activateContent(secondId, {from : owner});
            await reward.pay(firstId, contentFee1, {from : owner});
            await reward.pay(secondId, contentFee2, {from : owner});
            await reward.withdraw(holder1, {from : owner});
            await reward.withdraw(holder3, {from : owner});
        });

        it("Appropriate token been erased", async () => {
            (await reward.getRewards(holder1)).should.be.bignumber.equal(new BN("0"));
            (await reward.getRewards(holder2)).should.be.bignumber.equal(new BN("23000"));
            (await reward.getRewards(holder3)).should.be.bignumber.equal(new BN("0"));
        });

        it("Contract's balance should decrease", async () => {
            (await token.balanceOf(reward.address)).should.be.bignumber.equal(balanceOfReceiver.add(contentFee1).add(contentFee2).sub(new BN('27000')));
        });

        it("Appropriate value should be stored in withdrawalHistory", async () => {
            await reward.pay(firstId, contentFee2, {from : owner});
            await reward.withdraw(holder1, {from : owner});
            ((await reward.withdrawalHistory(holder1))[1]).should.be.bignumber.equal(new BN('8000'));
            ((await reward.withdrawalHistory(holder1))[0]).should.be.bignumber.equal(new BN('14000'));
            (await reward.withdrawalHistoryLength(holder1)).should.be.bignumber.equal(new BN('2'));
            (await reward.withdrawalHistory(holder1, new BN('1'))).should.be.bignumber.equal(new BN('8000'));
            (await reward.withdrawalHistory(holder1, new BN('0'))).should.be.bignumber.equal(new BN('14000'));
        });
    });
});
