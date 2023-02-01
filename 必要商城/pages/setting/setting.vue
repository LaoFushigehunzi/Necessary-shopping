<template>
	<view>
		<uni-nav-bar title="设置" left-icon="back" statusBar="true" fixed="true" @clickLeft="comeBack"></uni-nav-bar>
		<view class="bg">
			<uni-list>
				<uni-list-item title="地址管理" showArrow rightText="去设置"></uni-list-item>
				<uni-list-item title="朋友设置" showArrow></uni-list-item>
				<uni-list-item title="WIFI下自动播放视频" :show-switch="true" switchChecked>
					<template v-slot:footer>
						<switch checked color="#784DFA" />
					</template>
				</uni-list-item>
				<uni-list-item title="关于我们" showArrow></uni-list-item>
			</uni-list>
		</view>


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
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.bg {
		margin-top: 14.4928rpx;
		background-color: white;
		padding: 14.4928rpx 28.9855rpx 0;

		/deep/ .uni-list--border-top {
			height: 0 !important;
		}

		/deep/ .uni-list-item__content-title {
			font-size: 16px !important;
		}

		/deep/ .uni-list-item__extra-text {
			font-size: 14px !important;
			color: black !important;
		}

		/deep/.uni-list-item__container {
			padding: 32.6087rpx 0;
		}

		/deep/.uni-icon-wrapper {
			padding: 0;
		}
	}
</style>
