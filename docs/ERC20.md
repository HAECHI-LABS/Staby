# <span id="ERC20"></span> ERC20
> 





## Contents


- [Events](#ERC20--Events)


  - [Approval](#ERC20--event--Approval)


  - [Transfer](#ERC20--event--Transfer)



- [Functions](#ERC20--Functions)


  - [totalSupply()](#ERC20--function--totalSupply())


  - [balanceOf(address)](#ERC20--function--balanceOf(address))


  - [allowance(address,address)](#ERC20--function--allowance(address,address))


  - [name()](#ERC20--function--name())


  - [symbol()](#ERC20--function--symbol())


  - [decimals()](#ERC20--function--decimals())


  - [transfer(address,uint256)](#ERC20--function--transfer(address,uint256))


  - [transferFrom(address,address,uint256)](#ERC20--function--transferFrom(address,address,uint256))


  - [approve(address,uint256)](#ERC20--function--approve(address,uint256))



## 🦄Events <a name="ERC20--Events"></a>


<details><summary><strong>Approval <a name="ERC20--event--Approval"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| owner | `true` | `address` |
| spender | `true` | `address` |
| amount | `false` | `uint256` |

</p>

</details>


<details><summary><strong>Transfer <a name="ERC20--event--Transfer"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| from | `true` | `address` |
| to | `true` | `address` |
| amount | `false` | `uint256` |

</p>

</details>



## 🚀Functions <a name="ERC20--Functions"></a>
<dl>
<dt> <h3> totalSupply() <a name="ERC20--function--totalSupply()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  total  | `uint256` |



</dd>
<dt> <h3> balanceOf(address) <a name="ERC20--function--balanceOf(address)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  balance  | `uint256` |



</dd>
<dt> <h3> allowance(address,address) <a name="ERC20--function--allowance(address,address)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  remaining  | `uint256` |



</dd>
<dt> <h3> name() <a name="ERC20--function--name()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  tokenName  | `string` |



</dd>
<dt> <h3> symbol() <a name="ERC20--function--symbol()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  tokenSymbol  | `string` |



</dd>
<dt> <h3> decimals() <a name="ERC20--function--decimals()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  tokenDecimals  | `uint8` |



</dd>
<dt> <h3> transfer(address,uint256) <a name="ERC20--function--transfer(address,uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> transferFrom(address,address,uint256) <a name="ERC20--function--transferFrom(address,address,uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> approve(address,uint256) <a name="ERC20--function--approve(address,uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
</dl>
