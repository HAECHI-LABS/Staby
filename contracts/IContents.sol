pragma solidity ^0.5.6;

contract IContents{

    /**
     * @notice Content creation
     * @dev
     * @param _name : Content 이름
     * @param _contentId : Content의 Id
     */
    function createContent(string memory _name, uint256 _contentId) public;


    /**
     * @notice Content의 지분관계를 업데이트.
     * @dev
     * @param _contentId : Content의 Id
     * @param _Holder : 지분 소유자의 address
     * @param _portion : 소유자가 가지고있는 지분 persentage
     */
    function updateHolders(uint256 _contentId, address _Holder, uint _portion) public;


     /**
     * @notice contentId 에 해당하는 지분관계 삭제
     * @dev
     * @param _contentId : Content의 Id
     */
    function deleteHolders(uint256 _contentId) public;


    /**
     * @notice contentId 에 해당하는 지분관계를 보여줌
     * @dev
     * @param contentId : Content의 Id
     * @return contentId : Content의 Id
     * @return holderAddress : 지분 소유자의 address
     * @return holderPortion : 소유자가 가지고있는 지분 persentage
     */
    function getHolderInfo(uint256 contentId, uint256 _num) public view returns(uint256, address, uint256);


    /**
     * @notice contentId 에 해당하는 Content 정보를 보여줌
     * @dev
     * @param contentId : Content의 Id
     * @return name : Content의 이름
     * @return contentId : Content의 Id
     */
    function getConentInfo(uint256 contentId) public view returns(string memory, uint256);

}
