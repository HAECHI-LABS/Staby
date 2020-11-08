pragma solidity ^0.5.17;


import "./Contents.sol";
import "./RewardToken.sol";
import "./interface/IRewardMinter.sol";

contract RewardMinter is  Contents, RewardToken, IRewardMinter{

    using SafeMath for uint256;

    uint256 private ten = 10;

    uint256 private test = 10000;



    function pay (uint256 contentId, uint256 amount) external {
        require(!_contentList[contentId].active, 'content is disabled');
        _mint(msg.sender, amount);
        for (uint256 i = 0 ; i < _shareInfo[contentId].holderAddress.length; i++) {
            transferFrom(msg.sender, _shareInfo[contentId].holderAddress[i], _shareInfo[contentId].holderPortion[i]*amount/ten);
        }
    }



    function withdraw (address _withdrawer) external {
        require(balanceOf(_withdrawer) != 0, 'withdrawer balance is 0');
        _burn(_withdrawer, balanceOf(_withdrawer));
        //인출하는 함수
    }

}
