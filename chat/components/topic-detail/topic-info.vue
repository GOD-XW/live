<template>
	<view>
		<view style="position: relative;">
			<image :src="info.cover" mode="aspectFill"
			style="width:100%;height: 300rpx;" class="filter"></image>
		</view>
		<view style="background-color: #FFFFFF;z-index: 10;position: relative;padding: 0 20rpx 20rpx 20rpx;">
			<view style="display: flex;">
				<image :src="info.cover" style="width: 150rpx;height: 150rpx;margin: -75rpx 20rpx 0 0;border-radius:10rpx;"></image>
				<text style="font-size:30rpx;">{{info.title}}</text>
			</view>
			<view style="display: flex;text-align: center;color: #8f8d8d;margin-top: 10rpx;">
				<text >动态： {{info.news_count}}</text>
				<text style="margin-left:20rpx;">今日： {{info.today_count}}</text>
			</view>
			<view style="color: #8f8d8d;font-size: 30rpx;">{{info.desc}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['info'],
		data() {
			return {
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.filter {
		filter: blur(5px);
	}
</style>
