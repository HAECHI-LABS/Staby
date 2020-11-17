//const Migrations = artifacts.require("Migrations");
const Contents = artifacts.require("Contents");
const RewardToken = artifacts.require("RewardToken");
const RewardEscrow = artifacts.require("RewardEscrow");
module.exports = async function(deployer) {
  //deployer.deploy(Migrations);
  /*
  deployer.deploy(Contents).then(function() {
    deployer.deploy(RewardToken).then(function() {
      deployer.deploy(RewardEscrow, Contents.address, RewardToken.address);
    });
  });
  */
  await deployer.deploy(Contents);
  await deployer.deploy(RewardToken);
  await deployer.deploy(RewardEscrow, Contents.address, RewardToken.address);
};
