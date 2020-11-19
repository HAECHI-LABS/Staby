# <span id="Ownable"></span> Ownable
> 





## Contents


- [Events](#Ownable--Events)


  - [OwnershipTransferred](#Ownable--event--OwnershipTransferred)



- [Functions](#Ownable--Functions)


  - [owner()](#Ownable--function--owner())


  - [transferOwnership(address)](#Ownable--function--transferOwnership(address))


  - [renounceOwnership()](#Ownable--function--renounceOwnership())



## 🦄Events <a name="Ownable--Events"></a>


<details><summary><strong>OwnershipTransferred <a name="Ownable--event--OwnershipTransferred"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| currentOwner | `true` | `address` |
| newOwner | `true` | `address` |

</p>

</details>



## 🚀Functions <a name="Ownable--Functions"></a>
<dl>
<dt> <h3> owner() <a name="Ownable--function--owner()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  ownerAddress  | `address` |



</dd>
<dt> <h3> transferOwnership(address) <a name="Ownable--function--transferOwnership(address)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> renounceOwnership() <a name="Ownable--function--renounceOwnership()"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
</dl>
