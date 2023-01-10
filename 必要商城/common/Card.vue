<template>
	<view class="youlike">
		<view class="title">
			为你推荐
		</view>
		 <view class="goods_list">
		        <view class="goods_item" v-for="item in Goodlist" :key="item.goods_id">
		            <!-- <image :src="item.lunbo_sourc"></image> -->
		            <view class="price">
						￥<text>{{item.newPerson_p}}</text>		                
		            </view>
					<view class="pingtuan">
						一起拼
					</view>
					<view class="maker">
						{{item.maker}}
					</view>
		            <view class="name">{{item.name}}</view>
					<view class="favourC">
						{{item.favourableC}}+条好评
					</view>
		        </view>
		    </view>
	</view>
</template>

<script>
	import {axiosGet} from'@/utils/http.js'
	export default {
		data() {
			return {
				Goodlist:[]
			}
		},
		created() {
			this.getGoodlist()
		},
		methods: {
			comeback() {
				uni.switchTab({
					url: '../index/index'
				})
			},
			async getGoodlist(){
				let result=await axiosGet("/api/goods")
				if(+result.code==200){
					this.Goodlist=result.data;
					console.log(this.Goodlist)
				}
			}
		}
	}
</script>

<style>
	.youlike{
			background-color: #ffffff;
		}
		.title{
			font-size: 24rpx;
			text-align: center;
			text-decoration: underline;
			padding-top: 10px;
			padding-bottom: 10px;
		}
		.goods_list {
		    display: flex;
		    padding: 0 15rpx;
		    justify-content: space-between;
		    overflow: hidden;
		    flex-wrap: wrap;
		    .goods_item {
		      width: 355rpx;
		      margin-bottom: 15rpx;
		      background: #fff;
		      padding: 10px;
		      box-sizing: border-box;
		      image{
		        height: 150px;
		        width: 100%;
		        mix-width:160px;
		        margin: 10px auto;
		      }
		      .price{
		        font-size: 26rpx;
		        color: #ffa500;
		      }
			  .pingtuan{
				  display: inline-block;
				  font-size: 18rpx;
				  color: red;
				  border: 1px solid red;
			  }
			  .maker{
				  font-size:22rpx;
				  color:#d3961b;
			  }
		      .name {
		        font-size: 24rpx;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
		      }
			  .favourC{
				  font-size: 12rpx;
				  color: #b3b3b3;
			  }
		    }
		}
	
</style>