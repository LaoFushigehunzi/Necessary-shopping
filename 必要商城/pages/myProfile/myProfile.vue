<template>
	<view>
		<uni-nav-bar left-icon="back" statusBar="true" fixed="true" @clickLeft="comeBack"></uni-nav-bar>
		<view class="title">
			<view class="myInfo">
				<view>
					<image src="../../static/myProfile/1.png" mode="widthFix"
						style="width: 115.942rpx;border: 2px white solid;border-radius: 50%;"></image>
				</view>
				<view>183****9141</view>
				<view>好友 0 <span style="margin: 0 90.5797rpx;">|</span> 关注 0</view>
			</view>
			<view class="messageIcon">
				<uni-icons type="chat" color="white" size="25"></uni-icons>
			</view>
		</view>
		<view class="tag">
			<view>
				<uni-icons type="contact-filled" color="#F5D18E" size="30"></uni-icons>
			</view>
			<view class="ttext">
				<view style="color: #AE7426;">看看好友动态</view>
				<view style="color: #AE7426; border: #AE7426 1px solid;padding:3.6232rpx 18.1159rpx;">
					去看看
				</view>
			</view>

		</view>
		<view class="dynamic">
			<image src="/static/myProfile/4.png" mode="widthFix" style="" class="dynamicItem" />
			<view style="text-align: center;" class="dynamicItem">
				暂无动态
			</view>
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
	.title {
		width: 100%;
		height: 326.087rpx;
		background-color: #4E388F;
		position: relative;

		.myInfo {
			color: white;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-flow: column wrap;
			height: 100%;

			:first-child {
				display: inline-block;
				margin-bottom: 10rpx;
			}

			:nth-of-type(2) {
				font-size: 20px;
			}

			:last-child {
				margin-top: 20rpx;
				font-size: 14px;
			}
		}

		.messageIcon {
			position: absolute;
			top: 25rpx;
			right: 22rpx;
		}
	}

	.tag {
		height: 108.6957rpx;
		margin: 28.9855rpx 25.3623rpx;
		background-color: #F9F2E2;
		border-radius: 3.6232rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 0 7.2464rpx 0 18.1159rpx;

		.ttext {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			padding: 0 18.1159rpx;

		}
	}

	.dynamic {
		width: 100%;
		height: 100vh;
		background-color: #F7F7F7;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		.dynamicItem {
			position: relative;
			bottom: 199.2754rpx;
		}
	}
</style>
