# <span id="RewardToken"></span> RewardToken
> 





## Contents


- [Events](#RewardToken--Events)


  - [Approval](#RewardToken--event--Approval)


  - [Burn](#RewardToken--event--Burn)


  - [Freeze](#RewardToken--event--Freeze)


  - [Lock](#RewardToken--event--Lock)


  - [Mint](#RewardToken--event--Mint)


  - [MintFinished](#RewardToken--event--MintFinished)


  - [OwnershipTransferred](#RewardToken--event--OwnershipTransferred)


  - [Paused](#RewardToken--event--Paused)


  - [Transfer](#RewardToken--event--Transfer)


  - [Unfreeze](#RewardToken--event--Unfreeze)


  - [Unlock](#RewardToken--event--Unlock)


  - [Unpaused](#RewardToken--event--Unpaused)



- [Functions](#RewardToken--Functions)


  - [allowance(address,address)](#RewardToken--function--allowance(address,address))


  - [balanceOf(address)](#RewardToken--function--balanceOf(address))


  - [burn(uint256)](#RewardToken--function--burn(uint256))


  - [burnFrom(address,uint256)](#RewardToken--function--burnFrom(address,uint256))


  - [finishMint()](#RewardToken--function--finishMint())


  - [freeze(address)](#RewardToken--function--freeze(address))


  - [isFinished()](#RewardToken--function--isFinished())


  - [isFrozen(address)](#RewardToken--function--isFrozen(address))


  - [lockInfo(address,uint256)](#RewardToken--function--lockInfo(address,uint256))


  - [mint(address,uint256)](#RewardToken--function--mint(address,uint256))


  - [owner()](#RewardToken--function--owner())


  - [pause()](#RewardToken--function--pause())


  - [paused()](#RewardToken--function--paused())


  - [releaseLock(address)](#RewardToken--function--releaseLock(address))


  - [renounceOwnership()](#RewardToken--function--renounceOwnership())


  - [totalLocked(address)](#RewardToken--function--totalLocked(address))


  - [totalSupply()](#RewardToken--function--totalSupply())


  - [transferOwnership(address)](#RewardToken--function--transferOwnership(address))


  - [transferWithLockUp(address,uint256,uint256)](#RewardToken--function--transferWithLockUp(address,uint256,uint256))


  - [unFreeze(address)](#RewardToken--function--unFreeze(address))


  - [unPause()](#RewardToken--function--unPause())


  - [unlock(address,uint256)](#RewardToken--function--unlock(address,uint256))


  - [unlockAll(address)](#RewardToken--function--unlockAll(address))


  - [transfer(address,uint256)](#RewardToken--function--transfer(address,uint256))


  - [transferFrom(address,address,uint256)](#RewardToken--function--transferFrom(address,address,uint256))


  - [approve(address,uint256)](#RewardToken--function--approve(address,uint256))


  - [name()](#RewardToken--function--name())


  - [symbol()](#RewardToken--function--symbol())


  - [decimals()](#RewardToken--function--decimals())



## 🦄Events <a name="RewardToken--Events"></a>


<details><summary><strong>Approval <a name="RewardToken--event--Approval"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| owner | `true` | `address` |
| spender | `true` | `address` |
| amount | `false` | `uint256` |

</p>

</details>


<details><summary><strong>Burn <a name="RewardToken--event--Burn"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| burned | `true` | `address` |
| amount | `false` | `uint256` |

</p>

</details>


<details><summary><strong>Freeze <a name="RewardToken--event--Freeze"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| target | `true` | `address` |

</p>

</details>


<details><summary><strong>Lock <a name="RewardToken--event--Lock"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| from | `true` | `address` |
| amount | `false` | `uint256` |
| due | `false` | `uint256` |

</p>

</details>


<details><summary><strong>Mint <a name="RewardToken--event--Mint"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| receiver | `true` | `address` |
| amount | `false` | `uint256` |

</p>

</details>


<details><summary><strong>MintFinished <a name="RewardToken--event--MintFinished"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|

</p>

</details>


<details><summary><strong>OwnershipTransferred <a name="RewardToken--event--OwnershipTransferred"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| currentOwner | `true` | `address` |
| newOwner | `true` | `address` |

</p>

</details>


<details><summary><strong>Paused <a name="RewardToken--event--Paused"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|

</p>

</details>


<details><summary><strong>Transfer <a name="RewardToken--event--Transfer"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| from | `true` | `address` |
| to | `true` | `address` |
| amount | `false` | `uint256` |

</p>

</details>


<details><summary><strong>Unfreeze <a name="RewardToken--event--Unfreeze"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| target | `true` | `address` |

</p>

</details>


<details><summary><strong>Unlock <a name="RewardToken--event--Unlock"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| from | `true` | `address` |
| amount | `false` | `uint256` |

</p>

</details>


<details><summary><strong>Unpaused <a name="RewardToken--event--Unpaused"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|

</p>

</details>



## 🚀Functions <a name="RewardToken--Functions"></a>
<dl>
<dt> <h3> allowance(address,address) <a name="RewardToken--function--allowance(address,address)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  remaining  | `uint256` |



</dd>
<dt> <h3> balanceOf(address) <a name="RewardToken--function--balanceOf(address)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  balance  | `uint256` |



</dd>
<dt> <h3> burn(uint256) <a name="RewardToken--function--burn(uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> burnFrom(address,uint256) <a name="RewardToken--function--burnFrom(address,uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> finishMint() <a name="RewardToken--function--finishMint()"></a> </h3> </dt>
<dd>

>finish minting, cannot mint after calling this function

🔨`only owner can call this function` |  👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> freeze(address) <a name="RewardToken--function--freeze(address)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> isFinished() <a name="RewardToken--function--isFinished()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  finished  | `bool` |



</dd>
<dt> <h3> isFrozen(address) <a name="RewardToken--function--isFrozen(address)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  frozen  | `bool` |



</dd>
<dt> <h3> lockInfo(address,uint256) <a name="RewardToken--function--lockInfo(address,uint256)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  amount  | `uint256` |
|  due  | `uint256` |



</dd>
<dt> <h3> mint(address,uint256) <a name="RewardToken--function--mint(address,uint256)"></a> </h3> </dt>
<dd>

>mint token

🔨`only owner can call this function` |  👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> owner() <a name="RewardToken--function--owner()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  ownerAddress  | `address` |



</dd>
<dt> <h3> pause() <a name="RewardToken--function--pause()"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> paused() <a name="RewardToken--function--paused()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  Not specified  | `bool` |



</dd>
<dt> <h3> releaseLock(address) <a name="RewardToken--function--releaseLock(address)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> renounceOwnership() <a name="RewardToken--function--renounceOwnership()"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> totalLocked(address) <a name="RewardToken--function--totalLocked(address)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  amount  | `uint256` |
|  length  | `uint256` |



</dd>
<dt> <h3> totalSupply() <a name="RewardToken--function--totalSupply()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  total  | `uint256` |



</dd>
<dt> <h3> transferOwnership(address) <a name="RewardToken--function--transferOwnership(address)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> transferWithLockUp(address,uint256,uint256) <a name="RewardToken--function--transferWithLockUp(address,uint256,uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> unFreeze(address) <a name="RewardToken--function--unFreeze(address)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> unPause() <a name="RewardToken--function--unPause()"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> unlock(address,uint256) <a name="RewardToken--function--unlock(address,uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> unlockAll(address) <a name="RewardToken--function--unlockAll(address)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> transfer(address,uint256) <a name="RewardToken--function--transfer(address,uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> transferFrom(address,address,uint256) <a name="RewardToken--function--transferFrom(address,address,uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> approve(address,uint256) <a name="RewardToken--function--approve(address,uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> name() <a name="RewardToken--function--name()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  tokenName  | `string` |



</dd>
<dt> <h3> symbol() <a name="RewardToken--function--symbol()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  tokenSymbol  | `string` |



</dd>
<dt> <h3> decimals() <a name="RewardToken--function--decimals()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  tokenDecimals  | `uint8` |



</dd>
</dl>
