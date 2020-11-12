pragma solidity ^0.5.17;

import "./interface/IContents.sol";
import "./library/SafeMath.sol";
import "./library/Ownable.sol";


contract Contents is IContents, Ownable {

    mapping (uint256 => ShareHolders) internal _shareInfo;
    mapping (uint256 => Contents) internal _contentList;

    using SafeMath for uint256;

    uint256 internal _contentCounter = 0;
    uint256 constant private DENOMINATOR = 10;

    event ContentsCreation (string name, uint256 indexed contentId );
    event AddShareInfo (uint256 indexed contentId, bytes32[] nickName, address[] holderAddress, uint256[] holderPortion );
    event DeleteShareInfo ( uint256 indexed contentId );
    event ContentActivation ( uint256 indexed contentId );
    event ContentDeactivated ( uint256 indexed contentId );

    struct Contents {
        string name;
        uint256 contentId;
        bool active;
    }

    struct ShareHolders {
        uint256 contentId;
        bytes32[] holderName;
        address[] holderAddress;
        uint256[] holderPortion;
    }

    constructor() public {}

    function denominator() external view returns(uint256) {
        return DENOMINATOR;
    }

    function contentCounter() external view returns(uint256) {
        return _contentCounter;
    }

    function createContent(string calldata _name) external onlyOwner {
        _createContent(_name);
    }

    function addHolders(uint256 _contentId, bytes32[] calldata _holderName, address[] calldata _holderAddress, uint256[] calldata _holderPortion) external onlyOwner {
        _addHolders(_contentId, _holderName, _holderAddress, _holderPortion);
    }

    function deleteHolders(uint256 _contentId) external onlyOwner {
        _deleteHolders(_contentId);
    }

    function updateHolders(uint256 _contentId, bytes32[] calldata _holderName, address[] calldata _holderAddress, uint256[] calldata _holderPortion) external onlyOwner {
        require(_shareInfo[_contentId].holderAddress.length != 0, 'add holders first');
        _deleteHolders(_contentId);
        _addHolders(_contentId, _holderName, _holderAddress, _holderPortion);
    }

    function getHolderInfo(uint256 _contentId, uint256 _num) external view returns(bytes32 holderName, address holderAddress, uint256 holderPortion) {
        require(_shareInfo[_contentId].holderAddress.length != 0, 'no holder');
        require(_shareInfo[_contentId].holderPortion.length != 0, 'no portion');
        require(_shareInfo[_contentId].holderName.length != 0, 'no name');
        return(
            _shareInfo[_contentId].holderName[_num],
            _shareInfo[_contentId].holderAddress[_num],
            _shareInfo[_contentId].holderPortion[_num]
        );
    }

    function getHolderNum(uint256 _contentId) external view returns( uint256 holderNum ) {
        require(_shareInfo[_contentId].holderAddress.length == _shareInfo[_contentId].holderName.length, '#Address != #Name');
        require(_shareInfo[_contentId].holderAddress.length == _shareInfo[_contentId].holderPortion.length, '#Address != #Portion');
        if (_shareInfo[_contentId].holderAddress.length == 0) return 0;
        else return(_shareInfo[_contentId].holderAddress.length);
    }

    function getContentInfo(uint256 _contentId) external view returns(string memory name, uint256 contentId, bool active) {
        require(_contentId < _contentCounter, 'content is not exist');
        return(
            _contentList[_contentId].name,
            _contentList[_contentId].contentId,
            _contentList[_contentId].active
        );
    }

    // onlyOwner
    function activateContent(uint256 _contentId) external onlyOwner {
        require(_contentList[_contentId].active, 'content is already activated');
        _contentList[_contentId].active = false;
        emit ContentActivation(_contentId);
    }


    function deactivateContent(uint256 _contentId) external onlyOwner {
        require(!_contentList[_contentId].active, 'content is already deactivated');
        _contentList[_contentId].active = true;
        emit ContentDeactivated(_contentId);
    }

    function _createContent(string memory _name) internal onlyOwner {
        Contents memory Content = Contents({
            name : _name,
            contentId : _contentCounter,
            active : false
        });
        _contentList[_contentCounter] = Content;
        emit ContentsCreation(_name, _contentCounter);
        _contentCounter = _contentCounter.add(1);
    }

    function _addHolders(uint256 _contentId, bytes32[] memory _holderName, address[] memory _holderAddress, uint256[] memory _holderPortion) internal {
        require(_holderAddress.length == _holderPortion.length, 'holder and portion are not match');
        uint256 counter = 0;
        for(uint i = 0 ; i < _holderPortion.length ; i++) counter = _holderPortion[i].add(counter);
        require(counter == DENOMINATOR , 'portion sum is not equal to denominator');
        for(uint i = 0 ; i < _holderAddress.length; i++){
            bytes32 holderName = _holderName[i];
            address holderAddress = _holderAddress[i];
            uint256 holderPortion = _holderPortion[i];
            _shareInfo[_contentId].holderName.push(holderName);
            _shareInfo[_contentId].holderAddress.push(holderAddress);
            _shareInfo[_contentId].holderPortion.push(holderPortion);
        }
        emit AddShareInfo(_contentId, _holderName, _holderAddress, _holderPortion);
    }

    function _deleteHolders(uint256 _contentId) internal {
        require(_shareInfo[_contentId].holderAddress.length == _shareInfo[_contentId].holderPortion.length, 'holder and portion are not match');
        _shareInfo[_contentId].holderName.length = 0;
        _shareInfo[_contentId].holderAddress.length = 0;
        _shareInfo[_contentId].holderPortion.length = 0;
        emit DeleteShareInfo(_contentId);
    }
}
