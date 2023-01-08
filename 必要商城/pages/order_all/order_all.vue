<template>
	<view>
		<uni-nav-bar title="全部订单" left-icon="back" statusBar="true" fixed="true" @clickLeft="comeback"></uni-nav-bar>
		
		<view class="tabs">
		    <scroll-view scroll-x class="scroll-h" >
		    <block v-for="(tab,index) in tabBars" :key="tab.id">
		    <view class="uni-tab-item" :class="{'uni-tab-item-title-active' :tabIndex==index}" @tap="tabtap(index)">
		    <!--1 {{tab.name}} -->
		    <!--2 <text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text> -->
		    </view>
		    </block>            
		    </scroll-view>
		</view>

	</view>
</template>

<script >
	export default {
		data() {
			return {
				tabIndex:0,
				    tabBars:[
				        { name:"全部",id:"qb"},
				        { name:"待付款",id:"dfk"},
				        { name:"待成团",id:"dct"},
				        { name:"生产/待收货",id:"sc/dsh"},
				        { name:"待评价",id:"dpj"},
				    ]
			}
		},
		onLoad(){
			
		},
		methods: {
			tabtap(index){
			        this.tabIndex=index;
			    },
			comeback() {
				uni.switchTab({
					url: '../index/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.tabs {
    flex: 1;
    flex-direction: column;
    overflow: hidden;
    background-color: #ffffff;
    /* #ifdef MP-ALIPAY || MP-BAIDU */
    height: 100vh;
    /* #endif */
}

.scroll-h {
    width: 750upx;
    height: 80upx;
    flex-direction: row;
    /* #ifndef APP-PLUS */
    white-space: nowrap;
    /* #endif */
    /* flex-wrap: nowrap; */
    /* border-color: #cccccc;
    border-bottom-style: solid;
    border-bottom-width: 1px; */
}

.line-h {
    height: 1upx;
    background-color: #cccccc;
}

.uni-tab-item {
    /* #ifndef APP-PLUS */
    display: inline-block;
    /* #endif */
    flex-wrap: nowrap;
    padding-left: 34upx;
    padding-right: 34upx;
}

.uni-tab-item-title {
    color: #555;
    font-size: 30upx;
    height: 80upx;
    line-height: 80upx;
    flex-wrap: nowrap;
    /* #ifndef APP-PLUS */
    white-space: nowrap;
    /* #endif */
}

.uni-tab-item-title-active {
    color: #007AFF;
}
</style>
