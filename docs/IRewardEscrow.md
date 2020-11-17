# <span id="IRewardEscrow"></span> IRewardEscrow
> 





## Contents


- [Events](#IRewardEscrow--Events)


  - [Payment](#IRewardEscrow--event--Payment)


  - [Withdraw](#IRewardEscrow--event--Withdraw)



- [Functions](#IRewardEscrow--Functions)


  - [pay(uint256,uint256)](#IRewardEscrow--function--pay(uint256,uint256))


  - [withdraw(address)](#IRewardEscrow--function--withdraw(address))


  - [paymentsHistoryLength(uint256)](#IRewardEscrow--function--paymentsHistoryLength(uint256))


  - [paymentsHistory(uint256,uint256)](#IRewardEscrow--function--paymentsHistory(uint256,uint256))


  - [withdrawalHistoryLength(address)](#IRewardEscrow--function--withdrawalHistoryLength(address))


  - [withdrawalHistory(address)](#IRewardEscrow--function--withdrawalHistory(address))


  - [getRewards(address)](#IRewardEscrow--function--getRewards(address))



## 🦄Events <a name="IRewardEscrow--Events"></a>


<details><summary><strong>Payment <a name="IRewardEscrow--event--Payment"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| contentId | `true` | `uint256` |
| amount | `false` | `uint256` |

</p>

</details>


<details><summary><strong>Withdraw <a name="IRewardEscrow--event--Withdraw"></a></strong></summary>
<p>

| Name | Indexed | Type |
|:-:|:-:|:-:|
| withdrawer | `false` | `address` |

</p>

</details>



## 🚀Functions <a name="IRewardEscrow--Functions"></a>
<dl>
<dt> <h3> pay(uint256,uint256) <a name="IRewardEscrow--function--pay(uint256,uint256)"></a> </h3> </dt>
<dd>

>홀더에게 수익 배분

🔨`@param _contentId 수익을 배분할 컨텐츠의 ID` |  👀 `nonpayable`

#### ⚙️ Parameters

| Name | Type | Description |
|:-:|:-:| - |
| _contentId | `uint256` | undefined |
| _amount | `uint256` | ID에 해당하는 컨텐츠에서 발생한 총 수익 |



</dd>
<dt> <h3> withdraw(address) <a name="IRewardEscrow--function--withdraw(address)"></a> </h3> </dt>
<dd>

>사용자의 토큰 출금

🔨`@param _withdrawer 토큰을 출금하는 사용자의 주소` |  👀 `nonpayable`


</dd>
<dt> <h3> paymentsHistoryLength(uint256) <a name="IRewardEscrow--function--paymentsHistoryLength(uint256)"></a> </h3> </dt>
<dd>

>컨텐츠 ID에 해당하는 컨텐츠의 수익배분 기록의 길이 불러옴

🔨`@param _contentId 기록 불러올 컨텐츠의 ID` |  👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  Not specified  | `uint256` |

_paymentsHistory[_contentId].length : 컨텐츼 ID에 해당하는 컨텐츠의 수익배분 기록의 길이

</dd>
<dt> <h3> paymentsHistory(uint256,uint256) <a name="IRewardEscrow--function--paymentsHistory(uint256,uint256)"></a> </h3> </dt>
<dd>

>컨텐츠 ID와 index에 해당하는 컨텐츠의 수익배분 기록 불러옴

🔨`@param _contentId 기록 불러올 컨텐츠의 ID` |  👀 `view`

#### ⚙️ Parameters

| Name | Type | Description |
|:-:|:-:| - |
| _contentId | `uint256` | undefined |


#### → Returns
| Name | Type |
|:-:|:-:|
|  Not specified  | `uint256` |

_paymentsHistory[_contentId][_idx] : 컨텐츼 ID와 index에 해당하는 컨텐츠의 수익배분 기록

</dd>
<dt> <h3> withdrawalHistoryLength(address) <a name="IRewardEscrow--function--withdrawalHistoryLength(address)"></a> </h3> </dt>
<dd>

>사용자의 주소에 해당하는 토큰 출금 기록의 길이 불러옴

🔨`@param _withdrawer 기록의 길이를 불러올 사용자의 주소` |  👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  Not specified  | `uint256` |

_withdrawalHistory[_withdrawer].length : 사용자의 주소에 해당하는 토큰 출금 기록의 길이

</dd>
<dt> <h3> withdrawalHistory(address) <a name="IRewardEscrow--function--withdrawalHistory(address)"></a> </h3> </dt>
<dd>

>사용자의 주소와 index에 해당하는 토큰 출금 기록 불러옴

🔨`@param _withdrawer 기록 불러올 사용자의 주소` |  👀 `view`

#### ⚙️ Parameters

| Name | Type | Description |
|:-:|:-:| - |
| _withdrawer | `address` | undefined |
| _idx | `uint256` | 기록 index |


#### → Returns
| Name | Type |
|:-:|:-:|
|  Not specified  | `uint256[]` |

_withdrawalHistory[_withdrawer][_idx] : 사용자의 주소와 index에 해당하는 토큰 출금 기록

</dd>
<dt> <h3> getRewards(address) <a name="IRewardEscrow--function--getRewards(address)"></a> </h3> </dt>
<dd>

>홀더가 받을 수익 불러옴

🔨`@param _holder 수익을 배분받을 홀더의 주소` |  👀 `view`

#### → Returns
| Name | Type |
|:-:|:-:|
|  Not specified  | `uint256` |

_rewrads[_holder] : 홀더가 받을 수익

</dd>
</dl>
