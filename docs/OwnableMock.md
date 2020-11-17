# <span id="OwnableMock"></span> OwnableMock
> 





## Contents


- [Events](#OwnableMock--Events)


  - [OwnershipTransferred](#OwnableMock--event--OwnershipTransferred)



- [Functions](#OwnableMock--Functions)


  - [owner()](#OwnableMock--function--owner())


  - [renounceOwnership()](#OwnableMock--function--renounceOwnership())


  - [transferOwnership(address)](#OwnableMock--function--transferOwnership(address))



## 🦄Events <a name="OwnableMock--Events"></a>


<details><summary><strong>OwnershipTransferred <a name="OwnableMock--event--OwnershipTransferred"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| currentOwner | `true` | `address` |
| newOwner | `true` | `address` |

</p>

</details>



## 🚀Functions <a name="OwnableMock--Functions"></a>
<dl>
<dt> <h3> owner() <a name="OwnableMock--function--owner()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  ownerAddress  | `address` |



</dd>
<dt> <h3> renounceOwnership() <a name="OwnableMock--function--renounceOwnership()"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> transferOwnership(address) <a name="OwnableMock--function--transferOwnership(address)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
</dl>
