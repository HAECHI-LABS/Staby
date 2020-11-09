pragma solidity ^0.5.17;
pragma experimental ABIEncoderV2;


import "./Contents.sol";
import "./RewardToken.sol";
import "./interface/IRewardMinter.sol";
import "./library/SafeMath.sol";



contract RewardMinter is  Contents, RewardToken, IRewardMinter{

    using SafeMath for uint256;

    uint256 private ten = 10;

    uint256 private test = 10000;

    event Payment ( uint256 indexed contentId , uint256 indexed amount);

    event Withdraw ( address withdrawer );

    function pay (uint256 _contentId, uint256 amount) external {
        require(!_contentList[_contentId].active, 'content is disabled');
        _mint(msg.sender, amount);
        for (uint256 i = 0 ; i < _shareInfo[_contentId].holderAddress.length; i++) {
            transferFrom(msg.sender, _shareInfo[_contentId].holderAddress[i], _shareInfo[_contentId].holderPortion[i].mul(amount.div(ten)));
        }
        emit Payment(_contentId, amount);
    }



    function withdraw (address _withdrawer) external {
        require(balanceOf(_withdrawer) != 0, 'withdrawer balance is 0');
        _burn(_withdrawer, balanceOf(_withdrawer));
        //인출하는 함수
        emit Withdraw(_withdrawer);
    }

}
