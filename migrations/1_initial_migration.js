//const Migrations = artifacts.require("Migrations");
const Contents = artifacts.require("Contents");
const RewardToken = artifacts.require("RewardToken");
const RewardEscrow = artifacts.require("RewardEscrow");
module.exports = function(deployer) {
  //deployer.deploy(Migrations);
  /*
  deployer.deploy(Contents).then(function() {
    deployer.deploy(RewardToken).then(function() {
      deployer.deploy(RewardEscrow, Contents.address, RewardToken.address);
    });
  });
  */
  //deployer.deploy(Contents);
  //deployer.deploy(RewardToken);
  //deployer.deploy(RewardEscrow, Contents.address, RewardToken.address);
};
