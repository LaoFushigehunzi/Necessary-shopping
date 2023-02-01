<template>
	<view>
		<uni-nav-bar title="商品名称" left-icon="back" statusBar="true" fixed="true" @clickLeft="comeBack"></uni-nav-bar>
		商品页面
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			comeBack() {
				uni.switchTab({
					url: '../index/index'
				})
			}
		}
	}
</script>

<style>

</style>
