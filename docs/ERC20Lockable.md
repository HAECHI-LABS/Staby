# <span id="ERC20Lockable"></span> ERC20Lockable
> 





## Contents


- [Events](#ERC20Lockable--Events)


  - [Approval](#ERC20Lockable--event--Approval)


  - [Lock](#ERC20Lockable--event--Lock)


  - [OwnershipTransferred](#ERC20Lockable--event--OwnershipTransferred)


  - [Transfer](#ERC20Lockable--event--Transfer)


  - [Unlock](#ERC20Lockable--event--Unlock)



- [Functions](#ERC20Lockable--Functions)


  - [allowance(address,address)](#ERC20Lockable--function--allowance(address,address))


  - [approve(address,uint256)](#ERC20Lockable--function--approve(address,uint256))


  - [balanceOf(address)](#ERC20Lockable--function--balanceOf(address))


  - [decimals()](#ERC20Lockable--function--decimals())


  - [name()](#ERC20Lockable--function--name())


  - [owner()](#ERC20Lockable--function--owner())


  - [renounceOwnership()](#ERC20Lockable--function--renounceOwnership())


  - [symbol()](#ERC20Lockable--function--symbol())


  - [totalSupply()](#ERC20Lockable--function--totalSupply())


  - [transfer(address,uint256)](#ERC20Lockable--function--transfer(address,uint256))


  - [transferFrom(address,address,uint256)](#ERC20Lockable--function--transferFrom(address,address,uint256))


  - [transferOwnership(address)](#ERC20Lockable--function--transferOwnership(address))


  - [unlock(address,uint256)](#ERC20Lockable--function--unlock(address,uint256))


  - [unlockAll(address)](#ERC20Lockable--function--unlockAll(address))


  - [releaseLock(address)](#ERC20Lockable--function--releaseLock(address))


  - [transferWithLockUp(address,uint256,uint256)](#ERC20Lockable--function--transferWithLockUp(address,uint256,uint256))


  - [lockInfo(address,uint256)](#ERC20Lockable--function--lockInfo(address,uint256))


  - [totalLocked(address)](#ERC20Lockable--function--totalLocked(address))



## 🦄Events <a name="ERC20Lockable--Events"></a>


<details><summary><strong>Approval <a name="ERC20Lockable--event--Approval"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| owner | `true` | `address` |
| spender | `true` | `address` |
| amount | `false` | `uint256` |

</p>

</details>


<details><summary><strong>Lock <a name="ERC20Lockable--event--Lock"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| from | `true` | `address` |
| amount | `false` | `uint256` |
| due | `false` | `uint256` |

</p>

</details>


<details><summary><strong>OwnershipTransferred <a name="ERC20Lockable--event--OwnershipTransferred"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| currentOwner | `true` | `address` |
| newOwner | `true` | `address` |

</p>

</details>


<details><summary><strong>Transfer <a name="ERC20Lockable--event--Transfer"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| from | `true` | `address` |
| to | `true` | `address` |
| amount | `false` | `uint256` |

</p>

</details>


<details><summary><strong>Unlock <a name="ERC20Lockable--event--Unlock"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| from | `true` | `address` |
| amount | `false` | `uint256` |

</p>

</details>



## 🚀Functions <a name="ERC20Lockable--Functions"></a>
<dl>
<dt> <h3> allowance(address,address) <a name="ERC20Lockable--function--allowance(address,address)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  remaining  | `uint256` |



</dd>
<dt> <h3> approve(address,uint256) <a name="ERC20Lockable--function--approve(address,uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> balanceOf(address) <a name="ERC20Lockable--function--balanceOf(address)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  balance  | `uint256` |



</dd>
<dt> <h3> decimals() <a name="ERC20Lockable--function--decimals()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  tokenDecimals  | `uint8` |



</dd>
<dt> <h3> name() <a name="ERC20Lockable--function--name()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  tokenName  | `string` |



</dd>
<dt> <h3> owner() <a name="ERC20Lockable--function--owner()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  ownerAddress  | `address` |



</dd>
<dt> <h3> renounceOwnership() <a name="ERC20Lockable--function--renounceOwnership()"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> symbol() <a name="ERC20Lockable--function--symbol()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  tokenSymbol  | `string` |



</dd>
<dt> <h3> totalSupply() <a name="ERC20Lockable--function--totalSupply()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  total  | `uint256` |



</dd>
<dt> <h3> transfer(address,uint256) <a name="ERC20Lockable--function--transfer(address,uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> transferFrom(address,address,uint256) <a name="ERC20Lockable--function--transferFrom(address,address,uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> transferOwnership(address) <a name="ERC20Lockable--function--transferOwnership(address)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> unlock(address,uint256) <a name="ERC20Lockable--function--unlock(address,uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> unlockAll(address) <a name="ERC20Lockable--function--unlockAll(address)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> releaseLock(address) <a name="ERC20Lockable--function--releaseLock(address)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> transferWithLockUp(address,uint256,uint256) <a name="ERC20Lockable--function--transferWithLockUp(address,uint256,uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> lockInfo(address,uint256) <a name="ERC20Lockable--function--lockInfo(address,uint256)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  amount  | `uint256` |
|  due  | `uint256` |



</dd>
<dt> <h3> totalLocked(address) <a name="ERC20Lockable--function--totalLocked(address)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  amount  | `uint256` |
|  length  | `uint256` |



</dd>
</dl>
