<template>
	<view class="root" @click="goSearch">
		<view class="content">
			<span class="iconfont">&#xe752;</span>
			<input type="text" placeholder="请输入要搜索的商品" placeholder-style="font-size:14px;color:#BBBBBB;"
				style="marginLeft:16rpx;">
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
		font-size: 14px;
		font-style: normal;
		color: #bbbbbb;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.root {

		background-color: #ffffff;
		display: flex;
		justify-content: center;
		align-items: center;

		.content {
			width: 710.1449rpx;
			height: 63.4058rpx;
			padding-left: 34rpx;
			background-color: #F4F4F4;
			display: flex;
			align-items: center;
			border-radius: 31.7029rpx;
		}
	}
</style>
