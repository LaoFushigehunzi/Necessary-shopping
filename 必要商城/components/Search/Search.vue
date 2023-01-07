<template>
	<view class="root" @click="goSearch">
		<view class="content">
			<span class="iconfont">&#xe752;</span>
			<input type="text" placeholder="请输入要搜索的商品" :style="{'marginLeft':'10rpx'}">
		</view>
	</view>
</template>

<script>
	export default {
		name: "Search",
		data() {
			return {

			};
		},
		methods: {
			goSearch() {
				uni.navigateTo({
					url: '../search/search'
				})
			}
		}
	}
</script>

<style lang="less">
	@font-face {
		font-family: 'iconfont';
		src: url('@/static/iconfont/iconfont.ttf') format('truetype');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 20px;
		font-style: normal;
		color: #bbbbbb;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.root {
		background-color: #ffffff;
		width: 100%;
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;

		.content {
			width: 90%;
			height: 70rpx;
			padding-left: 34rpx;
			background-color: #F4F4F4;
			display: flex;
			align-items: center;
			border-radius: 40rpx;
		}
	}
</style>
