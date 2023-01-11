<template>
	<SearchBtn style="position: fixed;z-index: 11;width: 100%;top: 0;"></SearchBtn>
	<view>
		<view class="tabbar" @mousemove="showScroll" style="position: fixed;z-index: 11;top: 63.4058rpx;">
			<view class="scroll-all" v-if="!showTag">
				<scroll-view scroll-x="true" scroll-y="false" enable-flex>
					<view class="scroll-view-item "
						:style="current==0?'color:#7F4395 ; border-bottom: #7F4395 1px solid;':''" @click="chooseThis"
						id="0">热门
					</view>
					<view class="scroll-view-item"
						:style="(index+1)==current?'color:#7F4395;border-bottom: #7F4395 1px solid;':''"
						v-for="(item,index) in one_data" :key="item.one_id" @click="chooseThis" :id="item.order">
						{{item.name}}
					</view>
				</scroll-view>
			</view>
			<view class="title" v-if="showTag">
				全部频道
			</view>
			<view class="iconTo" @click="switchto">
				<uni-icons :type="showTag?'top':'bottom'" size="16" color="#C6C6C6">
				</uni-icons>
			</view>
			<view class="all_item" v-if='showTag'>
				<view class="gridItem" :style="current==0?'color:#7F4395;border-color: #7F4395;':''" @click="chooseThis"
					:id="0">热门
				</view>
				<view class="gridItem" v-for="(item,index) in one_data" :key="index"
					:style="(index+1)==current?'color:#7F4395;border-color: #7F4395;':''" @click="chooseThis"
					:id="item.order">{{item.name}}
				</view>
			</view>
			<view class="yinying" v-if="showTag" style="top: 592.3913rpx;z-index: 1;" @click="goBack"></view>
		</view>
	</view>
	<view style="margin-top: 152.1739rpx;" v-if="current==0">
		<view class="lunbo">
			<swiper class="swiper" circular autoplay @change="lunboChange">
				<swiper-item v-for="(item ,index) in lunboList" :key="index">
					<image :src="item.url" mode="widthFix" class="swiperItem"></image>
				</swiper-item>
			</swiper>
			<view class="dots">
				<view class="dotsItem" v-for="(item,index) in lunboList" :key="index"
					:style="index==lunboCurrent?'background-color:#F7B200;border-color: #F7B200':''"></view>
			</view>
		</view>
		<view class="tag">
			<view class="tagItem" v-for="(item,index) in tag" :key="index">
				{{item}}
				<image src="@/static/index/icon/tag.png" mode="widthFix" class="itemImg" v-if="index!=3"></image>
			</view>
		</view>
		<view class="ad">
			<image src="@/static/index/ad/1.jpeg" mode="widthFix" class="adItem"></image>
		</view>
		<view class="tabIcon">
			<view class="tabItem" v-for="(item,index) in tabIcon" :key="index">
				<image :src="item.url" mode="widthFix" class="iconImg"></image>
				<view class="iconName">
					{{item.name}}
				</view>
			</view>
		</view>
		<view class="ad">
			<image src="@/static/index/ad/2.png" mode="widthFix" class="adItem"></image>
		</view>
		<Recommend></Recommend>
	</view>
