# <span id="RewardEscrow"></span> RewardEscrow
> 





## Contents


- [Events](#RewardEscrow--Events)


  - [Payment](#RewardEscrow--event--Payment)


  - [Exit](#RewardEscrow--event--Exit)



- [Functions](#RewardEscrow--Functions)


  - [pay(uint256,uint256)](#RewardEscrow--function--pay(uint256,uint256))


  - [exit(address)](#RewardEscrow--function--exit(address))


  - [getRewards(address)](#RewardEscrow--function--getRewards(address))


  - [paymentsHistoryLength(uint256)](#RewardEscrow--function--paymentsHistoryLength(uint256))


  - [paymentsHistory(uint256,uint256)](#RewardEscrow--function--paymentsHistory(uint256,uint256))


  - [exitHistoryLength(address)](#RewardEscrow--function--exitHistoryLength(address))


  - [exitHistory(address)](#RewardEscrow--function--exitHistory(address))



## 🦄Events <a name="RewardEscrow--Events"></a>


<details><summary><strong>Payment <a name="RewardEscrow--event--Payment"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| contentId | `true` | `uint256` |
| amount | `false` | `uint256` |

</p>

</details>

<details><summary><strong>Exit <a name="RewardEscrow--event--Exit"></a></strong></summary>
<p>


| Name | Indexed | Type |
|:-:|:-:|:-:|
| withdrawer | `false` | `address` |

</p>

</details>



## 🚀Functions <a name="RewardEscrow--Functions"></a>
<dl>
<dt> <h3> pay(uint256,uint256) <a name="RewardEscrow--function--pay(uint256,uint256)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`


</dd>
<dt> <h3> exit(address) <a name="RewardEscrow--function--exit(address)"></a> </h3> </dt>
<dd>

 👀 `nonpayable`


</dd>
<dt> <h3> getRewards(address) <a name="RewardEscrow--function--getRewards(address)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  balance  | `uint256` |



</dd>
<dt> <h3> paymentsHistoryLength(uint256) <a name="RewardEscrow--function--paymentsHistoryLength(uint256)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  Not specified  | `uint256` |



</dd>
<dt> <h3> paymentsHistory(uint256,uint256) <a name="RewardEscrow--function--paymentsHistory(uint256,uint256)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  Not specified  | `uint256` |



</dd>
<dt> <h3> exitHistoryLength(address) <a name="RewardEscrow--function--exitHistoryLength(address)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  Not specified  | `uint256` |



</dd>
<dt> <h3> exitHistory(address) <a name="RewardEscrow--function--exitHistory(address)"></a> </h3> </dt>
<dd>

 👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  Not specified  | `uint256[]` |



</dd>
</dl>
