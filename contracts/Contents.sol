pragma solidity ^0.5.6;

import "./IContents.sol";

contract Contents is IContents{

    mapping (uint256 => shareHolders) private _shareInfo;

    mapping (uint256 => Contents) private _contentList;

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


    function createContent(string memory _name, uint256 _contentId) public {
        Contents memory Content = Contents({
            name : _name,
            contentId : _contentId
        });
        _contentList[_contentId] = Content;
    }


    function updateHolders(uint256 _contentId, address _Holder, uint _portion) public {
        _shareInfo[_contentId].contentId = _contentId;
        _shareInfo[_contentId].holderAddress.push(_Holder);
        _shareInfo[_contentId].holderPortion.push(_portion);
    }


    function deleteHolders(uint256 _contentId) public {
        _shareInfo[_contentId].contentId = _contentId;
        _shareInfo[_contentId].holderAddress.pop();
        _shareInfo[_contentId].holderPortion.pop();
    }


    function getHolderInfo(uint256 contentId, uint256 _num) public view returns(uint256, address, uint256){
        return(
        _shareInfo[contentId].contentId,
        _shareInfo[contentId].holderAddress[_num],
        _shareInfo[contentId].holderPortion[_num]
        );
    }


    function getConentInfo(uint256 contentId) public view returns(string memory, uint256){
        return(
          _contentList[contentId].name,
          _contentList[contentId].contentId
          );
    }


}
