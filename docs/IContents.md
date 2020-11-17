# <span id="IContents"></span> IContents
> 





## Contents


- [Events](#IContents--Events)


  - [AddShareInfo](#IContents--event--AddShareInfo)


  - [ContentActivation](#IContents--event--ContentActivation)


  - [ContentDeactivated](#IContents--event--ContentDeactivated)


  - [ContentsCreation](#IContents--event--ContentsCreation)


  - [DeleteShareInfo](#IContents--event--DeleteShareInfo)



- [Functions](#IContents--Functions)


  - [createContent(string)](#IContents--function--createContent(string))


  - [addHolders(uint256,bytes32[],address[],uint256[])](#IContents--function--addHolders(uint256,bytes32[],address[],uint256[]))


  - [deleteHolders(uint256)](#IContents--function--deleteHolders(uint256))


  - [updateHolders(uint256,bytes32[],address[],uint256[])](#IContents--function--updateHolders(uint256,bytes32[],address[],uint256[]))


  - [activateContent(uint256)](#IContents--function--activateContent(uint256))


  - [deactivateContent(uint256)](#IContents--function--deactivateContent(uint256))


  - [getContentInfo(uint256)](#IContents--function--getContentInfo(uint256))


  - [getHolderInfo(uint256,uint256)](#IContents--function--getHolderInfo(uint256,uint256))


  - [getHolderNum(uint256)](#IContents--function--getHolderNum(uint256))


  - [getDenominator()](#IContents--function--getDenominator())


  - [getContentCounter()](#IContents--function--getContentCounter())



## 🦄Events <a name="IContents--Events"></a>


<details><summary><strong>AddShareInfo <a name="IContents--event--AddShareInfo"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| contentId | `true` | `uint256` |
| nickName | `false` | `bytes32[]` |
| holderAddress | `false` | `address[]` |
| holderPortion | `false` | `uint256[]` |

</p>

</details>


<details><summary><strong>ContentActivation <a name="IContents--event--ContentActivation"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| contentId | `true` | `uint256` |

</p>

</details>


<details><summary><strong>ContentDeactivated <a name="IContents--event--ContentDeactivated"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| contentId | `true` | `uint256` |

</p>

</details>


<details><summary><strong>ContentsCreation <a name="IContents--event--ContentsCreation"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| name | `false` | `string` |
| contentId | `true` | `uint256` |

</p>

</details>


<details><summary><strong>DeleteShareInfo <a name="IContents--event--DeleteShareInfo"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| contentId | `true` | `uint256` |

</p>

</details>



## 🚀Functions <a name="IContents--Functions"></a>
<dl>
<dt> <h3> createContent(string) <a name="IContents--function--createContent(string)"></a> </h3> </dt>
<dd>

>컨텐츠 생성 / 컨텐츠 ID : 0 부터 하나씩 증가 / 활성상태 : 0

🔨`@param _name : 컨텐츠 이름` |  👀 `nonpayable`


</dd>
<dt> <h3> addHolders(uint256,bytes32[],address[],uint256[]) <a name="IContents--function--addHolders(uint256,bytes32[],address[],uint256[])"></a> </h3> </dt>
<dd>

>컨텐츠 ID에 해당하는 홀더 정보 (name, address, portion) 기록

🔨`@param _contentId : 정보 기록할 컨텐츠 ID` |  👀 `nonpayable`

#### ⚙️ Parameters

| Name | Type | Description |
|:-:|:-:| - |
| _contentId | `uint256` | undefined |
| _holderName | `bytes32[]` | : 홀더 닉네임 (array) |
| _holderAddress | `address[]` | : 홀더 address (array) |
| _holderPortion | `uint256[]` | : 홀더 portion (array) / 0 ~ 10 / portion의 합 = 10 |



</dd>
<dt> <h3> deleteHolders(uint256) <a name="IContents--function--deleteHolders(uint256)"></a> </h3> </dt>
<dd>

>컨텐츠 ID에 해당하는 홀더 정보 삭제

🔨`@param _contentId : 정보 삭제할 컨텐츠 ID` |  👀 `nonpayable`


</dd>
<dt> <h3> updateHolders(uint256,bytes32[],address[],uint256[]) <a name="IContents--function--updateHolders(uint256,bytes32[],address[],uint256[])"></a> </h3> </dt>
<dd>

>컨텐츠 ID에 해당하는 홀더 정보 업테이트

🔨`@param _contentId : 정보 업데이트 할 컨텐츠 ID` |  👀 `nonpayable`

#### ⚙️ Parameters

| Name | Type | Description |
|:-:|:-:| - |
| _contentId | `uint256` | undefined |
| _holderName | `bytes32[]` | : 홀더 닉네임 (array) |
| _holderAddress | `address[]` | : 홀더 address (array) |
| _holderPortion | `uint256[]` | : 홀더 portion (array) / 0 ~ 10 / portion의 합 = 10 |



</dd>
<dt> <h3> activateContent(uint256) <a name="IContents--function--activateContent(uint256)"></a> </h3> </dt>
<dd>

>ID에 해당하는 컨텐츠를 활성화

🔨`@param contentId : 활성화 할 컨텐츠의 ID` |  👀 `nonpayable`


</dd>
<dt> <h3> deactivateContent(uint256) <a name="IContents--function--deactivateContent(uint256)"></a> </h3> </dt>
<dd>

>ID에 해당하는 컨텐츠를 비활성화

🔨`@param contentId : 비활성화 할 컨텐츠의 ID` |  👀 `nonpayable`


</dd>
<dt> <h3> getContentInfo(uint256) <a name="IContents--function--getContentInfo(uint256)"></a> </h3> </dt>
<dd>

>컨텐츠 ID에 해당하는 컨텐츠의 정보를 불러옴

🔨`@param contentId : 정보를 불러올 컨텐츠의 ID` |  👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  Not specified  | `string` |
|  Not specified  | `uint256` |
|  Not specified  | `bool` |

name : 컨텐츠의 이름contentId : 컨텐츠의 IDactive : 컨텐츠의 활성상태

</dd>
<dt> <h3> getHolderInfo(uint256,uint256) <a name="IContents--function--getHolderInfo(uint256,uint256)"></a> </h3> </dt>
<dd>

>컨텐츠 ID에 해당하는 홀더 정보를 불러옴

🔨`@param contentId : 홀더 정보를 불러올 컨텐츠의 ID` |  👀 `view`

#### ⚙️ Parameters

| Name | Type | Description |
|:-:|:-:| - |
| _contentId | `uint256` | undefined |
| _num | `uint256` | : 홀더의 index |


#### → Returns
| Name | Type |
|:-:|:-:|
|  Not specified  | `bytes32` |
|  Not specified  | `address` |
|  Not specified  | `uint256` |

holderName : index에 해당하는 홀더 nameholderAddress : index에 해당하는 홀더 addressholderPortion : index에 해당하는 홀더 portion

</dd>
<dt> <h3> getHolderNum(uint256) <a name="IContents--function--getHolderNum(uint256)"></a> </h3> </dt>
<dd>

>컨텐츠 ID에 해당하는 홀더의 수를 불러옴

🔨`@param contentId : 홀더의 수를 불러올 컨텐츠의 ID` |  👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  Not specified  | `uint256` |

holderNum : 홀더의 수

</dd>
<dt> <h3> getDenominator() <a name="IContents--function--getDenominator()"></a> </h3> </dt>
<dd>

>Denominator 반환.

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  Not specified  | `uint256` |

DENOMINATOR : 10

</dd>
<dt> <h3> getContentCounter() <a name="IContents--function--getContentCounter()"></a> </h3> </dt>
<dd>

>컨텐츠의 개수를 불러옴

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  Not specified  | `uint256` |

_contentCounter : 컨텐츠의  수

</dd>
</dl>
