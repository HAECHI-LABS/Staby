pragma solidity ^0.5.17;

interface IContents {


    /**
     * @notice Denominator 반환.
     * @return DENOMINATOR : 10
    */
    function denominator() external view returns(uint256);

    /**
     * @notice Content의 개수를 확인하는 함수.
     * @return _contentCounter : Content 수
     */
    function contentCounter() external view returns(uint256);

    /**
     * @notice Content 생성 함수.
     * @dev
     * @param _name : Content 이름
     */
     function createContent(string calldata _name) external;

    /**
     * @notice Content의 지분관계를 생성.
     * @dev
     * @param _contentId : Content의 Id
     * @param _holderName : 지분 소유자의 닉네임
     * @param _holderAddress : 지분 소유자의 address
     * @param _holderPortion : 소유자가 가지고있는 지분
     */
    function addHolders(uint256 _contentId, bytes32[] calldata _holderName, address[] calldata _holderAddress, uint256[] calldata _holderPortion) external;


     /**
     * @notice contentId 에 해당하는 지분관계 삭제
     * @dev
     * @param _contentId : Content의 Id
     */
    function deleteHolders(uint256 _contentId) external;

    /**
     * @notice Content의 지분관계 update.
     * @dev
     * @param _contentId : Content의 Id
     * @param _holderName : 지분 소유자의 닉네임
     * @param _holderAddress : 지분 소유자의 address
     * @param _holderPortion : 소유자가 가지고 있는 지분
     */
     function updateHolders(uint256 _contentId, bytes32[] calldata _holderName, address[] calldata _holderAddress, uint256[] calldata _holderPortion) external;

    /**
     * @notice contentId 에 해당하는 지분관계를 보여줌
     * @dev
     * @param contentId : Content의 Id
     * @param _num : Holder의 Index
     * @return holderName : 지분 소유자의 닉네임
     * @return holderAddress : 지분 소유자의 address
     * @return holderPortion : 소유자가 가지고있는 지분 비율
     */
     function getHolderInfo(uint256 _contentId, uint256 _num) external view returns(bytes32, address, uint256);

    /**
     * @notice contentId 에 해당하는 지분 소유자의 수를 보여줌
     * @dev
     * @param contentId : Content의 Id
     * @return holderNum : 지분 소유자의 수
     */
     function getHolderNum(uint256 _contentId) external view returns( uint256 holderNum );

    /**
     * @notice contentId 에 해당하는 Content 정보를 보여줌
     * @dev
     * @param contentId : Content의 Id
     * @return name : Content의 이름
     * @return contentId : Content의 Id
     * @return contentId : Content의 활성 지표
     */
     function getContentInfo(uint256 _contentId) external view returns(string memory name, uint256 contentId, bool active);

    /**
     * @notice contentId 에 해당하는 Content를 활성화
     * @dev
     * @param contentId : Content의 Id
     */
     function activateContent(uint256 _contentId) external;

    /**
     * @notice contentId 에 해당하는 Content를 비활성화
     * @dev
     * @param contentId : Content의 Id
     */
     function deactivateContent(uint256 _contentId) external;


     event ContentsCreation (string name, uint256 indexed contentId );
     event addShareInfo (uint256 indexed contentId, bytes32[] nickName, address[] holderAddress, uint256[] holderPortion );
     event deleteShareInfo ( uint256 indexed contentId );
     event ContentActivation ( uint256 indexed contentId );
     event ContentDisabled ( uint256 indexed contentId );

}
