<template>
	<view>
		<view style="display: flex;align-items: center;justify-content: center;flex-direction: column;padding: 40rpx 0 30rpx 0;">
			<image src="../../static/lb2.jpg" style="height:300rpx;width:300rpx;border-radius: calc(50%);"></image>
			<text style="font-size: 30rpx;margin-top: 20rpx;color: #8F8F94;">version 1.0.1</text>
		</view>
		<uni-list-item title="新版本检测"></uni-list-item>
		<uni-list-item title="社区用户协议"></uni-list-item>
	</view>
</template>

<script>
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	export default {
		components:{
			uniListItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
