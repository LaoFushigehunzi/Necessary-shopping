<template>
	<view>
		<uni-nav-bar title="搜索" left-icon="back" statusBar="true" fixed="true" @clickLeft="comeback"></uni-nav-bar>
		搜索
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
