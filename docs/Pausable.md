# <span id="Pausable"></span> Pausable
> 





## Contents


- [Events](#Pausable--Events)


  - [OwnershipTransferred](#Pausable--event--OwnershipTransferred)


  - [Paused](#Pausable--event--Paused)


  - [Unpaused](#Pausable--event--Unpaused)



- [Functions](#Pausable--Functions)


  - [owner()](#Pausable--function--owner())


  - [renounceOwnership()](#Pausable--function--renounceOwnership())


  - [transferOwnership(address)](#Pausable--function--transferOwnership(address))


  - [pause()](#Pausable--function--pause())


  - [unPause()](#Pausable--function--unPause())


  - [paused()](#Pausable--function--paused())



## 🦄Events <a name="Pausable--Events"></a>


<details><summary><strong>OwnershipTransferred <a name="Pausable--event--OwnershipTransferred"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| currentOwner | `true` | `address` |
| newOwner | `true` | `address` |

</p>

</details>


<details><summary><strong>Paused <a name="Pausable--event--Paused"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|

</p>

</details>


<details><summary><strong>Unpaused <a name="Pausable--event--Unpaused"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|

</p>

</details>



## 🚀Functions <a name="Pausable--Functions"></a>
<dl>
<dt> <h3> owner() <a name="Pausable--function--owner()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  ownerAddress  | `address` |



</dd>
<dt> <h3> renounceOwnership() <a name="Pausable--function--renounceOwnership()"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> transferOwnership(address) <a name="Pausable--function--transferOwnership(address)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> pause() <a name="Pausable--function--pause()"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> unPause() <a name="Pausable--function--unPause()"></a> </h3> </dt>
<dd>

 👀 `nonpayable`

#### → Returns
| Name | Type |
|:-:|:-:|
|  success  | `bool` |



</dd>
<dt> <h3> paused() <a name="Pausable--function--paused()"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  Not specified  | `bool` |



</dd>
</dl>
