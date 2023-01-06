<template>
	<view>
		<Search></Search>
	</view>
</template>

<script>
	import {
		axiosGet
	} from '@/common/js/http.js'
	import Search from '@/components/Search/Search.vue'
	export default {
		data() {
			return {
				data: []
			};
		},
		created() {
			this.getData()
		},
		methods: {
			async getData() {
				let result = await axiosGet('/api/one');
				if (result.code == 200) {
					this.data = result.data
				}
			}
		}
	}
</script>

<style lang="less">

</style>
