<template>
	<view class="root">
		搜索
		<input type="text" placeholder="请输入要搜索的商品">
	</view>
</template>

<script>
	export default {
		name: "Search",
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">
	.root {
		width: 90%;
		// background-color: #F4F4F4;
		display: flex;
		background-color: red;
		margin: auto;
		height: 80rpx;
		border-radius: 40rpx;
		padding: 0 40rpx;

		input {}
	}
</style>
