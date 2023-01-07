<template>
	<view>
		<uni-nav-bar  title="男装" left-icon="back" statusBar="true" fixed="true" @clickLeft="comeback"></uni-nav-bar>
		
		
	</view>
</template>

<script>
	import {axiosGet} from'@/utils/http.js'
	export default {
		data() {
			return {
				onename:[]
			}
		},
		methods: {
			comeback() {
				uni.switchTab({
					url: '../index/index'
				})
			}
		},
		async created(){
			let result=await axiosGet("/api/one");
			console.log(result)
			if(+result.code===200){
				this.onename=result.data;
			}
		}
		 
		
	}
</script>

<style>
</style>