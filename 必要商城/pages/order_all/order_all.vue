<template>
	<view>
		<uni-nav-bar title="全部订单" left-icon="back" statusBar="true" fixed="true" @clickLeft="comeback"></uni-nav-bar>
		全部订单
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
