pragma solidity ^0.5.0;

import "./IContents.sol";

contract Contents is IContents{

    mapping (uint256 => shareHolders) internal _shareInfo;

    mapping (uint256 => Contents) internal _contentList;

    event ContentsCreation (string name, uint indexed contentId );

    uint256 len = 0;

    // Contents 구조체
    struct Contents {
        string name; // Content 이름
        uint256 contentId; // Content ID
    }

    // 지분정보 구조체
    struct shareHolders {
        uint256 contentId;  // Content ID
        address[] holderAddress;  // 지분 소유자 address
        uint256[] holderPortion;  // 소유한 지분 %
    }

    function createContent(string calldata _name, uint256 _contentId) external {
        Contents memory Content = Contents({
            name : _name,
            contentId : _contentId
        });
        _contentList[_contentId] = Content;
        emit ContentsCreation(_name, _contentId);
    }


    function updateHolders(uint256 _contentId, address _Holder, uint _portion) external {
        _shareInfo[_contentId].contentId = _contentId;
        _shareInfo[_contentId].holderAddress.push(_Holder);
        _shareInfo[_contentId].holderPortion.push(_portion);
        len ++;
    }


    function deleteHolders(uint256 _contentId) external {
        _shareInfo[_contentId].contentId = _contentId;
        _shareInfo[_contentId].holderAddress.pop();
        _shareInfo[_contentId].holderPortion.pop();
        len --;
    }

/*
    function getHolderInfo(uint256 contentId, uint256 _num) external view returns(uint256, address, uint256){
        return(
        _shareInfo[contentId].contentId,
        _shareInfo[contentId].holderAddress[_num],
        _shareInfo[contentId].holderPortion[_num]
        );
    }
*/
    function getHolderId(uint256 contentId, uint256 _num) external view returns(uint256){
        return(
        _shareInfo[contentId].contentId
        );
    }

    function getHolderAddress(uint256 contentId, uint256 _num) external view returns( address){
        return(
        _shareInfo[contentId].holderAddress[_num]
        );
    }

    function getHolderPortion(uint256 contentId, uint256 _num) external view returns( uint256){
        return(
        _shareInfo[contentId].holderPortion[_num]
        );
    }

    function getHolderLength(uint256 contentId) external view returns(uint256){
        return(
        len
        );
    }

/*
    function getContentInfo(uint256 contentId) external view returns(string memory, uint256){
        return(
          _contentList[contentId].name,
          _contentList[contentId].contentId
          );
    }
*/
    function getContentName(uint256 contentId) external view returns(string memory){
        return(
          _contentList[contentId].name
          );
    }

    function getContentID(uint256 contentId) external view returns(uint256){
        return(
          _contentList[contentId].contentId
          );
    }
}
