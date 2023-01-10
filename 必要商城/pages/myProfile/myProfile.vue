<template>
	<uni-nav-bar left-icon="back" statusBar="true" fixed="true" @clickLeft="comeback"></uni-nav-bar>
	<view class="myProfile">
		<view class="top">
			<view class="image">
				<img  src="../../static/image/必要.png" alt=""  mode="widthFix">
			</view>
			<view class="number">
				183****9780
			</view>
			<view class="box">
				<view class="hy">
					好友0
				</view>
				<text style="text-align: center;">|</text>
				<view class="gz">
					关注0
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="msg">
				
			</view>
			<view class="tu">
				
			</view>
		</view>
	</view>
</template>

<script>
	import {axiosGet} from'@/utils/http.js'
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
			},
			onload() {
				
			}
		}
	}
</script>

<style>
	.myProfile{
		display: flex;
		
	}
	.top{
		flex: 1;
		height: 300rpx;
		background-color: #784cfa;
	}
	image{
		display: block;
		margin: 0 auto;
		width:50px;
		margin-top: 10px;
		margin-bottom: 5px;
	}
	.number{
		text-align: center;
		color: #ffffff;
	}
	.box{
		width: 150px;
		height: 50px;
		margin: 0 auto;
		background-color: aqua;
		position:relative;	
		display:flex;
		display:column;
		font-size:12px;
	}
	.hy,.gz{
		justify-content:center
	}
</style>
