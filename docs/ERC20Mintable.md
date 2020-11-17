# <span id="ERC20Mintable"></span> ERC20Mintable
> 





## Contents


- [Events](#ERC20Mintable--Events)


  - [Approval](#ERC20Mintable--event--Approval)


  - [Mint](#ERC20Mintable--event--Mint)


  - [MintFinished](#ERC20Mintable--event--MintFinished)


  - [OwnershipTransferred](#ERC20Mintable--event--OwnershipTransferred)


  - [Paused](#ERC20Mintable--event--Paused)


  - [Transfer](#ERC20Mintable--event--Transfer)


  - [Unpaused](#ERC20Mintable--event--Unpaused)



- [Functions](#ERC20Mintable--Functions)


  - [allowance(address,address)](#ERC20Mintable--function--allowance(address,address))


  - [approve(address,uint256)](#ERC20Mintable--function--approve(address,uint256))


  - [balanceOf(address)](#ERC20Mintable--function--balanceOf(address))


  - [decimals()](#ERC20Mintable--function--decimals())


  - [name()](#ERC20Mintable--function--name())


  - [owner()](#ERC20Mintable--function--owner())


  - [pause()](#ERC20Mintable--function--pause())


  - [paused()](#ERC20Mintable--function--paused())


  - [renounceOwnership()](#ERC20Mintable--function--renounceOwnership())


  - [symbol()](#ERC20Mintable--function--symbol())


  - [totalSupply()](#ERC20Mintable--function--totalSupply())


  - [transfer(address,uint256)](#ERC20Mintable--function--transfer(address,uint256))


  - [transferFrom(address,address,uint256)](#ERC20Mintable--function--transferFrom(address,address,uint256))


  - [transferOwnership(address)](#ERC20Mintable--function--transferOwnership(address))


  - [unPause()](#ERC20Mintable--function--unPause())


  - [mint(address,uint256)](#ERC20Mintable--function--mint(address,uint256))


  - [finishMint()](#ERC20Mintable--function--finishMint())


  - [isFinished()](#ERC20Mintable--function--isFinished())



## 🦄Events <a name="ERC20Mintable--Events"></a>


<details><summary><strong>Approval <a name="ERC20Mintable--event--Approval"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| owner | `true` | `address` |
| spender | `true` | `address` |
| amount | `false` | `uint256` |

</p>

</details>


<details><summary><strong>Mint <a name="ERC20Mintable--event--Mint"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| receiver | `true` | `address` |
| amount | `false` | `uint256` |

</p>

</details>


<details><summary><strong>MintFinished <a name="ERC20Mintable--event--MintFinished"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|

</p>

</details>


<details><summary><strong>OwnershipTransferred <a name="ERC20Mintable--event--OwnershipTransferred"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| currentOwner | `true` | `address` |
| newOwner | `true` | `address` |

</p>

</details>


<details><summary><strong>Paused <a name="ERC20Mintable--event--Paused"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|

</p>

</details>


<details><summary><strong>Transfer <a name="ERC20Mintable--event--Transfer"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| from | `true` | `address` |
| to | `true` | `address` |
| amount | `false` | `uint256` |

</p>

</details>


<details><summary><strong>Unpaused <a name="ERC20Mintable--event--Unpaused"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|

</p>

</details>



## 🚀Functions <a name="ERC20Mintable--Functions"></a>
<dl>
<dt> <h3> allowance(address,address) <a name="ERC20Mintable--function--allowance(address,address)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  remaining  | `uint256` |



</dd>
<dt> <h3> approve(address,uint256) <a name="ERC20Mintable--function--approve(address,uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> balanceOf(address) <a name="ERC20Mintable--function--balanceOf(address)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  balance  | `uint256` |



</dd>
<dt> <h3> decimals() <a name="ERC20Mintable--function--decimals()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  tokenDecimals  | `uint8` |



</dd>
<dt> <h3> name() <a name="ERC20Mintable--function--name()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  tokenName  | `string` |



</dd>
<dt> <h3> owner() <a name="ERC20Mintable--function--owner()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  ownerAddress  | `address` |



</dd>
<dt> <h3> pause() <a name="ERC20Mintable--function--pause()"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> paused() <a name="ERC20Mintable--function--paused()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  Not specified  | `bool` |



</dd>
<dt> <h3> renounceOwnership() <a name="ERC20Mintable--function--renounceOwnership()"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> symbol() <a name="ERC20Mintable--function--symbol()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  tokenSymbol  | `string` |



</dd>
<dt> <h3> totalSupply() <a name="ERC20Mintable--function--totalSupply()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  total  | `uint256` |



</dd>
<dt> <h3> transfer(address,uint256) <a name="ERC20Mintable--function--transfer(address,uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> transferFrom(address,address,uint256) <a name="ERC20Mintable--function--transferFrom(address,address,uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> transferOwnership(address) <a name="ERC20Mintable--function--transferOwnership(address)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> unPause() <a name="ERC20Mintable--function--unPause()"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> mint(address,uint256) <a name="ERC20Mintable--function--mint(address,uint256)"></a> </h3> </dt>
<dd>

>mint token

🔨`only owner can call this function` |  👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> finishMint() <a name="ERC20Mintable--function--finishMint()"></a> </h3> </dt>
<dd>

>finish minting, cannot mint after calling this function

🔨`only owner can call this function` |  👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> isFinished() <a name="ERC20Mintable--function--isFinished()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  finished  | `bool` |



</dd>
</dl>
