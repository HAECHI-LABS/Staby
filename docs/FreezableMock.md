# <span id="FreezableMock"></span> FreezableMock
> 





## Contents


- [Events](#FreezableMock--Events)


  - [Freeze](#FreezableMock--event--Freeze)


  - [OwnershipTransferred](#FreezableMock--event--OwnershipTransferred)


  - [Unfreeze](#FreezableMock--event--Unfreeze)



- [Functions](#FreezableMock--Functions)


  - [freeze(address)](#FreezableMock--function--freeze(address))


  - [isFrozen(address)](#FreezableMock--function--isFrozen(address))


  - [owner()](#FreezableMock--function--owner())


  - [renounceOwnership()](#FreezableMock--function--renounceOwnership())


  - [transferOwnership(address)](#FreezableMock--function--transferOwnership(address))


  - [unFreeze(address)](#FreezableMock--function--unFreeze(address))


  - [whenNotFrozenMock(address)](#FreezableMock--function--whenNotFrozenMock(address))



## 🦄Events <a name="FreezableMock--Events"></a>


<details><summary><strong>Freeze <a name="FreezableMock--event--Freeze"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| target | `true` | `address` |

</p>

</details>


<details><summary><strong>OwnershipTransferred <a name="FreezableMock--event--OwnershipTransferred"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| currentOwner | `true` | `address` |
| newOwner | `true` | `address` |

</p>

</details>


<details><summary><strong>Unfreeze <a name="FreezableMock--event--Unfreeze"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| target | `true` | `address` |

</p>

</details>



## 🚀Functions <a name="FreezableMock--Functions"></a>
<dl>
<dt> <h3> freeze(address) <a name="FreezableMock--function--freeze(address)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> isFrozen(address) <a name="FreezableMock--function--isFrozen(address)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  frozen  | `bool` |



</dd>
<dt> <h3> owner() <a name="FreezableMock--function--owner()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  ownerAddress  | `address` |



</dd>
<dt> <h3> renounceOwnership() <a name="FreezableMock--function--renounceOwnership()"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> transferOwnership(address) <a name="FreezableMock--function--transferOwnership(address)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> unFreeze(address) <a name="FreezableMock--function--unFreeze(address)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> whenNotFrozenMock(address) <a name="FreezableMock--function--whenNotFrozenMock(address)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`


</dd>
</dl>
