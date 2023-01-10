<template>
	<view>
		<uni-nav-bar left-icon="back" statusBar="true" fixed="true" @clickLeft="comeBack"></uni-nav-bar>
		我的个人信息
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
