# <span id="Freezable"></span> Freezable
> 





## Contents


- [Events](#Freezable--Events)


  - [Freeze](#Freezable--event--Freeze)


  - [OwnershipTransferred](#Freezable--event--OwnershipTransferred)


  - [Unfreeze](#Freezable--event--Unfreeze)



- [Functions](#Freezable--Functions)


  - [owner()](#Freezable--function--owner())


  - [renounceOwnership()](#Freezable--function--renounceOwnership())


  - [transferOwnership(address)](#Freezable--function--transferOwnership(address))


  - [freeze(address)](#Freezable--function--freeze(address))


  - [unFreeze(address)](#Freezable--function--unFreeze(address))


  - [isFrozen(address)](#Freezable--function--isFrozen(address))



## 🦄Events <a name="Freezable--Events"></a>


<details><summary><strong>Freeze <a name="Freezable--event--Freeze"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| target | `true` | `address` |

</p>

</details>


<details><summary><strong>OwnershipTransferred <a name="Freezable--event--OwnershipTransferred"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| currentOwner | `true` | `address` |
| newOwner | `true` | `address` |

</p>

</details>


<details><summary><strong>Unfreeze <a name="Freezable--event--Unfreeze"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| target | `true` | `address` |

</p>

</details>



## 🚀Functions <a name="Freezable--Functions"></a>
<dl>
<dt> <h3> owner() <a name="Freezable--function--owner()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  ownerAddress  | `address` |



</dd>
<dt> <h3> renounceOwnership() <a name="Freezable--function--renounceOwnership()"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> transferOwnership(address) <a name="Freezable--function--transferOwnership(address)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> freeze(address) <a name="Freezable--function--freeze(address)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> unFreeze(address) <a name="Freezable--function--unFreeze(address)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> isFrozen(address) <a name="Freezable--function--isFrozen(address)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  frozen  | `bool` |



</dd>
</dl>
