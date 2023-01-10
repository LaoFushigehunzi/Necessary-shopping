<template>
	<view>
		<view class="root">
			<view v-for="(item,index) in title" :key="index" class="titleItem" @click="changeTo" :id="index"
				:style="current==index?'color:red;border-bottom:1px red solid;':''">
				{{item}}
			</view>
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
			changeTo(e) {
				this.current = e.currentTarget.id;
			}
		}
	}
</script>

<style lang="less">
	.root {
		display: flex;
		background-color: white;
		height: 217.3913rpx;
		width: 100%;
		justify-content: space-around;
		align-items: center;

		.titleItem {
			display: inline-block;
		}

	}

	.chooseItem {
		width: 100%;
		height: 181.1594rpx;
	}
</style>
