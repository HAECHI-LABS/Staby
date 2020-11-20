const { constants, expectEvent, expectRevert, BN, ether, time } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');
const web3 = require('web3');

const ContentsFactory = artifacts.require('Contents');
const ERC20Factory = artifacts.require('RewardToken');
const RewardFactory = artifacts.require('RewardGateway');

require('chai').should();
let contents;
let token;
let reward;

contract('RewardGateway', accounts  =>{
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
        token = await ERC20Factory.new({from : owner});
        reward = await RewardFactory.new(contents.address, token.address,{from : owner});
        await token.setGateway(reward.address, {from : owner});
        await contents.createContent("CONTENT1", {from : owner});
        await contents.createContent("CONTENT2", {from : owner});
        await contents.addHolders(firstId, [supervisor, actor, author], [holder1, holder2, holder3], [por1, por2, por3], {from : owner});
        await contents.addHolders(secondId, [supervisor, actor, author], [holder1, holder2, holder3], [por2, por3, por1], {from : owner});
        await token.addMinter(reward.address, {from : owner});
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
                (await token.balanceOf(holder1)).should.be.bignumber.equal(new BN("14000"));
                (await token.balanceOf(holder2)).should.be.bignumber.equal(new BN("23000"));
                (await token.balanceOf(holder3)).should.be.bignumber.equal(new BN("13000"));
            });

            it("totalsupply should increase", async () => {
                (await token.totalSupply()).should.be.bignumber.equal(contentFee1.add(contentFee2));
            });

            it("Appropriate value should be stored in paymentHistory", async () => {
                await reward.pay(firstId, contentFee2, {from : owner});
                ((await reward.paymentsHistory(firstId))[0]).should.be.bignumber.equal(contentFee1);
                ((await reward.paymentsHistory(firstId))[1]).should.be.bignumber.equal(contentFee2);
                (await reward.paymentsHistoryLength(firstId)).should.be.bignumber.equal(new BN('2'));
                (await reward.methods["paymentsHistory(uint256,uint256)"](firstId, new BN('0'))).should.be.bignumber.equal(contentFee1);
            });
        });
    });

    describe("#exit()", () => {
        beforeEach(async () => {
            await contents.activateContent(firstId, {from : owner});
            await contents.activateContent(secondId, {from : owner});
            await reward.pay(firstId, contentFee1, {from : owner});
            await reward.pay(secondId, contentFee2, {from : owner});
            await token.approve(reward.address, new BN("14000"), {from : holder1});
            await token.approve(reward.address, new BN("13000"), {from : holder3});
            await reward.exit(holder1, {from : owner});
            await reward.exit(holder3, {from : owner});
        });

        it("Appropriate token been erased", async () => {
            (await token.balanceOf(holder1)).should.be.bignumber.equal(new BN("0"));
            (await token.balanceOf(holder2)).should.be.bignumber.equal(new BN("23000"));
            (await token.balanceOf(holder3)).should.be.bignumber.equal(new BN("0"));
        });

        it("total supply should decrease", async () => {
            (await token.totalSupply()).should.be.bignumber.equal(contentFee1.add(contentFee2).sub(new BN('27000')));
        });

        it("Appropriate value should be stored in exitHistory", async () => {
            await reward.pay(firstId, contentFee2, {from : owner});
            await token.approve(reward.address, new BN("8000"), {from : holder1});
            await reward.exit(holder1, {from : owner});
            ((await reward.exitHistory(holder1))[1]).should.be.bignumber.equal(new BN('8000'));
            ((await reward.exitHistory(holder1))[0]).should.be.bignumber.equal(new BN('14000'));
            (await reward.exitHistoryLength(holder1)).should.be.bignumber.equal(new BN('2'));
            (await reward.methods["exitHistory(address,uint256)"](holder1, new BN('1'))).should.be.bignumber.equal(new BN('8000'));
            (await reward.methods["exitHistory(address,uint256)"](holder1, new BN('0'))).should.be.bignumber.equal(new BN('14000'));
        });
    });
});
