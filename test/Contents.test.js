const { constants, expectEvent, expectRevert, BN, ether, time } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');
const web3 = require('web3');

const ContentsFactory = artifacts.require('Contents');

require('chai').should();
let contents;
contract ('Contents', accounts  =>{
    const firstId = new BN('0');
    const secondId = new BN('1');
    const por1 = new BN('2');
    const por2 = new BN('3');
    const por3 = new BN('5');
    const contentFee1 = new BN('10000');
    const contentFee2 = new BN('30000');
    const supervisor = web3.utils.toHex("Supervisor");
    const actor = web3.utils.toHex("Actor");
    const author = web3.utils.toHex("Author");
    const [owner, holder1, holder2, holder3, ...others] = accounts;

    beforeEach(async () => {
        contents = await ContentsFactory.new({from : owner});
        await contents.createContent("CONTENT1", {from : owner});
        await contents.createContent("CONTENT2", {from : owner});
    });

    describe("createContent test", () => {
        it("Content's name should be eaual _name", async () => {
          ((await contents.getContentInfo(firstId)).name).should.be.equal("CONTENT1");
          ((await contents.getContentInfo(secondId)).name).should.be.equal("CONTENT2");
        });

        it("Content's ID should be equal _contentId", async () => {
          ((await contents.getContentInfo(firstId)).contentId).should.be.bignumber.equal('0');
          ((await contents.getContentInfo(secondId)).contentId).should.be.bignumber.equal('1');
        });

        it("Content's active should be equal false", async () => {
          ((await contents.getContentInfo(firstId)).active).should.be.equal(false);
          ((await contents.getContentInfo(secondId)).active).should.be.equal(false);
        });
    });

    describe("Add holders test", () => {

        beforeEach(async () => {
        });

        it("should fail if #holderAddress != #holderPortion", async () => {
          await expectRevert.unspecified(contents.addHolders(firstId, [supervisor, actor, author], [holder1,holder2,holder3], [por1,por2], {from : owner}));
        });

         it("should fail if #holderAddress != #holderName", async () => {
          await expectRevert.unspecified(contents.addHolders(firstId, [supervisor, actor, author], [holder2,holder3], [por1,por2], {from : owner}));
        });

        it("should fail if portion sum is not 10", async () => {
          await expectRevert.unspecified(contents.addHolders(firstId, [supervisor, actor, author], [holder1,holder2,holder3], [por1,por1, por3], {from : owner}));
        });

        describe("Vaild Case", () => {

            beforeEach(async () => {
              await contents.addHolders(firstId, [supervisor, actor, author], [holder1,holder2,holder3], [por1,por2, por3], {from : owner});
              await contents.addHolders(secondId, [supervisor, actor, author],[holder1,holder2,holder3], [por2, por3, por1], {from : owner});
            });

            it("Holder name = holderName", async () => {
              web3.utils.hexToUtf8(((await contents.getHolderInfo(firstId, new BN('0'))).holderName)).should.be.equal("Supervisor");
              web3.utils.hexToUtf8(((await contents.getHolderInfo(firstId, new BN('1'))).holderName)).should.be.equal("Actor");
              web3.utils.hexToUtf8(((await contents.getHolderInfo(firstId, new BN('2'))).holderName)).should.be.equal("Author");
              web3.utils.hexToUtf8(((await contents.getHolderInfo(secondId, new BN('0'))).holderName)).should.be.equal("Supervisor");
              web3.utils.hexToUtf8(((await contents.getHolderInfo(secondId, new BN('1'))).holderName)).should.be.equal("Actor");
              web3.utils.hexToUtf8(((await contents.getHolderInfo(secondId, new BN('2'))).holderName)).should.be.equal("Author");
            });

            it("Holder Address = holderAddress", async () => {
              ((await contents.getHolderInfo(firstId, new BN('0'))).holderAddress).should.be.equal(holder1);
              ((await contents.getHolderInfo(firstId, new BN('1'))).holderAddress).should.be.equal(holder2);
              ((await contents.getHolderInfo(firstId, new BN('2'))).holderAddress).should.be.equal(holder3);
              ((await contents.getHolderInfo(secondId, new BN('0'))).holderAddress).should.be.equal(holder1);
              ((await contents.getHolderInfo(secondId, new BN('1'))).holderAddress).should.be.equal(holder2);
              ((await contents.getHolderInfo(secondId, new BN('2'))).holderAddress).should.be.equal(holder3);
            });

            it("Holder Portion = holderPortion", async () => {
              ((await contents.getHolderInfo(firstId, new BN('0'))).holderPortion).should.be.bignumber.equal(new BN('2'));
              ((await contents.getHolderInfo(firstId, new BN('1'))).holderPortion).should.be.bignumber.equal(new BN('3'));
              ((await contents.getHolderInfo(firstId, new BN('2'))).holderPortion).should.be.bignumber.equal(new BN('5'));
              ((await contents.getHolderInfo(secondId, new BN('0'))).holderPortion).should.be.bignumber.equal(new BN('3'));
              ((await contents.getHolderInfo(secondId, new BN('1'))).holderPortion).should.be.bignumber.equal(new BN('5'));
              ((await contents.getHolderInfo(secondId, new BN('2'))).holderPortion).should.be.bignumber.equal(new BN('2'));
            });
          });
      });

     describe("delete holders test", () => {

        beforeEach(async () => {
        });

        it("should fail if #holderAddress != #holderPortion", async () => {
          await expectRevert.unspecified(contents.addHolders(firstId, [supervisor, actor, author], [holder1,holder2,holder3], [por1,por2], {from : owner}));
        });

        describe("Valid Case", () => {
            beforeEach(async () => {
                await contents.addHolders(firstId, [supervisor, actor, author], [holder1, holder2, holder3], [por1, por2, por3], {from : owner});
            });

            it("Holder length should be 0 after deleteHolders()", async() => {
                await contents.deleteHolders(firstId, {from : owner});
                (await contents.getHolderNum(firstId)).should.be.bignumber.equal(new BN('0'));
            });
        });
     });

    describe("updateHolders test", () => {
        beforeEach(async () => {
          await contents.addHolders(firstId,[supervisor, actor, author], [holder1, holder2, holder3], [por1, por2, por3], {from : owner});
        });

        it("should fail if #holder is 0", async () => {
            await expectRevert.unspecified(contents.updateHolders(secondId, [supervisor, actor, author], [holder1,holder2,holder3], [por1, por2, por3], {from : owner}));
        });

        describe("Valid Case", () => {
            beforeEach(async () => {
               await contents.updateHolders(firstId, [actor, author, supervisor], [holder1, holder2, holder3], [por1, por3, por2], {from : owner});
            });

            it("Holder Name should be equal holderName", async () => {
                web3.utils.hexToUtf8(((await contents.getHolderInfo(firstId, new BN('0'))).holderName)).should.be.equal("Actor");
                web3.utils.hexToUtf8(((await contents.getHolderInfo(firstId, new BN('1'))).holderName)).should.be.equal("Author");
                web3.utils.hexToUtf8(((await contents.getHolderInfo(firstId, new BN('2'))).holderName)).should.be.equal("Supervisor");
            });

            it("Holder Address should be equal holderAddress", async () => {
                ((await contents.getHolderInfo(firstId, new BN('0'))).holderAddress.should.be.equal(holder1));
                ((await contents.getHolderInfo(firstId, new BN('1'))).holderAddress.should.be.equal(holder2));
                ((await contents.getHolderInfo(firstId, new BN('2'))).holderAddress.should.be.equal(holder3));
            });

           it("Holder Address should be equal holderAddress", async () => {
                ((await contents.getHolderInfo(firstId, new BN('0'))).holderPortion.should.be.bignumber.equal(por1));
                ((await contents.getHolderInfo(firstId, new BN('1'))).holderPortion.should.be.bignumber.equal(por3));
                ((await contents.getHolderInfo(firstId, new BN('2'))).holderPortion.should.be.bignumber.equal(por2));
            });
        });
      });

    describe("activate/deactivateContent test", () => {
          beforeEach(async () => {
              await contents.deactivateContent(firstId, {from : owner});
          });

          it("Content Active should be true after deactivation", async () => {
              ((await contents.getContentInfo(firstId)).active).should.be.equal(true);
          });

          it("Content Active should be false after activation",  async () => {
              await contents.activateContent(firstId, {from : owner});
              ((await contents.getContentInfo(firstId)).active.should.be.equal(false));
          });
      });

    describe("contentCounter test", () =>{
        it("should return appropriate contentCounetr", async () => {
            (await contents.contentCounter()).should.be.bignumber.equal(new BN('2'));
        });
    });
    describe("denominator test", () => {
        beforeEach(async () => {
        });

        it("should return appropriate denominator",  async () => {
           (await contents.denominator()).should.be.bignumber.equal(new BN('10'));
        });
    });

    describe("getHolderNum test", () => {
        beforeEach(async () => {
            await contents.addHolders(firstId, [supervisor, actor, author], [holder1, holder2, holder3], [por1, por2, por3], {from : owner});
        });

        it("should return holder length",  async () => {
            ((await contents.getHolderNum(firstId)).should.be.bignumber.equal(new BN('3')));
        });

    });


});
