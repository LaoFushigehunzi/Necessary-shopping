<template>
	<view>
		<uni-nav-bar title="导航栏组件" left-icon="back" statusBar="true" fixed="true" @clickLeft="comeback"></uni-nav-bar>
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
			comeback() {
				uni.switchTab({
					url: '../index/index'
				})
			}
		}
	}
</script>

<style>

</style>
