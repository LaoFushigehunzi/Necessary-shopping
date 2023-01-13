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
			<view class="titleItem" @click="titleChange(4);showDrawer()" :style="titleCurrent==4?'color:#7F4395':''"
				v-if="drawerData.color!= '' || drawerData.size!= ''">
				<view>
					筛选
					<image src="/static/index/icon//filter.png" mode="widthFix" style="width: 18.1159rpx;"></image>
				</view>
				<!-- -------------------------------------------------------------------------------------------------------------- -->
				<uni-drawer ref="showRight" mode="right" value="array" :show-animation="false" class="drawer">
					<scroll-view style="height: 100%;" scroll-y="true">
						<uni-collapse>
							<uni-collapse-item title="颜色" v-if="drawerData.color!= ''">
								<view class="collapse">
									<view :span="3" class="collapse-item" v-for="(item,index) in drawerData.color"
										:key="index" @click="chooseColor(item,index)"
										:style="selected.color.includes(item)?'border-color:#7F4395;color:#7F4395;':''">
										{{item}}
									</view>
								</view>
							</uni-collapse-item>
							<uni-collapse-item title="尺码" v-if="drawerData.size!= ''">
								<view class="collapse">
									<view class="collapse-item" v-for="(item,index) in drawerData.size" :key="index"
										@click="chooseSize(item,index)"
										:style="selected.size.includes(item)?'border-color:#7F4395;color:#7F4395;':''">
										{{item}}
									</view>
								</view>
							</uni-collapse-item>
						</uni-collapse>
						<view class="drawer-btn">
							<button @click="reset">重置</button>
							<button @click="confirm">确定</button>
						</view>
					</scroll-view>
				</uni-drawer>
				<!-- -------------------------------------------------------------------------------------------------------------- -->
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
		axiosGet,
		axiosPost
	} from '@/common/js/http.js'
	export default {
		name: "Recommend2",
		props: ['tag', 'one_id'],
		data() {
			return {
				msg: '', //筛选条件无果后的信息
				selected: {
					color: ['白'],
					size: []
				}, //筛选选中的数据
				drawerData: [], //抽屉里的数据
				rushStatus: '0', //刷新状态数据
				one: [], //arr_one的数据2
				two: [], //arr_two数据
				three: [], //three_two数据
				goods: [], //goods商品数据
				goods2: [], //goods商品数据备份
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
				} else {
					return this.goods
				}
				if (this.titleCurrent != 0) {
					if (this.one_id != this.rushStatus) {
						this.titleCurrent = 0
					}
					this.rushStatus = this.one_id;
				}
			}
		},
		watch: {
			one_id: async function(id) {
				let data = await axiosPost('/api/component/one_id', {
					id: id
				})
				let drawer = await axiosPost('/api/drawer', {
					id
				})
				this.drawerData = drawer.data
				this.goods = data.data
				this.goods2 = data.data
			},
		},
		options: {
			styleIsolation: 'shared'
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
			async getDrawerData() {
				let result = await axiosGet('/api/drawer');
				if (result.code == 200) {
					this.drawerData = result.data;
				} else {
					this.drawerData = ['drawer数据获取失败'];
				}
			},
			titleChange(id) {
				this.titleCurrent = id;
				if (this.titleCurrent == 3) {
					this.priceOrderStatus = this.priceOrderStatus == 1 ? 2 : 1;
				} else {
					this.priceOrderStatus = 0
				}
			},
			showDrawer() {
				this.$refs.showRight.open();
			},
			closeDrawer() {
				this.$refs.showRight.close();
			},
			chooseColor(color, index) {
				let select = this.selected.color
				if (select.includes(color)) {
					select = select.splice(select.indexOf(color), 1);
				} else {
					select.push(color)
				}

			},
			chooseSize(size, index) {
				let select = this.selected.size
				if (select.includes(size)) {
					select = select.splice(select.indexOf(size), 1);
				} else {
					select.push(size)
				}
			},
			reset() {
				this.selected.color = [];
				this.selected.size = [];
			},
			async confirm() {
				let selected = this.selected
				let data = this.goods2
				let id = this.one_id

				if (data.color == '' && data.size == '') {
					let result = await axiosPost('/api/component/one_id', {
						id: id
					})
					this.goods = result.data
				} else {
					let result2 = await axiosPost('/api/component/selected', {
						goods: data,
						selected: selected
					})
					console.log(result2.data);
					if (!result2.data) {
						this.msg = '找不到你要的商品，请重新选择条件'
					} else {
						this.goods = result2.data;
						this.$refs.showRight.close();
					}
				}
			}
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

				.drawer {
					background-color: white;


					/deep/.uni-drawer__content.data-v-f7c32d22 {
						background-color: white;
						width: 83% !important;
					}

					.collapse {
						width: 100%;
						display: flex;
						flex-flow: row wrap;
						align-items: center;

						.collapse-item {
							display: inline-block;
							height: 59.7826rpx;
							width: 173.913rpx;
							color: #666666;
							font-size: 12px;
							text-align: center;
							line-height: 59.7826rpx;
							background-color: #F5F5F5;
							border-radius: 28.9855rpx;
							margin-bottom: 23.5507rpx;
							margin-left: 28.9855rpx;
							border: #F5F5F5 1px solid;
						}
					}

					.drawer-btn {
						position: fixed;
						bottom: 0;
						display: flex;
						justify-content: space-around;
						align-items: center;
						background-color: white;
						width: 100%;

						button {
							width: 40%;
							height: 79.7101rpx;
							font-size: 14px;
							margin: 18.1159rpx 0;

							&:first-child {
								background-color: white;
								color: black;
								border: #BBBBBB 1px solid
							}

							&:last-child {
								background-color: #7F4395;
								color: white;
								border: #7F4395 1px solid;
							}
						}
					}

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
