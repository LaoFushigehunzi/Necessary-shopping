<template>
	<view>
		<view class="headFlex">
			<Search></Search>
			<view class="tabbar" @mousemove="showScroll">
				<view class="scroll-view" v-if="!showTag">
					<scroll-view scroll-x="true" scroll-y="false" enable-flex>
						<view class="scroll-view-item "
							:style="current==0?'color:#7F4395 ; border-bottom: #7F4395 1px solid;':''"
							@click="chooseThis" :id="0">热门
						</view>
						<view class="scroll-view-item"
							:style="(index+1)==current?'color:#7F4395;border-bottom: #7F4395 1px solid;':''"
							v-for="(item,index) in one_data" :key="item.one_id" @click="chooseThis" :id="item.order">
							{{item.name}}
						</view>
					</scroll-view>
				</view>
				<view class="title" v-else="showTag">
					全部频道
				</view>
				<view class="iconTo" @click="switchto">
					<uni-icons :type="showTag?'top':'bottom'" size="20" color="#C6C6C6">
					</uni-icons>
				</view>
				<uni-transition modeClass="slide-top" duration="1000" :show="showTag">
					<view class="all_item" v-if='showTag'>
						<view class="gridItem">热门</view>
						<view class="gridItem" v-for="(item,index) in one_data" :key="item.one_id">{{item.name}}</view>
					</view>
				</uni-transition>

				<view class="transparent">
				</view>
			</view>

		</view>
		<view class="lunbo">

		</view>
		<view class="tag">

		</view>
		<view class="ad">

		</view>
		<view class="tabIcon">

		</view>
		<view class="new_user_ad">

		</view>
		<view class="recommend">
			<view class="title">

			</view>
			<view class="container">
				<view class="content_item">

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
		data() {
			return {
				one_data: [], //one的数据
				current: 0, //选中的下标
				showTag: true, //商品目录是否显示全部
			}
		},
		created() {
			this.getData()
		},
		methods: {
			async getData() {
				let result = await axiosGet('/api/one');
				if (result.code == 200) {
					//按照order属性从小到大排序
					this.one_data = result.data.sort(function(a, b) {
						return a.order - b.order
					});
				}
			},
			chooseThis(e) {
				this.current = e.currentTarget.id
			},
			switchto() {
				this.showTag = !this.showTag
			}
		}
	}
</script>

<style lang="less">
	.tabbar {
		width: 100%;
		display: flex;
		background-color: white;
		height: 100rpx;
		line-height: 90rpx;
		position: relative;

		.scroll-view {
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
			align-self: flex-end;
			justify-content: center;
			align-items: center;

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
			top: 100rpx;
			border-top: #F0F0F0 1px solid;
			display: flex;
			flex-wrap: wrap;
			padding-top: 10rpx;

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

		.transparent {
			position: absolute;
			top: 49vh;
			height: 40vh;
			width: 100%;
			background-color: rgba(0, 0, 0, 0.3);

		}
	}
</style>
