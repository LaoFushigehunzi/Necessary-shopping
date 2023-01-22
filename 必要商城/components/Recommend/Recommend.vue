<template>
	<view class="recommend">
		<view class="title">
			<view class="titleItem" id="0" @click="titleChange" :style="titleCurrent==0?'color:#7F4395':''">
				热门
			</view>
			<view class="titleItem" id="1" @click="titleChange" :style="titleCurrent==1?'color:#7F4395':''">
				价格
				<image :src="priceOrderIcon[priceOrderStatus]" mode="widthFix" class="titleImg">
				</image>
			</view>
			<view class="titleItem" id="2" @click="titleChange" :style="titleClassifyStatus==1?'color:#7F4395':''">
				{{title_name}}
				<image :src="titleClassifyIcon[titleClassifyStatus]" mode="widthFix" class="titleImg"></image>
			</view>
		</view>
		<view class="classify_all" v-if='titleClassifyStatus==1'>
			<view class="classifyItem" :style="classifyCurrent==0?'color:#7F4395;border-color: #7F4395;':''"
				@click="classifyChoose('全部',0)">
				全部
			</view>
			<view class="classifyItem" v-for="(item,index) in one_data2" :key="index"
				:style="(index+1)==classifyCurrent?'color:#7F4395;border-color: #7F4395;':''"
				@click="classifyChoose(item.name,(index+1),item.one_id)">{{item.name}}
			</view>
		</view>
		<view class="yinying" v-if="titleClassifyStatus==1" @click="goBack">
		</view>
		<view class="content">
			<view class="content_item" v-for="(item,index) in orderContent" :key="index" :index="item.three_id">
				<view class="coverImg">
					<image :src="item.cart_image" mode="widthFix" class="coverImgStyle" lazy-load></image>
				</view>
				<view class="goods_text">
					<view><span style="color:#F7A701;font-size: 13px;">￥{{item.cart_new_price}}</span>
						<span style="text-decoration: line-through;font-size: 12px;">￥{{item.cart_price}}</span>
					</view>
					<view v-if="item.cart_labels">
						<text
							style="background-color:#AB7FD1;font-size: 10px ;display:inline-block;color: white;">{{item.cart_labels}}</text>
					</view>
					<view style="color: #BF9E6B;font-size: 13px;">{{item.cart_maker}}</view>
					<view style="font-size: 14px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
						{{item.cart_title}}
					</view>
					<view style="color:#bbb;font-size: 10px;">{{item.cart_comment_num}}</view>
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
				two: [], //arr_two数据
				three: [], //three_two数据
				title_name: '全部分类',
				one_data2: [], //arr_one的数据2
				goods: [], //goods商品数据
				titleCurrent: 0, //recommend中选中的title下标 0,1,2
				priceOrderStatus: 0, //价格排序的图标状态 0,1,2
				priceOrderIcon: ['../../static/image/updown.png', '../../static/image/updown1.png',
					'../../static/image/updown2.png'
				], //价格排序的图标
				titleClassifyStatus: 0, //全部分类状态 0,1
				classifyCurrent: 0, //全部分类中被选中的下标
				titleClassifyIcon: ['../../static/image/down2.png', '../../static/image/up.png'], //标题 全部分类 图标
			}
		},
		created() {
			this.getOneData();
			this.getGoodsData();
			this.getOtherData();
		},
		computed: {
			orderContent() {
				if (this.titleCurrent == 0) {
					return this.goods.sort((item1, item2) => item1['cart_weizhi'] - item2['cart_weizhi'])
				} else if (this.titleCurrent == 1) {
					return this.goods.sort((item1, item2) => item1['cart_new_price'] - item2['cart_new_price'])
				}
			}
		},
		methods: {
			async getOneData() {
				let result = await axiosGet('/api/one');
				if (result.code == 200) {
					//按照order属性从小到大排序
					let data = result.data.filter(item => item.order2 != null)
					this.one_data2 = data.sort((a, b) => a['order2'] - b['order2'])

				} else {
					this.one_data2 = ['one数据获取失败'];
				}
			},
			async getGoodsData() {
				let result = await axiosGet('/api/goods');
				if (result.code == 200) {
					// goods的数据
					this.goods = result.data.sort(function(a, b) {
						return a.cart_weizhi - b.cart_weizhi
					});
				} else {
					this.goods = ['goods数据获取失败'];
				}

			},
			async getOtherData() {
				let two = await axiosGet('/api/two');
				let three = await axiosGet('/api/three');
				this.two = two.data;
				this.three = three.data;
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
			classifyChoose(name, index, id) {
				this.title_name = name
				this.classifyCurrent = index;
				if (id) {
					let data = this.two.filter(item => item['one_id'] == id);
					let result = [];
					let data2 = [];
					for (var i = 0; i < data.length; i++) {
						var arr = this.three.filter(item => item.two_id == data[i].two_id);
						for (let j = 0; j < arr.length; j++) {
							result.push(arr[j])
						}
					}
					for (var i = 0; i < result.length; i++) {
						var arr = this.goods.filter(item => item.three_id == result[i].three_id);
						for (let j = 0; j < arr.length; j++) {
							data2.push(arr[j])
						}
					}
					this.goods = data2;
					if (data2) {
						this.getGoodsData()
					}
				} else {
					this.getGoodsData()
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.yinying {
		position: absolute;
		background-color: rgba(0, 0, 0, .4);
		top: 489.1304rpx;
		width: 100%;
		height: 100%;
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
			position: absolute;
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
				border: 1px #F4F4F4 solid;
				background-color: white;

				.coverImg {

					.coverImgStyle {
						width: 100%;
					}
				}

				.goods_text {
					margin-top: -7.2464rpx;

				}
			}

		}
	}
</style>
