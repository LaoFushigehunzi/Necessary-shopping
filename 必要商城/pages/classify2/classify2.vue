<template>
	<view>
		<uni-nav-bar   title="" left-icon="back" statusBar="true" fixed="true" @clickLeft="comeback"></uni-nav-bar>
			<!-- <view>
				<scroll-view class="scroll-view_H" v-for="item in three_data" :key="item.three_id" scroll-x="true" @scroll="scroll" scroll-left="20">
					<view id="demo1" class="scroll-view-item_H uni-bg-red">{{item.name}}</view>
				</scroll-view>
			</view> -->
			<view>
				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
					<view id="demo1" class="scroll-view-item_H uni-bg-red">风扇</view>
					<view id="demo2" class="scroll-view-item_H uni-bg-green">清洁吸尘</view>
					<view id="demo3" class="scroll-view-item_H uni-bg-blue">加湿净化</view>
					<view id="demo5" class="scroll-view-item_H uni-bg-red">风扇</view>
					<view id="demo6" class="scroll-view-item_H uni-bg-green">清洁吸尘</view>
					<view id="demo7" class="scroll-view-item_H uni-bg-blue">加湿净化</view>
					<view id="demo8" class="scroll-view-item_H uni-bg-red">风扇</view>
					<view id="demo9" class="scroll-view-item_H uni-bg-green">清洁吸尘</view>
					<view id="demo10" class="scroll-view-item_H uni-bg-blue">加湿净化</view>
				</scroll-view>
			</view>
	</view>
</template>

<script>
	import {axiosGet} from'@/utils/http.js'
	export default {
		//响应性属性
		data() {
			return {
				one_id:334,
				three_id:561,
				three:'',
				twoname:[],
				threename:[],
				three_data:[],
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
				
			}
		},
		created(){
			this.getTwoname(),
			this.getThreename()
		},
		onLoad() {},
		methods: {
			comeback() {
				uni.switchTab({
					url: '../index/index'
				})
			},
			async getTwoname(){
				let result=await axiosGet("/api/two");
				if(+result.code===200){
					this.twoname=result.data;
					console.log(this.twoname)
				}
			},
			async getThreename(){
				let one_id =this.one_id;
				let two_id=this.two_id;
				let three_id =this.three_id;
				let result1=await axiosGet("/api/one");
				let result3=await axiosGet("/api/three");
				let one_item=result1.data.find(item=>item.one_id==one_id)
				let three_item=result3.data.find(item=>item.three_id==three_id)
				let three_data=result3.data.filter((item)=>{return item.two_id==three_item.two_id})
				
				this.three_data=three_data
				console.log(three_item)
				console.log(three_data)
				// if(+result.code===200){
				// 	console.log(result)
				// 	this.threename=result.data;
				// 	console.log(this.threename)
				// }
			},
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: "纵向滚动 scrollTop 值已被修改为 0"
				})
			}
			
		},
		
		 
		
	}
</script>

<style>
	.scroll-Y {
		height: 20rpx;
	}
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
		display: flex;
	}
	.scroll-view-item {
		height: 300rpx;
		width: 25%;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}
	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 20rpx;
		line-height: 20rpx;
		text-align: center;
		font-size: 14rpx;
	}
</style>
