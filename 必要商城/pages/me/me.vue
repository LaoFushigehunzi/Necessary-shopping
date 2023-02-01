<template>
	<view>
<<<<<<< HEAD
		<view class="head">
			<view class="left">
				<img class="image" src="../../static/me/head/biyao.png" alt="" mode="widthFix" >
			</view>
			<view class="right">
				<view class="usermes">
					<view class="tel">
						111111111111
					</view>
					<view style="font-size:32rpx;margin-top: 10rpx;">
						我的主页<uni-icons type="forward" size="15" style="margin-left: 4rpx;"></uni-icons>
					</view>
				</view>
				<view class="tb">
					<view class="xx">
						<uni-icons type="chatbubble" size="30"></uni-icons>
					</view>
					<view class="sz">
						<uni-icons type="gear" size="30" ></uni-icons>
					</view>
					
				</view>
			</view>
		</view>
		<view class="progess">
			
		</view>
		<view class="banner">
			
		</view>
		<view class="tubiao">
			
		</view>
		<view class="cj">
			
		</view>
=======
		我的
		<button @click="toMyProfile">去myProfile</button>
		<button @click="toSetting">去设置</button>
>>>>>>> master
	</view>
</template>

<script>
	export default {
		data() {
<<<<<<< HEAD
			return {

			};
		},
		methods: {
			
=======
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
>>>>>>> master
		}
	}
</script>

<<<<<<< HEAD
<style lang="less">
	
.head{
	display: flex;
	height: 200rpx;
	color: aliceblue;
	background-color: #784cfa;
	.left{
		flex: 1;
		display: flex;
		position: relative;
		// background-color: aqua;
		.image{
			top: 50rpx;
			left: 30rpx;
			position: absolute;
			max-width: 120rpx;
		}
	}
	.right{
		flex: 4;
		height: 200rpx;
		position: relative;
		// background-color: aquamarine;
		.usermes{
			    margin-top: 60rpx;
			    margin-left: 20rpx;
		}
		.tb{
			top: 20rpx;
			right:40rpx;
			position: absolute;
			.xx,.sz{
				display: inline-block;
			}
			.sz{
				margin-left: 20rpx;
			}
		}
		
	}
}

=======
<style lang="less" scoped>
>>>>>>> master
</style>
