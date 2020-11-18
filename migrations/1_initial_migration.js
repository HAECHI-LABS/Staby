
const Migrations = artifacts.require("Migrations");
/*
const Contents = artifacts.require("Contents");
const RewardToken = artifacts.require("RewardToken");
const RewardEscrow = artifacts.require("RewardEscrow");
*/
module.exports = async function(deployer) {
  deployer.deploy(Migrations);
/*
  await deployer.deploy(Contents);
  await deployer.deploy(RewardToken);
  await deployer.deploy(RewardEscrow, Contents.address, RewardToken.address);
  */
};
