<<<<<<< HEAD
# [공유] Stream Protocol 스마트 컨트랙트 결과물

Created: Nov 18, 2020 3:00 PM

## 0. Overview

---

### 아키텍처

![GO__](https://user-images.githubusercontent.com/55428342/99773929-7d083500-2b50-11eb-96a2-09a052611fd4.png)

전체 시스템 아키텍쳐

### Github 링크

[HAECHI-LABS/StreamProtocol](https://github.com/HAECHI-LABS/StreamProtocol)

=======
# Readme_Staby

## Overview

---

- Github
    - [https://github.com/HAECHI-LABS/Staby](https://github.com/HAECHI-LABS/Staby)

![GO__](https://user-images.githubusercontent.com/55428342/99773929-7d083500-2b50-11eb-96a2-09a052611fd4.png)

전체 시스템 아키텍쳐

>>>>>>> readme
### 주요 기능

1. 컨텐츠 및 지분 등록 / 지분의 변경
2. 컨텐츠에서 발생한 수익 정산
3. 사용자의 RewardToken 인출

<<<<<<< HEAD
## 1. 스마트 컨트랙트

---

=======
## 스마트 컨트랙트

---

![Untitled](https://user-images.githubusercontent.com/55428342/99774028-a1641180-2b50-11eb-8b43-14134bb905c4.png)

### 구성

>>>>>>> readme
총 3개의 contract로 구성

- Contents.sol : 컨텐츠의 내용 및 지분관계 설정
- RewardToken.sol : 컨텐츠의 수익에 대한 보상으로 쓰이는 토큰
- RewardGateway.sol : 컨텐츠에 대한 수익 분배(정산) 및 인출

<<<<<<< HEAD
![Untitled](https://user-images.githubusercontent.com/55428342/99774028-a1641180-2b50-11eb-8b43-14134bb905c4.png)

스마트 컨트랙트 UML 다이어그램

### 1-1) Contents.sol
=======
### Contents.sol
>>>>>>> readme

- 컨텐츠의 내용과 컨텐츠에 대한 지분 관계를 설정 (컨텐츠 및 지분 등록 / 지분 변경)
- 데이터 구조
    - Contents

        ```jsx
        // 컨텐츠에 대한 정보
        struct Contents {
            string name; // 컨텐츠 제목
            uint256 contentId; // 컨텐츠 ID (고유식별번호)
            bool disabled; // 컨텐츠 활동상태 (0: 활동, 1: 중지)
        }
        ```

        ```jsx
        // 컨텐츠를 컨텐츠ID로 접근할 수 있게 mapping
        mapping (uint256 => Contents) internal _contentList;
        ```

    - ShareHolders

        ```jsx
        // 컨텐츠 지분 정보
        struct ShareHolders {
            uint256 contentId; // 컨텐츠 ID (고유식별번호)
            bytes32[] holderName; // 회원 아이디
            address[] holderAddress; // 회원 지갑주소
            uint256[] holderPortion; // 지분 정보
        }
        ```

        ```jsx
        // 컨텐츠 지분정보를 컨텐츠ID로 접근할 수 있게 mapping
        mapping (uint256 => ShareHolders) internal _shareInfo;
        ```

- 주요 함수
    - `createContent()` : 컨텐츠 생성
    - `addHolders()` : 컨텐츠 홀더 정보 기록
    - `updateHolders()` 컨텐츠 홀더 정보 변경
    - `activateContent()` : 컨텐츠 활성상태로 변경 (활성화)
    - `deactivateContent()` : 컨텐츠 비활성상태로 변경 (비활성화)
    - `getHolderInfo()` : 컨텐츠 홀더 정보를 불러옴
    - `getContentInfo()` : 컨텐츠 정보를 불러옴
<<<<<<< HEAD
- 상세 문서

    [IContents](./docs/IContents.md)

### 1-2) RewardToken.sol
=======

    Contents.sol에서 구현된 함수들의 documentation

    https://github.com/HAECHI-LABS/Staby/blob/revision/docs/IContents.md

### RewardToken.sol
>>>>>>> readme

- 컨텐츠의 수익에 대한 보상으로 쓰이는 토큰 (ERC20 표준)
- ERC20 라이브러리
    - ERC20Lockable
    - ERC20Burnable
    - ERC20Mintable
- 주요 함수
    - `transferFrom()` : 토큰을 특정 주소에서 특정 주소로 옮김
    - `approve()` : 특정 주소에게 자신의 토큰 옮길 수 있는 권리 부여
    - `mint()` : 특정 주소에 토큰 생성
    - `burn()` : 특정 주소의 토큰 제거

<<<<<<< HEAD
### 1-3) RewardGateway.sol
=======
### RewardGateway.sol
>>>>>>> readme

- 컨텐츠에 대한 수익 분배(정산) 및 인출
- 수익 분배와 인출에 대한 기록 저장
- 데이터 구조
    - _paymentsHistory

        ```jsx
        mapping(uint256=>uint256[]) internal _paymentsHistory
        ```

        컨텐츠에서 분배되는 수익의 기록을 컨텐츠 별로 저장

    - _withdrawalHistory

        ```jsx
        mapping(address=>uint256[]) internal _withdrawalHistory
        ```

        사용자가 출금한 기록을 address 별로 저장

- 주요 함수
    - `pay()`: 컨텐츠에 해당하는 수익을 계산하고, 홀더들에게 수익 분배 (정산)
    - `exit()`: 사용자가 소유한 Reward Token을 전부 인출 (인출)
    - `paymentsHistory()`: 컨텐츠의 수익배분(정산) 기록을 불러옴
    - `exitHistory()`: 사용자의 인출 기록을 불러옴
<<<<<<< HEAD
- 상세 문서

    [IRewardGateway](./docs/IRewardGateway.md)

## 2. 주요 기능 상세 설명

---

### 2-1) 컨텐츠 생성 / 지분 등록 및 수정

- 컨텐트 생성 및 지분 등록 절차
=======

    RewardGatewaysol에서 구현된 함수들의 documentation

    https://github.com/HAECHI-LABS/Staby/blob/revision/docs/IRewardGateway.md

## 주요 기능 상세 설명

---

### 1. 컨텐츠 생성 / 지분 등록 및 수정

- 절차
>>>>>>> readme
    1. 컨텐츠 생성 (Contents#createContent)
    2. 지분 추가 (Contents#addHolders)
    3. 지분 변경 (Contents#updateHolders)
    4. 활성상태 변경 (Contents#activateContent / Contents#deactivateContent)
- 실행 과정

    절차대로 시나리오를 실행하기위한 함수호출 방법

<<<<<<< HEAD
    - 컨텐츠 생성 함수
=======
    - 컨텐츠 생성
>>>>>>> readme

        ```jsx
        createContent("Content_1")
        ```

<<<<<<< HEAD
        - 결과: Contents 구조체가 생성됨
            - name :  `Content_1`
            - contentId :  `0`
            - disabled :  `true`
    - 지분 정보 추가 함수
=======
        Contents 구조체가 생성됨

        name :  `Content_1`

        contentId :  `0` 

        disabled :  `true`

    - 지분 정보 추가
>>>>>>> readme

        ```jsx
        addHolders(0, ["supervisor", "author", "actor"], ["0xa..", "0xb..", "0xc.."], [1,3,6])
        ```

<<<<<<< HEAD
        - 결과: ShareHolders 구조체가 생성됨
            - contentId : `0`
            - holderName : `["supervisor", "author", "actor"]`
            - holderAddress : `["0xa..", "0xb..", "0xc.."]`
            - holderPortion : `[1,3,6]`
    - 지분 정보 변경 함수
=======
        ShareHolders 구조체가 생성됨

        contentId : `0`

        holderName : `["supervisor", "author", "actor"]` 

        holderAddress : `["0xa..", "0xb..", "0xc.."]` 

        holderPortion : `[1,3,6]` 

    - 지분 정보 변경
>>>>>>> readme

        ```jsx
        updateHolders(0, ["supervisor", "author", "actress"], ["0xa..", "0xb..", "0xd.."], [3,2,5])
        ```

<<<<<<< HEAD
        - 결과: 기존 ShareHolders 구조체를 삭제하고 새로운 구조체가 생성됨
            - contentId : `0`
            - holderName : `["supervisor", "author", "actress"]`
            - holderAddress : `["0xa..", "0xb..", "0xd.."]`
            - holderPortion : `[3,2,5]`
    - 활성상태 변경 함수

        ```jsx
        # 비활성화
        deactivateContent(0)
        ```

        - 결과: 컨텐츠 ID가 `0`인 컨텐츠의 disabled 가 `True`로 변경됨
            - name : `Content_1`
            - contentId : `0` (부터 순서대로 하나씩 증가)
            - disabled :  `True`

        ```jsx
        # 활성화
        activateContent(0)
        ```

        - 결과: 컨텐츠 ID가 `0` 인 컨텐츠의 disabled 가 `False`로 변경됨
            - name : `Content_1`
            - contentId : `0` (부터 순서대로 하나씩 증가)
            - disabled :  `False`

### 2-2) 정산

- 정산 절차
=======
        기존 ShareHolders 구조체를 삭제하고 새로운 구조체가 생성됨

        contentId : `0`

        holderName : `["supervisor", "author", "actress"]` 

        holderAddress : `["0xa..", "0xb..", "0xd.."]` 

        holderPortion : `[3,2,5]` 

    - 활성상태 변경

        ```jsx
        deactivateContent(0)
        ```

        컨텐츠 ID가 `0`인 컨텐츠의 disabled 가 `True`로 변경됨

        name : `Content_1`

        contentId : `0` (부터 순서대로 하나씩 증가)

        disabled :  `True`

        ```jsx
        activateContent(0)
        ```

        컨텐츠 ID가 `0` 인 컨텐츠의 disabled 가 `False`로 변경됨

        name : `Content_1`

        contentId : `0` (부터 순서대로 하나씩 증가)

        disabled :  `False`

### 2. 정산

- 절차
>>>>>>> readme
    1. 컨텐츠에서 발생한 수익을 DB에서 가져옴
    2. 정산 (RewardGateway#pay)
- 실행 과정

    절차대로 시나리오를 실행하기위한 함수호출 방법

    - 컨텐츠 수익 가져옴 (ex 수익 : 1000)
<<<<<<< HEAD
    - 정산 함수
=======
    - 정산
>>>>>>> readme

        ```jsx
        pay(0, 1000) // (contentId, profit)
        ```

<<<<<<< HEAD
        - 결과: RewardGateway contract로 `10000 REW` 토큰이 `mint`됨
            - 홀더가 분배받을 수익이 `_rewards` 구조체에 저장됨

                `balanceOf("0xa..")` = `300`

                `balanceOf("0xb..")` = `200`

                `balanceOf("0xd..")` = `500`

            - 컨텐츠의 수익 배분 기록이 _paymentHistory 구조체에 저장됨

                `_paymentHistory[0]` = `1000`

### 2-3) 정산 금액 인출
=======
        RewardGateway contract로 `10000 REW` 토큰이 `mint`됨

        홀더가 분배받을 수익이 `_rewards` 구조체에 저장됨

        `balanceOf("0xa..")` = `300`

        `balanceOf("0xb..")` = `200`

        `balanceOf("0xd..")` = `500`

        컨텐츠의 수익 배분 기록이 _paymentHistory 구조체에 저장됨

        `_paymentHistory[0]` = `1000`

### 3. 정산 금액 인출
>>>>>>> readme

- 절차
    
    1. 사용자의 수익 인출 (RewardGateway#exit)
- 실행 과정

    절차대로 시나리오를 실행하기위한 함수호출 방법

<<<<<<< HEAD
    - 인출 함수
=======
    - 인출
>>>>>>> readme

        ```jsx
        exit("0xa..")
        ```

<<<<<<< HEAD
        - 결과: 사용자의 REW 토큰을 RewardGateway contract에 `balanceOf("0xa..")` 만큼 `trasnfer`
            - RewardGateway contract의 REW 토큰을 `burn`
            - tx를 하나만 생성시키기 위해 `RewardToken#approveAndExit()`을 이용하여 `RewardGateway#exit()`호출
            - 사용자의 REW 토큰이 제거됨
                - `balanceOf("0xa..")` = `0`
            - 홀더의 인출 기록이 _withdrawalHistory 구조체에 저장됨
                - `_withdrawalHistory["0xa.."]` = `300`
=======
        사용자의 REW 토큰을 RewardGateway contract에 `balanceOf("0xa..")` 만큼 `trasnfer`

        RewardGatewat contract의 REW 토큰을 `burn`

        tx를 하나만 생성시키기 위해 `RewardToken#approveAndExit()`을 이용하여 `RewardGateway#exit()`호출

        사용자의 REW 토큰이 제거됨

        `balanceOf("0xa..")` = `0`

        홀더의 인출 기록이 _withdrawalHistory 구조체에 저장됨

        `_withdrawalHistory["0xa.."]` = `300`
>>>>>>> readme
