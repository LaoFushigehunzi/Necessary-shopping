 <template>
	<view class="classify2">
		<uni-nav-bar   title="餐厨" left-icon="back" statusBar="true" fixed="true" @clickLeft="comeback"></uni-nav-bar>
		<view>
			<view class="tabbar" @mousemove="showScroll" style="position: fixed;z-index: 11; 63.4058rpx">
				<view class="scroll-all" v-if="!showTag">
					<scroll-view scroll-x="true" scroll-y="false" enable-flex>
						<view class="scroll-view-item "
							:style="current==0?'color:#7F4395 ; border-bottom: #7F4395 1px solid;':''"
							@click="chooseThis(0)" id="0">热门
						</view>
						<view class="scroll-view-item"
							:style="(index+1)==current?'color:#7F4395;border-bottom: #7F4395 1px solid;':''"
							v-for="(item,index) in one_data" :key="item.one_id" @click="chooseThis((index+1),item.one_id)"
							:id="item.order">
							{{item.name}}
						</view>
					</scroll-view>
				</view>
				<view class="title" v-if="showTag">
					全部分类
				</view>
				<view class="iconTo" @click="switchto">
					<uni-icons :type="showTag?'top':'bottom'" size="16" color="#C6C6C6">
					</uni-icons>
				</view>
				<view class="all_item" v-if='showTag'>
					<view class="gridItem" :style="current==0?'color:#7F4395;border-color: #7F4395;':''"
						@click="chooseThis(0)" :id="0">热门
					</view>
					<view class="gridItem" v-for="(item,index) in one_data" :key="index"
						:style="(index+1)==current?'color:#7F4395;border-color: #7F4395;':''"
						@click="chooseThis((index+1),item.one_id)" :id="item.order">{{item.name}}
					</view>
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
		data() {
			return {
				moreStatus: false, //更多内容图标是否显示
				isfixed: false, //Recommend2中title是否固定
				one_data: [], //one的数据
				three: [], //页面的icon宫格
				current: 9, //选中的下标
				one_id: '', //选中下标的one_id
				showTag: false
			}
		},
		created() {
			this.getOneData();
		},
		methods: {
			comeback() {
				uni.switchTab({
					url: '../index/index'
				})
			},
			async getOneData() {
				let result = await axiosGet('/api/two');
				if (result.code == 200) {
					//按照order属性从小到大排序
					this.one_data = result.data.sort(function(a, b) {
						return a.order - b.order
					});
				} else {
					this.one_data = ['数据获取失败'];
				}
			},
			async chooseThis(index, id) {
				this.current = index;
				if (id) {
					this.two_id = id;
					let result = await axiosPost('/api/index/two_id', {
						id
					})
					if (result.data.length > 10) {
						this.three = result.data.slice(0, 8);
						this.moreStatus = true;
					} else if (result.data.length > 5) {
						this.three = result.data.slice(0, 3);
						this.moreStatus = true;
					} else {
						this.moreStatus = false;
					}
				}
				this.showTag = false;
			},
			switchto() {
				this.showTag = !this.showTag;
			},
			goBack() {
				this.showTag = false;
			},
			isFixed() {
				const query = uni.createSelectorQuery().in(this);
				query.select('#zujian').boundingClientRect(data => {
					if (data.top < 17) {
						this.isfixed = true;
					} else {
						this.isfixed = false;
					}
				}).exec();
			},
		}
	}
</script>

<style lang="less" scoped>
	.yinying {
		position: absolute;
		width: 100%;
		height: 100%;
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
</style>



