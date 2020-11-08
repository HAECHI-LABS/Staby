pragma solidity ^0.5.17;

import "./interface/IContents.sol";

contract Contents is IContents {

    mapping (uint256 => shareHolders) internal _shareInfo;

    mapping (uint256 => Contents) internal _contentList;

    event ContentsCreation (string name, uint indexed contentId );



    uint256 counterContent = 0;

    // Contents 구조체
    struct Contents {
        string name; // Content 이름
        uint256 contentId; // Content ID
        bool active;    // 활성상태
    }

    // 지분정보 구조체
    struct shareHolders {
        uint256 contentId;  // Content ID
        address[] holderAddress;  // 지분 소유자 address
        uint256[] holderPortion;  // 소유한 지분
    }

    function createContent(string calldata _name) external {
        Contents memory Content = Contents({
            name : _name,
            contentId : counterContent,
            active : false
        });
        _contentList[counterContent] = Content;
        emit ContentsCreation(_name, counterContent);
        counterContent += 1;
    }

    function addHolders(uint256 _contentId, address[] calldata _Holder, uint256[] calldata _portion) external {
        require(_Holder.length == _portion.length, 'holder and portion are not match');
        uint256 counter = 0;
        for(uint i = 0 ; i < _portion.length ; i++) counter += _portion[i];
        require(counter == 10 , 'portion sum is not 10');
        for(uint i = 0 ; i < _Holder.length; i++){
            address holder = _Holder[i];
            uint256 portion = _portion[i];
            _shareInfo[_contentId].holderAddress.push(holder);
            _shareInfo[_contentId].holderPortion.push(portion);
        }
    }


    function deleteHolders(uint256 _contentId) external {
        require(_shareInfo[_contentId].holderAddress.length == _shareInfo[_contentId].holderPortion.length, 'holder and portion are not match');
        _shareInfo[_contentId].holderAddress.length = 0;
        _shareInfo[_contentId].holderPortion.length = 0;
/*
        for(uint i = 0 ; i < _shareInfo[_contentId].holderAddress.length+1; i++){
            delete _shareInfo[_contentId].holderAddress[i];
            delete _shareInfo[_contentId].holderPortion[i];
        }
        */
    }

    function getHolderInfo(uint256 _contentId, uint256 _num) external view returns( address holder, uint256 portion){
        require(_shareInfo[_contentId].holderAddress.length != 0, 'no holder');
        require(_shareInfo[_contentId].holderAddress.length != 0, 'no portion');
        return(
            _shareInfo[_contentId].holderAddress[_num],
            _shareInfo[_contentId].holderPortion[_num]
        );
    }


    function getHolderNum(uint256 _contentId) external view returns( uint256 holderNum ){
        require(_shareInfo[_contentId].holderAddress.length != 0, 'no holder');
        require(_shareInfo[_contentId].holderAddress.length != 0, 'no portion');
        return(
            _shareInfo[_contentId].holderAddress.length
        );
    }


    function getContentInfo(uint256 _contentId) external view returns(string memory name, uint256 contentId, bool active){
        require(_contentId < counterContent, 'content is not exist');
        return(
            _contentList[_contentId].name,
            _contentList[_contentId].contentId,
            _contentList[_contentId].active
        );
    }

    function activateContent(uint256 _contentId) external {
        require(_contentList[_contentId].active);
        _contentList[_contentId].active = false;
    }

    function disableContent(uint256 _contentId) external {
        require(!_contentList[_contentId].active);
        _contentList[_contentId].active = true;
    }
}
