pragma solidity ^0.5.17;

interface IRewardEscrow {

    /**
    * @notice 홀더에게 수익 배분
    * @dev
    * @param _contentId 수익을 배분할 컨텐츠의 ID
    * @param _amount ID에 해당하는 컨텐츠에서 발생한 총 수익
    */
    function pay (uint256 _contentId, uint256 _amount) external;

    /**
    * @notice 사용자의 토큰 출금
    * @dev
    * @param _withdrawer 토큰을 출금하는 사용자의 주소
    */
    function withdraw (address _withdrawer) external;

    /**
    * @notice 컨텐츠 ID에 해당하는 컨텐츠의 수익배분 기록 불러옴
    * @dev
    * @param _contentId 기록 불러올 컨텐츠의 ID
    * @return _paymentsHistory[_contentId] : 컨텐츼 ID에 해당하는 컨텐츠의 수익배분 기록
    */
    function paymentsHistory(uint256 _contentId) external view returns(uint256[] memory);

    /**
    * @notice 컨텐츠 ID에 해당하는 컨텐츠의 수익배분 기록의 길이 불러옴
    * @dev
    * @param _contentId 기록 불러올 컨텐츠의 ID
    * @return _paymentsHistory[_contentId].length : 컨텐츼 ID에 해당하는 컨텐츠의 수익배분 기록의 길이
    */
    function paymentsHistoryLength(uint256 _contentId) external view returns(uint256);

    /**
    * @notice 컨텐츠 ID와 index에 해당하는 컨텐츠의 수익배분 기록 불러옴
    * @dev
    * @param _contentId 기록 불러올 컨텐츠의 ID
    * @param _idx 기록 index
    * @return _paymentsHistory[_contentId][_idx] : 컨텐츼 ID와 index에 해당하는 컨텐츠의 수익배분 기록
    */
    function paymentsHistory(uint256 _contentId, uint256 _idx) external view returns(uint256);

    /**
    * @notice 사용자의 주소에 해당하는 토큰 출금 기록 불러옴
    * @dev
    * @param _withdrawer 기록 불러올 사용자의 주소
    * @return _withdrawalHistory[_withdrawer] : 사용자의 주소에 해당하는 토큰 출금 기록
    */
    function withdrawalHistory(address _withdrawer) external view returns(uint256[] memory);

    /**
    * @notice 사용자의 주소에 해당하는 토큰 출금 기록의 길이 불러옴
    * @dev
    * @param _withdrawer 기록의 길이를 불러올 사용자의 주소
    * @return _withdrawalHistory[_withdrawer].length : 사용자의 주소에 해당하는 토큰 출금 기록의 길이
    */
    function withdrawalHistoryLength(address _withdrawer) external view returns(uint256);

    /**
    * @notice 사용자의 주소와 index에 해당하는 토큰 출금 기록 불러옴
    * @dev
    * @param _withdrawer 기록 불러올 사용자의 주소
    * @param _idx 기록 index
    * @return _withdrawalHistory[_withdrawer][_idx] : 사용자의 주소와 index에 해당하는 토큰 출금 기록
    */
    function withdrawalHistory(address _withdrawer, uint256 _idx) external view returns(uint256);

    /**
    * @notice 홀더가 받을 수익 불러옴
    * @dev
    * @param _holder 수익을 배분받을 홀더의 주소
    * @return _rewrads[_holder] : 홀더가 받을 수익
    */
    function getRewards(address _holder) external view returns(uint256);

    /**
    * @notice 수익 배분 이벤트
    */
    event Payment (uint256 indexed contentId, uint256 amount);

    /**
    * @notice 토큰 출금 이벤트
    */
    event Withdraw (address withdrawer);

}
