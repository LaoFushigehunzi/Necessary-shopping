<template>
	<!-- <uni-nav-bar title="全部订单" left-icon="back" statusBar="true" fixed="true" @clickLeft="comeback"></uni-nav-bar>
    <view class="my-order bg-active-color">
        <Lines/>
        <view class="order-header">
            <view
                class="header-item"
                :class="tabIndex==index? 'active':''"
                v-for="(item,index) in tabList"
                :key="index"
                @tap="changeTab(index)"
            >
                {{item.name}}
            </view>
			
        </view>
		<swiper @change="onChangeTab" :current="tabIndex">
			<swiper-item
				v-for="(item,index) in tabList"
				:key="index"
			>
				<view> 
			<view class="tu">
				<image class="image" src="../../static/image/order.png" mode="widthFix"></image>
			</view>
			
		</view>
			</swiper-item>
		</swiper> -->
		<!-- <Card></Card> -->
		<!-- <view class="youlike">
			<view class="title">
				为你推荐
			</view>
			 <view class="goods_list">
			        <view class="goods_item" v-for="item in Goodlist" :key="item.goods_id"> -->
			            <!-- <image :src="item.lunbo_sourc"></image> -->
			            <!-- <view class="price">
							￥<text>{{item.newPerson_p}}</text>		                
			            </view>
						<view class="pingtuan">
							一起拼
						</view>
						<view class="maker">
							{{item.maker}}
						</view>
			            <view class="name">{{item.name}}</view>
						<view class="favourC">
							{{item.favourableC}}+条好评
						</view>
			        </view>
			    </view>
		</view>
       

    </view> -->
</template>

<script>
	// import {axiosGet} from'@/utils/http.js'
  //   export default {
  //       data() {
  //           return {
  //               // 内容块的高度
  //               clentHeight:0,
  //               tabIndex:0,
  //               tabList:[
  //                   {'name':"全部"},
  //                   {'name':"待付款"},
  //                   {'name':"待成团"},
  //                   {'name':"待生产/收货"},
  //                   {'name':"待评价"}
  //               ],

  //           };
  //       },
  //       methods:{
		// 	comeback() {
		// 		uni.switchTab({
		// 			url: '../index/index'
		// 		})
		// 	},
		// 	 // 顶部切换
		// 	changeTab(index){
		// 	    if (this.tabIndex === index) {
		// 	        return;
		// 	    }
		// 	    this.tabIndex = index
		// 	},
		// 	onChangeTab(e){
		// 	    this.changeTab(e.detail.current)
		// 	},
  //           // 获取可视区域高度【兼容】
  //           getClientHeight(){
  //               const res = uni.getSystemInfoSync();
  //               console.log(res.platform,res.statusBarHeight);
  //               const system = res.platform;
  //               if ( system === 'iso') {
  //                   return 44 + res.statusBarHeight;
  //               }else if( system === 'android' ){
  //                   return 48 + res.statusBarHeight;
  //               } else{
  //                   return 0;
  //               }
  //           },
			
  //       },
  //       onReady() { // 初步渲染完后执行
  //           uni.getSystemInfo({
  //               success: (res) => {
  //                   // 可视区域高度 减去头部高度
  //                   this.clentHeight = res.windowHeight - uni.upx2px(80) - this.getClientHeight();
  //               }
  //           })
  //       },
		
  //   }
</script>

<style lang="scss">
.order-header{
	height: 80rpx;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2rpx solid #f7f7f7;
}
.header-item{
    text-align: center;
    flex: 1;
    line-height: 80rpx;
	font-size: 26rpx;
}
.active{
    color: #cd56fb;
    border-bottom: 5rpx solid #cd56fb;
}

.payment{
    display: flex;
    justify-content: flex-end;
    background-color: #fff;
    padding: 20rpx;
}
.payment-text{
    border: 2rpx solid #49bdfb;
    line-height: 10rpx;
    padding: 6rpx 40rpx;
    border-radius: 30rpx;
}

.no-order{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.no-order-home{
    padding: 6rpx 60rpx;
    border: 2rpx solid #49bdfb;
    color: #49bdfb;
    border-radius: 40rpx;
}
.image{
	display: block;
	max-width: 150px;
	margin: 0 auto;
}

</style>


