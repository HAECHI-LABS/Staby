pragma solidity ^0.5.17;

interface IRewardMinter {

    /**
     * @notice Holder들에게 portion에 해당하는 reward를 지급
     * @dev
     * @param contentId : Content ID
     * @param amount : Content에서 창출한 수익
     */
     function pay (uint256 contentId, uint256 amount) external;

    /**
     * @notice Holder가 지급받은 reward를 출금
     * @dev
     * @param _withdrawer : reward를 출금하는 holder의 address
     */
     function withdraw (address _withdrawer) external;

}
