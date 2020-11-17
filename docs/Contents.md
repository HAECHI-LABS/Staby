# <span id="Contents"></span> Contents
> 





## Contents


- [Events](#Contents--Events)


  - [AddShareInfo](#Contents--event--AddShareInfo)


  - [ContentActivation](#Contents--event--ContentActivation)


  - [ContentDeactivated](#Contents--event--ContentDeactivated)


  - [ContentsCreation](#Contents--event--ContentsCreation)


  - [DeleteShareInfo](#Contents--event--DeleteShareInfo)


  - [OwnershipTransferred](#Contents--event--OwnershipTransferred)



- [Functions](#Contents--Functions)


  - [owner()](#Contents--function--owner())


  - [renounceOwnership()](#Contents--function--renounceOwnership())


  - [transferOwnership(address)](#Contents--function--transferOwnership(address))


  - [createContent(string)](#Contents--function--createContent(string))


  - [addHolders(uint256,bytes32[],address[],uint256[])](#Contents--function--addHolders(uint256,bytes32[],address[],uint256[]))


  - [deleteHolders(uint256)](#Contents--function--deleteHolders(uint256))


  - [updateHolders(uint256,bytes32[],address[],uint256[])](#Contents--function--updateHolders(uint256,bytes32[],address[],uint256[]))


  - [activateContent(uint256)](#Contents--function--activateContent(uint256))


  - [deactivateContent(uint256)](#Contents--function--deactivateContent(uint256))


  - [getContentInfo(uint256)](#Contents--function--getContentInfo(uint256))


  - [getHolderInfo(uint256,uint256)](#Contents--function--getHolderInfo(uint256,uint256))


  - [getHolderNum(uint256)](#Contents--function--getHolderNum(uint256))


  - [getDenominator()](#Contents--function--getDenominator())


  - [getContentCounter()](#Contents--function--getContentCounter())



## 🦄Events <a name="Contents--Events"></a>


<details><summary><strong>AddShareInfo <a name="Contents--event--AddShareInfo"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| contentId | `true` | `uint256` |
| nickName | `false` | `bytes32[]` |
| holderAddress | `false` | `address[]` |
| holderPortion | `false` | `uint256[]` |

</p>

</details>


<details><summary><strong>ContentActivation <a name="Contents--event--ContentActivation"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| contentId | `true` | `uint256` |

</p>

</details>


<details><summary><strong>ContentDeactivated <a name="Contents--event--ContentDeactivated"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| contentId | `true` | `uint256` |

</p>

</details>


<details><summary><strong>ContentsCreation <a name="Contents--event--ContentsCreation"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| name | `false` | `string` |
| contentId | `true` | `uint256` |

</p>

</details>


<details><summary><strong>DeleteShareInfo <a name="Contents--event--DeleteShareInfo"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| contentId | `true` | `uint256` |

</p>

</details>


<details><summary><strong>OwnershipTransferred <a name="Contents--event--OwnershipTransferred"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| currentOwner | `true` | `address` |
| newOwner | `true` | `address` |

</p>

</details>



## 🚀Functions <a name="Contents--Functions"></a>
<dl>
<dt> <h3> owner() <a name="Contents--function--owner()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  ownerAddress  | `address` |



</dd>
<dt> <h3> renounceOwnership() <a name="Contents--function--renounceOwnership()"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> transferOwnership(address) <a name="Contents--function--transferOwnership(address)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> createContent(string) <a name="Contents--function--createContent(string)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`


</dd>
<dt> <h3> addHolders(uint256,bytes32[],address[],uint256[]) <a name="Contents--function--addHolders(uint256,bytes32[],address[],uint256[])"></a> </h3> </dt>
<dd>

 👀 `nonpayable`


</dd>
<dt> <h3> deleteHolders(uint256) <a name="Contents--function--deleteHolders(uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`


</dd>
<dt> <h3> updateHolders(uint256,bytes32[],address[],uint256[]) <a name="Contents--function--updateHolders(uint256,bytes32[],address[],uint256[])"></a> </h3> </dt>
<dd>

 👀 `nonpayable`


</dd>
<dt> <h3> activateContent(uint256) <a name="Contents--function--activateContent(uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`


</dd>
<dt> <h3> deactivateContent(uint256) <a name="Contents--function--deactivateContent(uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`


</dd>
<dt> <h3> getContentInfo(uint256) <a name="Contents--function--getContentInfo(uint256)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  name  | `string` |
|  contentId  | `uint256` |
|  active  | `bool` |



</dd>
<dt> <h3> getHolderInfo(uint256,uint256) <a name="Contents--function--getHolderInfo(uint256,uint256)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  holderName  | `bytes32` |
|  holderAddress  | `address` |
|  holderPortion  | `uint256` |



</dd>
<dt> <h3> getHolderNum(uint256) <a name="Contents--function--getHolderNum(uint256)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  holderNum  | `uint256` |



</dd>
<dt> <h3> getDenominator() <a name="Contents--function--getDenominator()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  Not specified  | `uint256` |



</dd>
<dt> <h3> getContentCounter() <a name="Contents--function--getContentCounter()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  contentCounter  | `uint256` |



</dd>
</dl>