</template>
<script>
	import {
		axiosGet
	} from '@/common/js/http.js'
	export default {
		data() {
			return {
				one_data: [], //one的数据
				current: 0, //选中的下标
				showTag: false, //商品目录是否显示全部,
				lunboCurrent: 0, //lunbo当前图片index
				lunboList: [{
					url: '../../static/index/lunbo/1.webp'
				}, {
					url: '../../static/index/lunbo/2.webp'
				}, {
					url: '../../static/index/lunbo/3.webp'
				}, {
					url: '../../static/index/lunbo/4.webp'
				}, {
					url: '../../static/index/lunbo/5.webp'
				}, {
					url: '../../static/index/lunbo/6.webp'
				}], //轮播图列表
				tag: ['大牌品质', '工厂价格', '顺丰包邮', '无忧退款'], //tag标签
				tabIcon: [{
					name: '品质男装',
					url: '../../static/index/icon/1.webp'
				}, {
					name: '食品饮料',
					url: '../../static/index/icon/2.webp'
				}, {
					name: '每日签到',
					url: '../../static/index/icon/3.webp'
				}, {
					name: '每日上新',
					url: '../../static/index/icon/4.webp'
				}, {
					name: '美妆护肤',
					url: '../../static/index/icon/5.webp'
				}], //ad下面的点击图标
			}
		},
		created() {
			this.getData()
		},
		methods: {
			async getData() {
				try {
					let result = await axiosGet('/api/one');
					let result2 = await axiosGet('/api/goods');
					if (result.code == 200) {
						//按照order属性从小到大排序
						this.one_data = result.data.sort(function(a, b) {
							return a.order - b.order
						});
					} else {
						this.one_data = ['数据获取失败'];
					}
				} catch (e) {
					console.log(e.message);
				}

			},
			chooseThis(e) {
				this.current = e.currentTarget.id;
			},
			switchto() {
				this.showTag = !this.showTag;
			},
			lunboChange(e) {
				this.lunboCurrent = e.detail.current;
			},
			goBack() {
				this.showTag = false;
				this.titleClassifyStatus = 0;
			},
			changeToFixed() {
				console.log('22222222222222222222222222');
			}
		}
	}
</script>

<style lang="less" scoped>
	.yinying {
		position: absolute;
		width: 100%;
		height: 49vh;
		z-index: 100;
		background-color: rgba(0, 0, 0, .4);
	}

	.tabbar {
		width: 100%;
		display: flex;
		background-color: white;
		height: 90rpx;
		line-height: 80rpx;
		position: relative;

		.scroll-all {
			font-size: 15px;
			white-space: nowrap;
			display: flex;
			align-content: center;
			width: 90%;

			.scroll-view-item {
				display: inline-block;
				text-align: center;
				margin-right: 30rpx;
				padding: 0 10rpx;

				&:first-child {
					margin-left: 56rpx;
				}
			}
		}

		.iconTo {
			width: 10%;
			color: #C6C6C6;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: all 3s linear 0s;
		}

		.title {
			width: 90%;
			color: #808080;
			margin-left: 20rpx;
			font-size: 14px;
			text-align: left;

		}

		.all_item {
			position: absolute;
			width: 100%;
			height: 40vh;
			background-color: white;
			top: 90rpx;
			border-top: #F0F0F0 1px solid;
			display: flex;
			flex-wrap: wrap;
			padding-top: 10rpx;
			z-index: 100;

			.gridItem {
				white-space: nowrap;
				height: 40rpx;
				width: 145rpx;
				text-align: center;
				line-height: 40rpx;
				border-radius: 23rpx;
				border: #808080 1px solid;
				color: #808080;
				font-size: 12px;
				margin-left: 30rpx;
			}
		}

	}







	.lunbo {
		position: relative;

		.swiper {
			width: 100%;
			height: 260rpx;

			.swiperItem {
				width: 100%;
			}
		}

		.dots {
			display: flex;
			position: absolute;
			bottom: 30rpx;
			right: 20rpx;

			.dotsItem {
				margin-left: 20rpx;
				width: 10rpx;
				height: 10rpx;
				border-radius: 50%;
				background-color: rgba(0, 0, 0, 0);
				border: #7F4395 1px solid;
			}
		}
	}

	.tag {
		height: 70rpx;
		line-height: 70rpx;
		background-color: white;
		display: flex;
		justify-content: center;

		.tagItem {
			display: inline-block;
			color: #9687A4;
			font-size: 14px;

			.itemImg {
				margin: 0 20rpx;
				width: 20rpx;
				height: 24rpx;
				position: relative;
				top: 4rpx;
			}
		}
	}

	.ad {
		.adItem {
			width: 100%;
		}
	}

	.tabIcon {
		display: flex;
		background-color: white;
		height: 150rpx;
		justify-content: space-around;
		align-items: center;

		.tabItem {
			text-align: center;

			.iconImg {
				width: 50rpx;
				height: 50rpx;
			}

			.iconName {
				font-size: 12px;
				color: #666666;
			}
		}
	}
</style>
