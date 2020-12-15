<template>
	<view>
		<view style="display: flex;" @click="open">
			<view style="width: 150rpx;height: 150rpx;">
			<image :src="item.cover" style="width:120rpx;height: 120rpx;margin: 15rpx;">
			</image>
			</view>
			<view >
				<view style="font-weight: bold;">{{item.title}}</view>
				<view style="font-size: 24rpx;color: #c3c2bd;">{{item.desc}}</view>
				<text class="text">
					动态:  {{item.news_count}}
				</text>
				<text style="margin-left: 10rpx;color:#c3c2bd;font-size: 24rpx;">
					今日:  {{item.today_count}}
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export  default{
		props:{
			item:Object,
			index:Number
		},
		methods:{
			open(){
				uni.navigateTo({
					url:'../../pages/topic-detail/topic-detail?detail='+JSON.stringify(this.item),
				});
			}
		},
	}
</script>

<style>
</style>
