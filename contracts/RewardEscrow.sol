pragma solidity ^0.5.17;

import "./interface/IContents.sol";
import "./interface/IERC20.sol";
import "./interface/IRewardMinter.sol";
import "./library/SafeMath.sol";

contract RewardEscrow is IRewardEscrow {

    using SafeMath for uint256;

    IContents internal _contents;
    IERC20 internal _rewardToken;

    mapping(address=>uint256) internal _rewards;

    // payment 히스토리 확인용
    // contentId => history(array)
    mapping(uint256=>uint256[]) internal _paymentsHistory;

    // withdraw 히스토리 확인용
    // withdrawer => history(array)
    mapping(address=>uint256[]) internal _withdrawalHistory;

    constructor(address _contentsAddress, address _rewardAddress) public {
        _contents = IContents(_contentsAddress);
        _rewardToken = IERC20(_rewardAddress);
    }

    // 두번 호출 되면 이상할텐데 ?
    // 두번 호출됐는지 확인 할 수 있는 무언가가 필요하겠다!
    function pay(uint256 _contentId, uint256 _amount) external {
        _rewardToken.transferFrom(msg.sender, address(this), _amount);
        uint256 length = _contents.getHolderNum(_contentId);
        uint256 den = _contents.getDenominator();
        for(uint256 i = 0; i < length; i++){
            (/*holderName*/,address holder, uint256 portion) = _contents.getHolderInfo(_contentId, i);
            _rewards[holder] = _rewards[holder].add(_amount.mul(portion).div(den));
        }
        _paymentsHistory[_contentId].push(_amount);
        emit Payment(_contentId, _amount);
    }

    // owner가 다 해도 돼?
    // 그게 진짜 디자인인가?
    // withdraw 호출한거 트래킹 실패했을 경우 어떻게 처리하나?
    function withdraw (address _withdrawer) external {
        uint256 amount = _rewards[_withdrawer];
        //_rewardToken.transfer(_withdrawer, _amount);
        _rewardToken.burn(amount);
        _rewards[_withdrawer] = 0;
        _withdrawalHistory[_withdrawer].push(amount);
        emit Withdraw(_withdrawer);
    }

    function getRewards(address _holder) external view returns(uint256 balance){
        return(_rewards[_holder]);
    }

    function paymentsHistory(uint256 _contentId) external view returns(uint256[] memory){
        return _paymentsHistory[_contentId];
    }

    function paymentsHistoryLength(uint256 _contentId) external view returns(uint256){
        return _paymentsHistory[_contentId].length;
    }

    function paymentsHistory(uint256 _contentId, uint256 _idx) external view returns(uint256){
        return _paymentsHistory[_contentId][_idx];
    }

    function withdrawalHistory(address _withdrawer) external view returns(uint256[] memory){
        return _withdrawalHistory[_withdrawer];
    }

    function withdrawalHistoryLength(address _withdrawer) external view returns(uint256){
        return _withdrawalHistory[_withdrawer].length;
    }

    function withdrawalHistory(address _withdrawer, uint256 _idx) external view returns(uint256){
        return _withdrawalHistory[_withdrawer][_idx];
    }
}
