<template>
	<view class="order">
		<uni-nav-bar   title="全部订单" left-icon="back" statusBar="true" fixed="true" @clickLeft="comeback"></uni-nav-bar>
		<view class="root">
			<view v-for="(item,index) in title" :key="index" class="titleItem" @click="changeTo" :id="index"
				:style="current==index?'color: #784cfa;':''">
				{{item}}
			</view>
		</view>
		<view class="box box2 box3 box4 box5">
		</view>
		<view class="chooseItem" v-if="current==0">
			全部
			
		</view>
		<view class="chooseItem" v-if="current==1">
			待付款
		</view>
		<view class="chooseItem" v-if="current==2">
			待成团
		</view>
		<view class="chooseItem" v-if="current==3">
			待成团
		</view>
		<view class="chooseItem" v-if="current==4">
			待成团
		</view>
		<OrderComponent></OrderComponent>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num: '',
				title: ['全部', '待付款', '待成团', '生产/待收货', '待评价'],
				current: 0,
			};
		},
		methods: {
			comeback() {
				uni.switchTab({
					url: '../index/index'
				})
			},
			changeTo(e) {
				this.current = e.currentTarget.id;
			}
		}
	}
</script>

<style lang="less">
	.order{
		position: relative;
	}
	.root {
		display: flex;
		background-color: white;
		position: relative;
		height: 100rpx;
		width: 100%;
		justify-content: space-around;
		align-items: center;
		.titleItem {
			display: inline-block;
		}
		
	}
	.box,.box2,.box3,.box4,.box5
	{
		top: 210rpx;
		width:20rpx;
		height:20rpx;
		position: absolute;
		// display: none;
		border-bottom: 4rpx solid #784cfa;
	}
	.box{
		left: 40rpx
	}
	
	.box2{
		left: 90rpx
	}
	.box3{
		left: 40rpx
	}
	.box4{
		left: 40rpx
	}
	.box5{
		left: 40rpx
	}
	.chooseItem {
		width: 100%;
		height: 181.1594rpx;
	}
</style>
