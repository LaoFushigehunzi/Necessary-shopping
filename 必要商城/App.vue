<script>
	export default {
		onLaunch: function() {},
		onShow: function() {},
		onHide: function() {}
	}
</script>
<style>

</style>
<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';

	/* #ifndef APP-NVUE */
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
	//隐藏全局滚动条
	::-webkit-scrollbar {  
	    display: none;  
	    width: 0 !important;  
	    height: 0 !important;  
	    -webkit-appearance: none;  
	    background: transparent;  
	}
</style>
