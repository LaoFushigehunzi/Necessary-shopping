<template>
	<view class="classify2">
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
			</view>
			
		</view>
	</view>

</template>

<script>
	import {
		axiosGet
	} from '@/common/js/http.js'
	export default {
		//响应性属性
		data() {
			return {
				// 选中的索引
				topBarIndex:0,
				// 顶栏跟随的索引id值
				scrollIntoIndex:'top0',
				// 顶栏数据
				topBar:[
				    {name:'羊绒羊毛衫'},
				    {name:'针织衫'},
				    {name:'服饰内衣'},
				    {name:'衬衫/雪纺'},
				    {name:'风衣/大衣'},
				    {name:'外套马甲'},
				    {name:'皮衣皮草'},
					{name:"羽绒服/棉衣"},
					{name:"休闲裤"},
					{name:"牛仔裤"},
					{name:"半身裙"},
					{name:"连衣裙"}
				],
				one_id:"685",
				three_id:"690",
				two_item:[]
			}
		},
		created(){
			this.getThree();
		},
		methods: {
			changeTab(index){
			    if (this.topBarIndex === index) {
			        return;
			    }
			    this.topBarIndex = index
			    this.scrollIntoIndex = 'top'+index
			},
			onChangeTab(e){
			    this.changeTab(e.detail.current)
			},
			// async getThree(){
			// 	let three_id=this.three_id;
			// 	let result3=await axiosGet("/api/three");
				
			// 	// console.log(one_item.name)
			// },
			async getThree(){
				let three_id=this.three_id;
				let result1=await axiosGet("/api/one");
				let result2=await axiosGet("/api/two");
				let result3=await axiosGet("/api/three")
				let three_item=result3.data.find(item=>item.three_id==three_id)
				let two_item=result2.data.find(item=>item.two_id==three_item.two_id)
				let one_item=result1.data.find(item=>item.one_id==two_item.one_id)
				console.log(one_item)
				
				
			}
		 }
		
	}
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
</style>



