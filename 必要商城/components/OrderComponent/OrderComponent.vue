<template>
	<view class="recommend">
		<view class="title">
			<view class="titleItem" id="0" @click="titleChange" :style="titleCurrent==0?'color:#7F4395':''">
				热门
			</view>
			<view class="titleItem" id="1" @click="titleChange " :style="titleCurrent==1?'color:#7F4395':''">
				价格
				<image :src="priceOrderIcon[priceOrderStatus]" mode="widthFix" class="titleImg">
				</image>
			</view>
			<view class="titleItem" id="2" @click="titleChange" :style="titleClassifyStatus==1?'color:#7F4395':''">
				全部分类
				<image :src="titleClassifyIcon[titleClassifyStatus]" mode="widthFix" class="titleImg"></image>
			</view>
		</view>
		<view class="classify_all" v-if='titleClassifyStatus==1'>
			<view class="classifyItem" :style="classifyCurrent==0?'color:#7F4395;border-color: #7F4395;':''"
				@click="classifyChoose" id="0">
				全部
			</view>
			<view class="classifyItem" v-for="(item,index) in one_data2" :key="index"
				:style="(index+1)==classifyCurrent?'color:#7F4395;border-color: #7F4395;':''" @click="classifyChoose"
				:id="item.order2">{{item.name}}
			</view>
		</view>
		<view class="yinying" v-if="titleClassifyStatus==1" @click="goBack"
			style="top: 489.1304rpx;right: 0;height: 100%;">
		</view>
		<view class="content">
			<view class="content_item" v-for="(item,index) in goods" :key="index" :index="item.three_id">
				<view class="coverImg">
					<image :src="item.buy_source" mode="widthFix" class="coverImgStyle"></image>
				</view>
				<view class="goods_text">
					<view><span style="color:#F7A701;font-size: 13px;">￥{{item.new_price}}</span>
						<span style="text-decoration: line-through;font-size: 12px;">￥{{item.price}}</span>
					</view>
					<view>
						<text
							style="background-color:#7F4395;font-size: 10px ;display:inline-block;color: white;">爆品</text>
					</view>
					<view style="color: #BF9E6B;font-size: 13px;">{{item.maker}}</view>
					<view style="font-size: 14px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
						{{item.name}}
					</view>
					<view style="color:#bbb;font-size: 10px;">{{item.favourableComments}}条好评</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		axiosGet
	} from '@/common/js/http.js'
	export default {
		name: "Recommend",
		data() {
			return {
				one_data2: [], //one的数据2
				goods: [], //商品数据
				titleCurrent: 0, //recommend中选中的title下标 0,1,2
				priceOrderStatus: 0, //价格排序的图标状态 0,1,2
				priceOrderIcon: ['../../static/image/updown.png', '../../static/image/updown1.png',
					'../../static/image/updown2.png'
				], //价格排序的图标
				titleClassifyStatus: 0, //全部分类状态 0,1
				classifyCurrent: 0, //全部分类中被选中的下标
				titleClassifyIcon: ['../../static/image/down2.png', '../../static/image/up.png'], //标题 全部分类 图标
			};
		},
		created() {
			this.getOneData();
			this.getGoodsData();
		},
		methods: {
			async getOneData() {
				try {
					let result = await axiosGet('/api/one');
					if (result.code == 200) {
						//按照order属性从小到大排序
						let data = result.data.filter(item => item.order2 != null)
						this.one_data2 = data.sort(function(a, b) {
							return a.order2 - b.order2
						});
					} else {
						this.one_data2 = ['数据获取失败'];
					}
				} catch (e) {
					console.log(e.message);
				}
			},
			async getGoodsData() {
				try {
					let result = await axiosGet('/api/goods');
					if (result.code == 200) {
						// goods的数据
						this.goods = result.data.sort(function(a, b) {
							return a.goods_id - b.goods_id
						});
					} else {
						this.goods = ['数据获取失败'];
					}
				} catch (e) {
					console.log(e.message);
				}

			},
			titleChange(e) {
				let current = this.titleCurrent;
				this.titleCurrent = e.currentTarget.id;
				if (this.titleCurrent == 0) {
					this.priceOrderStatus = 0;
					this.titleClassifyStatus = 0;
				}
				if (this.titleCurrent == 1) {
					this.titleClassifyStatus = 0;
					this.priceOrderStatus = this.priceOrderStatus == 1 ? 2 : 1;
				}
				if (this.titleCurrent == 2) {
					this.titleCurrent = current;
					this.titleClassifyStatus = this.titleClassifyStatus == 0 ? 1 : 0;
				}
			},
			goBack() {
				this.showTag = false;
				this.titleClassifyStatus = 0;
			},
			classifyChoose(e) {
				this.classifyCurrent = e.currentTarget.id;
			}
		}
	}
</script>

<style lang="less" scoped>
	.yinying {
		position: absolute;
		z-index: 99;
		background-color: rgba(0, 0, 0, .4);
	}

	.recommend {
		position: relative;
		width: 100%;

		.title {
			width: 100%;
			display: flex;
			background-color: white;
			height: 100rpx;
			justify-content: space-around;

			.titleItem {
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 14px;

				.titleImg {
					margin-left: 10rpx;
					width: 24rpx;
				}
			}
		}

		.classify_all {
			position: relative;
			z-index: 10;
			display: flex;
			flex-wrap: wrap;
			background-color: white;
			margin-top: 1.8116rpx;
			padding-left: 7.2464rpx;
			padding-top: 30.7971rpx;
			height: 362.3188rpx;
			width: 100%;

			.classifyItem {
				border: #EEEEEE 1px solid;
				width: 144.9275rpx;
				height: 54.3478rpx;
				line-height: 54.3478rpx;
				text-align: center;
				margin-left: 28.9855rpx;
			}


		}

		.content {
			width: 100%;
			display: flex;
			flex-wrap: wrap;

			.content_item {
				width: 49%;
				border: 1px white solid;

				.coverImg {
					.coverImgStyle {
						width: 100%;
					}
				}

				.goods_text {
					background-color: white;
				}
			}

		}
	}
</style>
