const { constants, expectEvent, expectRevert, BN, ether, time } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');
const web3 = require('web3');

const ERC20Factory = artifacts.require('RewardToken');
const RewardFactory = artifacts.require('RewardGateway');
const ContentsFactory = artifacts.require('Contents');

const ERC20 = require('./erc20/ERC20.behavior');
const ERC20Lockable = require('./erc20/ERC20Lockable.behavior');
const ERC20Mintable = require('./erc20/ERC20Mintable.behavior');
const ERC20Burnable = require('./erc20/ERC20Burnable.behavior');

const Pausable = require('./library/Pausable.test');
const Freezable = require('./library/Freezable.test');
require('chai').should();

contract('RewardToken', function(account)  {
  const name = 'Reward';
  const symbol = 'REW';
  const decimals = new BN('18');
  const INITIAL_SUPPLY = new BN('0');
  const [owner, sender, recipient, spender, withdrawer, ...others] = account;
  const amount = new BN('100');
  const exitAmount = new BN('40000');
  beforeEach(async function() {
    this.contents = await ContentsFactory.new({from : owner});
    this.token = await ERC20Factory.new({from : owner});
    this.reward = await RewardFactory.new(this.contents.address, this.token.address,{from : owner});
    await this.token.setGateway(this.reward.address, {from : owner});
    await this.token.addMinter(owner, {from : owner});
    this.contract = this.token;
    this.owner = owner;
  });

  ERC20.constructor(name,symbol,decimals,INITIAL_SUPPLY,owner);

  describe('ERC20 Spec', function() {
    beforeEach(async function() {
      await this.token.mint(owner, amount.muln(100), {from:owner});
      await this.token.transfer(sender, amount, {from:owner});
    });

    ERC20.transfer(sender, recipient, amount, [Freezable.whenNotFrozen, Pausable.whenNotPaused, ERC20Lockable.checkLock]);

    ERC20.transferFrom(sender, recipient, spender, amount, [Freezable.whenNotFrozen, Pausable.whenNotPaused, ERC20Lockable.checkLock]);

    ERC20.approve(sender, spender, amount);
  });

  describe('ERC20Lockable Spec', function() {
    beforeEach(async function() {
      await this.token.mint(owner, new BN('1000000'), {from : owner});
      await this.token.transfer(sender, amount, {from : owner});
    });

    ERC20Lockable.transferWithLockUp(owner, recipient, amount);

    ERC20Lockable.unlock(owner, recipient, amount);

    ERC20Lockable.releaseLock(owner, others[0], recipient, amount);
  });

  describe('ERC20Mintable Spec', function(){
    ERC20Mintable.mint(owner, others[0], recipient, amount);

    ERC20Mintable.finishMint(owner, others[0]);
  });

  describe('ERC20Burnable Spec', function(){
    beforeEach(async function() {
      await this.token.mint(owner, new BN('100000'), {from : owner});
      await this.token.transfer(sender, amount, {from : owner});
    });

    ERC20Burnable.burn(owner, amount, [Pausable.whenNotPaused]);

    ERC20Burnable.burnFrom(owner, spender, amount, [Pausable.whenNotPaused]);
  });

  describe('#approveAndExit()', function() {
    beforeEach(async function() {
      await this.token.mint(withdrawer, new BN('100000'), {from : owner});
      await this.token.approveAndExit(exitAmount ,{from : withdrawer});
    });

    /*
    it('allowance should set appropriately', async function() {
      (await this.token.allowance(withdrawer, this.reward.address)).should.be.bignumber.equal(exitAmount);
    });
    */
    
    it("Appropriate token been erased", async function() {
      (await this.token.balanceOf(withdrawer)).should.be.bignumber.equal(new BN("60000"));
    });

    it("Appropriate token been transferred", async function() {
      (await this.token.balanceOf(owner)).should.be.bignumber.equal(new BN('40000'));
    });

    it("Appropriate value should be stored in exitHistory", async function() {
        ((await this.reward.exitHistory(withdrawer))[0]).should.be.bignumber.equal(new BN('40000'));
        (await this.reward.exitHistoryLength(withdrawer)).should.be.bignumber.equal(new BN('1'));
    });
  });
});
