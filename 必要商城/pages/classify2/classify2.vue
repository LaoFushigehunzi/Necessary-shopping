<template>
	<view>
		<uni-nav-bar title="一级目录名称" left-icon="back" statusBar="true" fixed="true" @clickLeft="comeBack"></uni-nav-bar>
		分类2
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
