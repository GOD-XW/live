<template>
	<view class="content">
		启动页
		<button @click="aa()">a</button>
		<button @click="b()">b</button>
		<button @click="c()">c</button>
		<view  class="iconfont " style="font-size: 100rpx;">&#xe600;
</view>
<text class="iconfont .icon-cha">a</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {
		aa(){
			uni.navigateTo({
				url:"../live/live"
			})
		},
		b(){
			uni.navigateTo({
				url:"./test"
			})
		},
		c(){
			uni.navigateTo({
				url:"../create-live/create-live"
			})
		},
		
		}
	}
</script>

<style>

</style>
