<template>
	<view>
		<Search></Search>
		<view class="tabbar">
			<scroll-view class="scroll-view" scroll-x="true" scroll-y="false" enable-flex>
				<view class="scroll-view-item">热门</view>
				<view class="scroll-view-item" v-for="item in data">{{item.name}}</view>
			</scroll-view>
			<view class="iconDown" @click="pullDown">

			</view>
		</view>
	</view>
</template>

<script>
	import {
		axiosGet
	} from '@/common/js/http.js'
	import {
		url
	} from 'inspector';
	export default {
		data() {
			return {
				data: []
			};
		},
		created() {
			this.getData()
		},
		methods: {
			async getData() {
				let result = await axiosGet('/api/one');
				if (result.code == 200) {
					this.data = result.data
				}
			},

		}
	}
</script>

<style lang="less">
	.tabbar {
		width: 100%;
		display: flex;

		.scroll-view {
			font-size: 15px;
			white-space: nowrap;
			background-color: white;
			height: 100rpx;
			line-height: 100rpx;
			display: flex;
			align-items: center;
			width: 90%;

			.scroll-view-item {
				margin-right: 60rpx;
				display: inline-block;

				&:first-child {
					margin-left: 30rpx;
				}

				.hover {
					color: #7F4395;
					border-bottom: #7F4395;
				}
			}
		}

		.iconDown {
			width: 10%;
			background: url('@/static/image/down2.png') white no-repeat;
			background-position-y: 33rpx;
		}
	}
</style>
