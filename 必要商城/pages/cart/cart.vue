<template>
	<view>
		<view @click="goToMe">
			<uni-nav-bar leftText="订单满￥39, 可享超值换购特权" color="#E0941A" fixed leftWidth='400rpx'
				style="border-top: #F4F4F4 11px solid;">
				<template v-slot:right>
					<view class="navRight">
						去凑单
						<uni-icons type="right" size="14" color="white" />
					</view>
				</template>
			</uni-nav-bar>
		</view>
		<view class="content">
			<view v-if="cartDataStatus==0" class="statusIsNone">
				<view>
					<image :src="cartData" mode="widthFix" class="bgImg"></image>
				</view>
				<view>
					不剁手的日子还是很空虚的
				</view>
			</view>
		</view>
		<view class="adTitle">
			<text style="border-bottom:1px black solid ;">新手特权仅限首单</text>
		</view>
	</view>
	<Recommend></Recommend>
</template>

<script>
	import {
		axiosGet
	} from '@/common/js/http.js'
	export default {
		data() {
			return {
				cartDataStatus: 0, //购物车状态
				cartData: [], //'购物车数据'
			};
		},
		created() {
			this.getData();
		},
		methods: {
			async getData() {
				let data = await axiosGet('/api/cart');
				if (data.data.length != 0) {
					this.cartDataStatus = 1;
					this.cartData = data;
				} else {
					this.cartDataStatus = 0;
					this.cartData = '/static/cart/1.png';
				}
			},
			goToMe() {
				uni.redirectTo({
					url: '../me/me'
				})
			}

		}
	}
</script>

<style lang="less" scoped>
	.navRight {
		background-image: linear-gradient(to bottom right, #F4C77E, #E29A25);
		height: 39.8551rpx;
		border-radius: 19.9275rpx;
		width: 114.1304rpx;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 168.4783rpx;

		.statusIsNone {
			display: block;
			text-align: center;
			font-size: 14px;
			color: #666666;

			.bgImg {
				width: 108.6957rpx;
			}
		}
	}

	.adTitle {
		display: inline-block;
		height: 99.6377rpx;
		background-color: white;
		width: 100%;
		text-align: center;
		line-height: 99.6377rpx;
		color: #4A4A4A;
	}
</style>
