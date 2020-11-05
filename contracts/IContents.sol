pragma solidity ^0.5.0;

interface IContents {

    /**
     * @notice Content creation
     * @dev
     * @param _name : Content 이름
     * @param _contentId : Content의 Id
     */
    function createContent(string calldata _name, uint256 _contentId) external;


    /**
     * @notice Content의 지분관계를 업데이트.
     * @dev
     * @param _contentId : Content의 Id
     * @param _Holder : 지분 소유자의 address
     * @param _portion : 소유자가 가지고있는 지분 persentage
     */
    function updateHolders(uint256 _contentId, address _Holder, uint _portion) external;


     /**
     * @notice contentId 에 해당하는 지분관계 삭제
     * @dev
     * @param _contentId : Content의 Id
     */
    function deleteHolders(uint256 _contentId) external;


    /**
     * @notice contentId 에 해당하는 지분관계를 보여줌
     * @dev
     * @param contentId : Content의 Id
     * @return contentId : Content의 Id
     * @return holderAddress : 지분 소유자의 address
     * @return holderPortion : 소유자가 가지고있는 지분 persentage
     */
//    function getHolderInfo(uint256 contentId, uint256 _num) external view returns(uint256, address, uint256);


    /**
     * @notice contentId 에 해당하는 Content 정보를 보여줌
     * @dev
     * @param contentId : Content의 Id
     * @return name : Content의 이름
     * @return contentId : Content의 Id
     */
  //  function getContentInfo(uint256 contentId) external view returns(string memory, uint256);


  /**
   * @notice contentId 에 해당하는 content의 이름
   * @dev
   * @param contentId : Content의 Id
   * @return _contentList[contentId].name : content의 이름
   */
    function getContentName(uint256 contentId) external view returns(string memory);

    /**
     * @notice contentId 에 해당하는 content의 ID
     * @dev
     * @param contentId : Content의 Id
     * @return _contentList[contentId].contentId : content의 ID
     */
    function getContentID(uint256 contentId) external view returns(uint256);

    /**
     * @notice contentId 와 holder index 에 해당하는 holder의 ID
     * @dev
     * @param contentId : Content의 Id
     * @param _num : Holder의 index
     * @return _shareInfo[contentId].contentId : Holder의 Id
     */
    function getHolderId(uint256 contentId, uint256 _num) external view returns(uint256);

    /**
     * @notice contentId 와 holder index 에 해당하는 holder의 address
     * @dev
     * @param contentId : Content의 Id
     * @param _num : Holder의 index
     * @return _shareInfo[contentId].holderAddress[_num] : Holder의 address
     */
    function getHolderAddress(uint256 contentId, uint256 _num) external view returns( address);

    /**
     * @notice contentId 와 holder index 에 해당하는 holder의 portion
     * @dev
     * @param contentId : Content의 Id
     * @param _num : Holder의 index
     * @return _shareInfo[contentId].holderPortion[_num] : Holder의 portion
     */
    function getHolderPortion(uint256 contentId, uint256 _num) external view returns( uint256);

    /**
     * @notice contentId에 해당하는 holder의 수
     * @dev
     * @param contentId : Content의 Id
     * @return len : Holder의 수
     */
    function getHolderLength(uint256 contentId) external view returns(uint256);

}
