<template>
	<view>
		<!-- 时间 -->
		<view v-if="shortTime" style="padding: 20rpx 0;display: flex;align-items: center;justify-content: center;font-size: 24rpx;color: #d5d5d5;">{{shortTime}}</view>
		<!-- 消息气泡 -->
		<view style="display: flex;text-align:start;margin: 20rpx 0;" :style="isSelf?'flex-direction:row-reverse;':''">
			<image :src="item.avatar" style="width:80rpx;height: 80rpx;border-radius: calc(50%);"></image>
			<view class="content">
				{{item.data}}
			</view>
		</view>
	</view>
</template>

<script>
	//模拟当前用户的userid
	const uid = 1;
	import $T from '@/common/time.js'
	export default {
		props: {
			item: Object,
			index: Number,
			pretime: [Number, String]
		},
		computed: {
			//是否是登录用户本人
			isSelf() {
				return uid === this.item.user_id
			},
			//转化时间
			shortTime() {
				return $T.getChatTime(this.item.create_time, this.pretime)
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	.content {
		display: flex;
		word-break: break-all;
		word-wrap:break-word; 
		 word-break:break-word;
		border-radius: 10rpx;
		background-color: #efefef;
		padding:10rpx;
		max-width: 400rpx;
		margin: 0 20rpx;
		align-items: center;
		line-height:1.2;
		letter-spacing:4rpx;
	}
</style>
