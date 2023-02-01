 <template>
<<<<<<< HEAD
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
=======
	<!-- <view class="classify2">
		<uni-nav-bar   title="宠物" left-icon="back" statusBar="true" fixed="true" @clickLeft="comeback"></uni-nav-bar>
		<view class="content">
			<view class="index">
				
				<scroll-view scroll-x="true" :scroll-into-view="scrollIntoIndex" class="scroll-header" >
					<view
					:id="'top'+index"
						class="header-item"
						v-for="(item,index) in topBar"
						:key="index"
						@tap="changeTab(index)"
					>
						<text :class="topBarIndex===index?'f-active-color':'f-color'">{{item.name}}</text>
					</view>
				</scroll-view>
				
				<swiper @change="onChangeTab" :current="topBarIndex">
					<swiper-item
						v-for="(item,index) in topBar"
						:key="index"
					>
						<view>{{item.name}}</view>
					</swiper-item>
				</swiper>
				 -->
				
				
				<!-- 推荐模板 -->
				<!-- <IndexSwiper></IndexSwiper>
				<Recommend></Recommend>
				<Card cardTitle='猜你喜欢'></Card>
				<CommodityList></CommodityList> -->
				
				<!-- 其他模板: 运动户外 美妆... -->
				<!-- <Card cardTitle='运动户外'></Card>
				<Banner></Banner>
				<Icons></Icons>
				<Card cardTitle='热销爆品'></Card>
				<Hot></Hot>
				<Card cardTitle='店铺推荐'></Card>
				<Shop></Shop>
				<Card cardTitle="为您推荐"></Card>
				<CommodityList></CommodityList>
				-->
			<!-- </view>
			
		</view>
	</view> -->
>>>>>>> master

</template>

<script>
<<<<<<< HEAD
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
=======
	// // import {axiosGet} from'@/utils/http.js'
	// export default {
	// 	//响应性属性
	// 	data() {
	// 		return {
	// 			// 选中的索引
	// 			topBarIndex:0,
	// 			// 顶栏跟随的索引id值
	// 			scrollIntoIndex:'top0',
	// 			// 顶栏数据
	// 			topBar:[
	// 			    {name:'羊绒羊毛衫'},
	// 			    {name:'针织衫'},
	// 			    {name:'服饰内衣'},
	// 			    {name:'衬衫/雪纺'},
	// 			    {name:'风衣/大衣'},
	// 			    {name:'外套马甲'},
	// 			    {name:'皮衣皮草'},
	// 				{name:"羽绒服/棉衣"},
	// 				{name:"休闲裤"},
	// 				{name:"牛仔裤"},
	// 				{name:"半身裙"},
	// 				{name:"连衣裙"}
	// 			],
	// 			one_id:"685",
	// 			three_id:"690",
	// 			two_item:[]
	// 		}
	// 	},
	// 	// created(){
	// 	// 	this.getThree();
	// 	// },
	// 	methods: {
	// 		changeTab(index){
	// 		    if (this.topBarIndex === index) {
	// 		        return;
	// 		    }
	// 		    this.topBarIndex = index
	// 		    this.scrollIntoIndex = 'top'+index
	// 		},
	// 		onChangeTab(e){
	// 		    this.changeTab(e.detail.current)
	// 		},
	// 		async getThree(){
	// 			let three_id=this.three_id;
	// 			// let result1=await axiosGet("/api/one");
	// 			// let result2=await axiosGet("/api/two");
	// 			// let result3=await axiosGet("/api/three")
	// 			// let three_item=result3.data.find(item=>item.three_id==three_id)
	// 			// let two_item=result2.data.find(item=>item.two_id==three_item.two_id)
	// 			// let one_item=result1.data.find(item=>item.one_id==two_item.one_id)
	// 			// console.log(one_item)
				
				
	// 		}
	// 	 }
		
	// }
</script>

<style>
	.scroll-header{
	    height: 80rpx;
	    white-space: nowrap;
		background-color: #ffffff;
		display: flex;
		justify-content: center;
		align-items: center;
		/* border-bottom: 2rpx solid #f7f7f7; */
	}
	.header-item{
	    display: inline-block;
	    padding: 0rpx 30rpx;
	    font-size: 26rpx;
	}
	.f-active-color{
		line-height: 80rpx;
		padding: 10rpx 0;
		color: #cd56fb;
	    border-bottom: 6rpx solid #cd56fb;
	}
	    .index{
	        width: 100%;
	    }
	    .content {
	        display: flex;
	        flex-direction: column;
	        align-items: center;
	        justify-content: center;
	    }
	 
	    .logo {
	        height: 200rpx;
	        width: 200rpx;
	        margin-top: 200rpx;
	        margin-left: auto;
	        margin-right: auto;
	        margin-bottom: 50rpx;
	    }
	 
	    .text-area {
	        display: flex;
	        justify-content: center;
	    }
	 
	    .title {
	        font-size: 36rpx;
	        color: #8f8f94;
	    }
>>>>>>> master
</style>



