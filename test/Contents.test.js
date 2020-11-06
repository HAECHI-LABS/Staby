const { constants, expectEvent, expectRevert, BN, ether, time } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');
const web3 = require('web3');

const contentsFactory = artifacts.require('Contents');

require('chai').should();
var content;
contract ('Contents', accounts  =>{
var id = new BN('0');
var por = new BN('20');
var porr = new BN('50');
const [owner, holder1, holder2, ...others] = accounts;
  //aa

  describe("createContent test", () => {
  //  var id = new BN('0');

  //  await content.createContent('TEST1', 0, {from : owner});

    beforeEach(async function(){
      content = await contentsFactory.new({from : owner});
    });

    it("Content's name should be equal _name", async () => {
      await content.createContent('TEST1', 0, {from : owner});
      (await content.getContentName(id)).should.be.equal('TEST1');

    });

    it("Content's ID should be equal _contentId", async () => {
    //  await content.createContent('TEST1', 0, {from : owner});
      (await content.getContentID(id)).should.be.bignumber.equal('0');
    });

  });


  describe("updateHolders test", () => {
    beforeEach(async function(){
      this.content = await contentsFactory.new({from: owner});
    });
    it("contentID = _contentId", async () => {
    //  await content.createContent('TEST1', 0, {from : owner});
      await content.updateHolders(id, holder1, por, {from : owner});
      await content.updateHolders(id, holder2, porr, {from : owner});

      (await content.getHolderId(id, new BN('0'))).should.be.bignumber.equal('0');
      (await content.getHolderId(id, new BN('1'))).should.be.bignumber.equal('0');

    });

    it("Holder Address = _Holder", async () => {
    //  await content.createContent('TEST1', 0, {from : owner});
      //await content.updateHolders(id, holder, por, {from : owner});
      (await content.getHolderAddress(id, new BN('0'))).should.be.equal(holder1);
      (await content.getHolderAddress(id, new BN('1'))).should.be.equal(holder2);

    });

    it("Holder Portion = _portion", async () => {
    //  await content.createContent('TEST1', 0, {from : owner});
      //await content.updateHolders(id, holder, por, {from : owner});
      (await content.getHolderPortion(id, new BN('0'))).should.be.bignumber.equal('20');
      (await content.getHolderPortion(id, new BN('1'))).should.be.bignumber.equal('50');

    });
      it("Holder Info", async () => {
      //  await content.createContent('TEST1', 0, {from : owner});
        //await content.updateHolders(id, holder, por, {from : owner});

        console.log(await content.getHolderInfo(id, new BN('0')));
        ((await content.getHolderInfo(id, new BN('0'))).portion).should.be.equal('20');
        ((await content.getHolderInfo(id, new BN('1'))).portion).should.be.equal('50');
    });
  });


  describe("deleteHolders test", () => {
    beforeEach(async function(){
      this.content = await contentsFactory.new({from: owner});
    });

    it("_shareInfo's length is 2", async () => {
    //  await content.createContent('TEST1', 0, {from : owner});
      //await content.updateHolders(id, holder, por, {from : owner});
      (await content.getHolderLength(id)).should.be.bignumber.equal('2');

    });

    it("contentID = _contentId", async () => {
    //  await content.createContent('TEST1', 0, {from : owner});
      await content.deleteHolders(id, {from : owner});
      (await content.getHolderId(id, new BN('0'))).should.be.bignumber.equal('0');

    });

    it("Holder Address = _Holder", async () => {
    //  await content.createContent('TEST1', 0, {from : owner});
      //await content.updateHolders(id, holder, por, {from : owner});
      (await content.getHolderAddress(id, new BN('0'))).should.be.equal(holder1);

    });

    it("Holder Portion = _portion", async () => {
    //  await content.createContent('TEST1', 0, {from : owner});
      //await content.updateHolders(id, holder, por, {from : owner});
      (await content.getHolderPortion(id, new BN('0'))).should.be.bignumber.equal('20');

    });

    it("_shareInfo's length decreased", async () => {
    //  await content.createContent('TEST1', 0, {from : owner});
      //await content.updateHolders(id, holder, por, {from : owner});
      (await content.getHolderLength(id)).should.be.bignumber.equal('1');

    });
  });


});
