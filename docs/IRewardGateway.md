# <span id="IRewardGateway"></span> IRewardGateway
> 





## Contents


- [Events](#IRewardGateway--Events)


  - [Payment](#IRewardGateway--event--Payment)


  - [Exit](#IRewardGateway--event--Exit)



- [Functions](#IRewardGateway--Functions)


  - [pay(uint256,uint256)](#IRewardGateway--function--pay(uint256,uint256))


  - [exit(address)](#IRewardGateway--function--exit(address))


  - [paymentsHistoryLength(uint256)](#IRewardGateway--function--paymentsHistoryLength(uint256))


  - [paymentsHistory(uint256,uint256)](#IRewardGateway--function--paymentsHistory(uint256,uint256))


  - [exitHistoryLength(address)](#IRewardGateway--function--exitalHistoryLength(address))


  - [exitalHistory(address)](#IRewardGateway--function--exitalHistory(address))


  - [getRewards(address)](#IRewardGateway--function--getRewards(address))



## 🦄Events <a name="IRewardGateway--Events"></a>


<details><summary><strong>Payment <a name="IRewardEscrow--event--Payment"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| contentId | `true` | `uint256` |
| amount | `false` | `uint256` |

</p>

</details>

<details><summary><strong>Exit <a name="IRewardEscrow--event--Exit"></a></strong></summary>
<p>


| Name | Indexed | Type |
|:-:|:-:|:-:|
| withdrawer | `false` | `address` |

</p>

</details>



## 🚀Functions <a name="IRewardGateway--Functions"></a>
<dl>
<dt> <h3> pay(uint256,uint256) <a name="IRewardEscrow--function--pay(uint256,uint256)"></a> </h3> </dt>
<dd>

>홀더에게 수익 배분

 👀 `nonpayable`

#### ⚙️ Parameters

| Name | Type | Description |
|:-:|:-:| - |
| _contentId | `uint256` | 수익을 배분할 컨텐츠의 ID |
| _amount | `uint256` | ID에 해당하는 컨텐츠에서 발생한 총 수익 |



</dd>
<dt> <h3> exit(address) <a name="IRewardGateway--function--exit(address)"></a> </h3> </dt>
<dd>

>사용자의 토큰 출금

 👀 `nonpayable`

#### ⚙️ Parameters

| Name | Type | Description |
|:-:|:-:| - |
| _withdrawer | `address` | 토큰을 출금하는 사용자의 주소 |



</dd>
<dt> <h3> paymentsHistoryLength(uint256) <a name="IRewardGateway--function--paymentsHistoryLength(uint256)"></a> </h3> </dt>
<dd>

>컨텐츠 ID에 해당하는 컨텐츠의 수익배분 기록의 길이 불러옴

 👀 `view`

#### ⚙️ Parameters

| Name | Type | Description |
|:-:|:-:| - |
| _contentId | `uint256` | 기록 불러올 컨텐츠의 ID |


#### → Returns
| Name | Type | Description |
|:-:|:-:|---|
|  length  | `uint256` | 컨텐츠 ID에 해당하는 컨텐츠의 수익배분 기록의 길이 |

</dd>
<dt> <h3> paymentsHistory(uint256,uint256) <a name="IRewardGateway--function--paymentsHistory(uint256,uint256)"></a> </h3> </dt>
<dd>

>컨텐츠 ID와 index에 해당하는 컨텐츠의 수익배분 기록 불러옴

 👀 `view`

#### ⚙️ Parameters

| Name | Type | Description |
|:-:|:-:| - |
| _contentId | `uint256` | 기록 불러올 컨텐츠의 ID |


#### → Returns
| Name | Type | Description |
|:-:|:-:|---|
|  hitory  | `uint256` | 컨텐츠 ID와 index에 해당하는 컨텐츠의 수익배분 기록 |

</dd>
<dt> <h3> exitHistoryLength(address) <a name="IRewardGateway--function--exitalHistoryLength(address)"></a> </h3> </dt>
<dd>

>사용자의 주소에 해당하는 토큰 출금 기록의 길이 불러옴

 👀 `view`

#### ⚙️ Parameters

| Name | Type | Description |
|:-:|:-:| - |
| _withdrawer | `address` | 기록의 길이를 불러올 사용자의 주소 |


#### → Returns
| Name | Type | Description |
|:-:|:-:|---|
|  length  | `uint256` | 사용자의 주소에 해당하는 토큰 출금 기록의 길이 |

</dd>
<dt> <h3> exitHistory(address) <a name="IRewardGateway--function--exitHistory(address)"></a> </h3> </dt>
<dd>

>사용자의 주소와 index에 해당하는 토큰 출금 기록 불러옴

 👀 `view`

#### ⚙️ Parameters

| Name | Type | Description |
|:-:|:-:| - |
| _withdrawer | `address` | 기록 불러올 사용자의 주소 |
| _idx | `uint256` | 기록 index |


#### → Returns
| Name | Type | Description |
|:-:|:-:|---|
|  histories  | `uint256[]` | 사용자의 주소와 index에 해당하는 토큰 출금 기록 |

</dd>
<dt> <h3> getRewards(address) <a name="IRewardGateway--function--getRewards(address)"></a> </h3> </dt>
<dd>

>홀더가 받을 수익 불러옴

 👀 `view`

#### ⚙️ Parameters

| Name | Type | Description |
|:-:|:-:| - |
| _holder | `address` | 수익을 배분받을 홀더의 주소 |


#### → Returns
| Name | Type | Description |
|:-:|:-:|---|
|  reward  | `uint256` | 홀더가 받을 수익 |

</dd>
</dl>
