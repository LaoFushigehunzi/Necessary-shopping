<template>
	<view class="recommend">
		<view class="title">
			<view class="titleText">
				为你推荐
			</view>
		</view>
		<view class="content">
			<view class="content_item" v-for="(item,index) in goods" :key="index" :index="item.three_id">
				<view class="coverImg">
					<image :src="item.cart_image" mode="widthFix" class="coverImgStyle"></image>
				</view>
				<view class="goods_text">
					<view><span style="color:#F7A701;font-size: 13px;">￥{{item.cart_new_price}}</span>
						<span style="text-decoration: line-through;font-size: 12px;">￥{{item.cart_price}}</span>
					</view>
					<view v-if="item.cart_labels!=''">
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
		name: "OrderComponent",
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
							return a.cart_weizhi - b.cart_weizhi
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
	.recommend {
		position: relative;
		width: 100%;

		.title {
			background-color: white;
			height: 217.3913rpx;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			.titleText {
				display: inline-block;
				height: 22px;
				border-bottom: 1px black solid;
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
