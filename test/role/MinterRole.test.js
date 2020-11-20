const { expectRevert, expectEvent } = require('@openzeppelin/test-helpers');

const MinterRoleFactory = artifacts.require('MinterRoleMock');
var MinterRole;

contract('MinterRole', accounts => {
  const [
    owner,
    noMinter,
    ...others
  ] = accounts;

  beforeEach(async() => {
    MinterRole = await MinterRoleFactory.new({from: owner});
  });

  describe('#addMinter()', () => {
    it('should fail if msg.sender is not owner', async() => {
      await expectRevert(MinterRole.addMinter(noMinter, {from: others[0]}), "Ownable : Function called by unauthorized user.");
    });

    describe('valid case', () => {
      let receipt;

      beforeEach(async() => {
        receipt = await MinterRole.addMinter(noMinter, {from: owner});
      });

      it('target address should be minter', async() => {
        await expectRevert(MinterRole.onlyMinterMock(), "MinterRole : msg.sender is not _minter");
        (await MinterRole.isMinter(noMinter)).should.be.equal(true);
      });

      it('should emit MinterAdded event', () => {
        expectEvent(receipt, 'MinterAdded', {0: noMinter});
      });
    });
  });

  describe('#deleteMinter()', () => {
    it('should fail if msg.sender is not owner', async() => {
      await expectRevert(MinterRole.deleteMinter(noMinter, {from: others[0]}), "Ownable : Function called by unauthorized user.");
    });

    describe('valid case', () => {
      let receipt;

      beforeEach(async() => {
        await MinterRole.addMinter(noMinter, {from: owner});
        receipt = await MinterRole.deleteMinter(noMinter, {from: owner});

      });

      it('target address deleteMinter', async() => {
        await MinterRole.addMinter(owner, {from: owner});
        await MinterRole.onlyMinterMock();
      });

      it('should emit MinterDeleted event', () => {
        expectEvent(receipt, 'MinterDeleted', {0: noMinter});
      });
    });
  });
});
