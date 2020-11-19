# <span id="ERC20Burnable"></span> ERC20Burnable
> 





## Contents


- [Events](#ERC20Burnable--Events)


  - [Approval](#ERC20Burnable--event--Approval)


  - [Burn](#ERC20Burnable--event--Burn)


  - [OwnershipTransferred](#ERC20Burnable--event--OwnershipTransferred)


  - [Paused](#ERC20Burnable--event--Paused)


  - [Transfer](#ERC20Burnable--event--Transfer)


  - [Unpaused](#ERC20Burnable--event--Unpaused)



- [Functions](#ERC20Burnable--Functions)


  - [allowance(address,address)](#ERC20Burnable--function--allowance(address,address))


  - [approve(address,uint256)](#ERC20Burnable--function--approve(address,uint256))


  - [balanceOf(address)](#ERC20Burnable--function--balanceOf(address))


  - [decimals()](#ERC20Burnable--function--decimals())


  - [name()](#ERC20Burnable--function--name())


  - [owner()](#ERC20Burnable--function--owner())


  - [pause()](#ERC20Burnable--function--pause())


  - [paused()](#ERC20Burnable--function--paused())


  - [renounceOwnership()](#ERC20Burnable--function--renounceOwnership())


  - [symbol()](#ERC20Burnable--function--symbol())


  - [totalSupply()](#ERC20Burnable--function--totalSupply())


  - [transfer(address,uint256)](#ERC20Burnable--function--transfer(address,uint256))


  - [transferFrom(address,address,uint256)](#ERC20Burnable--function--transferFrom(address,address,uint256))


  - [transferOwnership(address)](#ERC20Burnable--function--transferOwnership(address))


  - [unPause()](#ERC20Burnable--function--unPause())


  - [burn(uint256)](#ERC20Burnable--function--burn(uint256))


  - [burnFrom(address,uint256)](#ERC20Burnable--function--burnFrom(address,uint256))



## 🦄Events <a name="ERC20Burnable--Events"></a>


<details><summary><strong>Approval <a name="ERC20Burnable--event--Approval"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| owner | `true` | `address` |
| spender | `true` | `address` |
| amount | `false` | `uint256` |

</p>

</details>


<details><summary><strong>Burn <a name="ERC20Burnable--event--Burn"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| burned | `true` | `address` |
| amount | `false` | `uint256` |

</p>

</details>


<details><summary><strong>OwnershipTransferred <a name="ERC20Burnable--event--OwnershipTransferred"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| currentOwner | `true` | `address` |
| newOwner | `true` | `address` |

</p>

</details>


<details><summary><strong>Paused <a name="ERC20Burnable--event--Paused"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|

</p>

</details>


<details><summary><strong>Transfer <a name="ERC20Burnable--event--Transfer"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| from | `true` | `address` |
| to | `true` | `address` |
| amount | `false` | `uint256` |

</p>

</details>


<details><summary><strong>Unpaused <a name="ERC20Burnable--event--Unpaused"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|

</p>

</details>



## 🚀Functions <a name="ERC20Burnable--Functions"></a>
<dl>
<dt> <h3> allowance(address,address) <a name="ERC20Burnable--function--allowance(address,address)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  remaining  | `uint256` |



</dd>
<dt> <h3> approve(address,uint256) <a name="ERC20Burnable--function--approve(address,uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> balanceOf(address) <a name="ERC20Burnable--function--balanceOf(address)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  balance  | `uint256` |



</dd>
<dt> <h3> decimals() <a name="ERC20Burnable--function--decimals()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  tokenDecimals  | `uint8` |



</dd>
<dt> <h3> name() <a name="ERC20Burnable--function--name()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  tokenName  | `string` |



</dd>
<dt> <h3> owner() <a name="ERC20Burnable--function--owner()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  ownerAddress  | `address` |



</dd>
<dt> <h3> pause() <a name="ERC20Burnable--function--pause()"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> paused() <a name="ERC20Burnable--function--paused()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  Not specified  | `bool` |



</dd>
<dt> <h3> renounceOwnership() <a name="ERC20Burnable--function--renounceOwnership()"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> symbol() <a name="ERC20Burnable--function--symbol()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  tokenSymbol  | `string` |



</dd>
<dt> <h3> totalSupply() <a name="ERC20Burnable--function--totalSupply()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  total  | `uint256` |



</dd>
<dt> <h3> transfer(address,uint256) <a name="ERC20Burnable--function--transfer(address,uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> transferFrom(address,address,uint256) <a name="ERC20Burnable--function--transferFrom(address,address,uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> transferOwnership(address) <a name="ERC20Burnable--function--transferOwnership(address)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> unPause() <a name="ERC20Burnable--function--unPause()"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> burn(uint256) <a name="ERC20Burnable--function--burn(uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> burnFrom(address,uint256) <a name="ERC20Burnable--function--burnFrom(address,uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
</dl>
