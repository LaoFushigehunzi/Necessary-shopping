<template>
	<view>
		我的
		<button @click="toMyProfile">去myProfile</button>
		<button @click="toSetting">去设置</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			toMyProfile() {
				uni.navigateTo({
					url: '../myProfile/myProfile'
				})
			},
			toSetting() {
				uni.navigateTo({
					url: '../setting/setting'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
</style>
