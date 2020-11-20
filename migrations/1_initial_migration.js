
const Contents = artifacts.require("Contents");
const RewardToken = artifacts.require("RewardToken");
const RewardGateway = artifacts.require("RewardGateway");

module.exports = async function(deployer) {
  await deployer.deploy(Contents);
  await deployer.deploy(RewardToken);
  await deployer.deploy(RewardGateway, Contents.address, RewardToken.address);
  
};
