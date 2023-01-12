<template>
	<view class="recommend">
		<view class="title" :style="tag?'position:fixed;z-index:11;top:152.1739rpx;':''">
			<view class="titleItem" @click="titleChange(0)" :style="titleCurrent==0?'color:#7F4395':''">
				热门
			</view>
			<view class="titleItem" @click="titleChange(1)" :style="titleCurrent==1?'color:#7F4395':''">
				销量
			</view>
			<view class="titleItem" @click="titleChange(2)" :style="titleCurrent==2?'color:#7F4395':''">
				上新
			</view>
			<view class="titleItem" @click="titleChange(3)" :style="titleCurrent==3?'color:#7F4395':''">
				价格
				<image :src="priceOrderIcon[priceOrderStatus]" mode="widthFix" class="titleImg">
				</image>
			</view>
			<view class="titleItem" @click="titleChange(4)" :style="titleCurrent==4?'color:#7F4395':''">
				<view class="">
					筛选
					<image src="/static/index/icon//filter.png" mode="widthFix" style="width: 18.1159rpx;"></image>
				</view>
			</view>
		</view>

		<view class="content">
			<view class="content_item" v-for="(item,index) in orderContent" :key="index" :index="item.three_id">
				<view class="coverImg">
					<image :src="item.cart_image" mode="widthFix" class="coverImgStyle" lazy-load></image>
				</view>
				<view class="goods_text">
					<view style="color:#F7A701;font-size: 13px;">￥{{item.cart_new_price}}</view>
					<view v-if="item.cart_labels&&titleCurrent!=2">
						<text
							style="background-color:#AB7FD1;font-size: 10px ;display:inline-block;color: white;">{{item.cart_labels}}</text>
					</view>
					<view v-if="titleCurrent==2">
						<uni-tag text="一起拼" size="small" inverted></uni-tag>
					</view>
					<view style="color: #BF9E6B;font-size: 13px;">{{item.cart_maker}}</view>
					<view style="font-size: 14px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
						{{item.cart_title}}
					</view>
				</view>
				<view class="icon-new" v-if="titleCurrent==2">
					<image src="/static/index/icon/icon-new.png" mode="widthFix"
						style="width:45.2899rpx;position: absolute;top: 3.6232rpx;left: 3.6232rpx;"></image>
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
		name: "Recommend2",
		props: ['tag'],
		data() {
			return {
				one: [], //arr_one的数据2
				two: [], //arr_two数据
				three: [], //three_two数据
				goods: [], //goods商品数据
				titleCurrent: 0, //recommend中选中的title下标 
				priceOrderStatus: 0, //价格排序的图标状态 0,1,2
				priceOrderIcon: ['../../static/image/updown.png', '../../static/image/updown1.png',
					'../../static/image/updown2.png'
				], //价格排序的图标
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
				} else if (this.titleCurrent == 3) {
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
					this.one = data.sort((a, b) => a['order2'] - b['order2'])

				} else {
					this.one = ['one数据获取失败'];
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
			titleChange(id) {
				this.titleCurrent = id;
				if (this.titleCurrent == 3) {
					this.priceOrderStatus = this.priceOrderStatus == 1 ? 2 : 1;
				} else {
					this.priceOrderStatus = 0
				}
			},
		}
	}
</script>

<style lang="less" scoped>
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
				flex: 1;
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


		.content {
			width: 100%;
			display: flex;
			flex-wrap: wrap;

			.content_item {
				width: 49%;
				border: 1px #F4F4F4 solid;
				background-color: white;
				position: relative;

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
