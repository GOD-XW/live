<template>
	<view>
	<view class="content" hover-class="hover" @click="open">
		<view style="width:15%;">
		<image :src="item.avatar" style="width: 70rpx;height: 70rpx;border-radius:50%;margin: 15rpx;">
		</image>
		</view>
		<view style="width:85%;">
			<view style="display: flex;position:relative;width: 100%;">
				<view style="font-weight: 600;">{{item.username}}</view>
				<view style="position: absolute;top:5rpx;right:3%;color: #a1a1a1;font-size: 24rpx;">
				{{item.update_time | formatTime}}</view>
			</view>
			<view style="display: flex;position:relative;width: 100%;">
				<view class="text-ellipsis">{{item.data}}</view>
				<uni-badge :text="item.noread<100 ? item.noread : '99+' " type="error" style="position: absolute;bottom:5rpx;right:3%;"></uni-badge>
				</view>
			</view>
		</view>
		</view>
</template>

<script>
	import uniBadge from '@/components/uni-ui/uni-badge/uni-badge.vue'
	import $T from '@/common/time.js';
	export default{
		components:{
			uniBadge
		},
		props:{
			item:Object,
			index:Number,
			
		},
		//过滤器
		filters:{
			formatTime(value){
				return $T.gettime(value);
			}
		},
		methods:{
			open(){
				uni.navigateTo({
					url:"../../pages/user-chat/user-chat"
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		width: 98%;
		margin: 0 auto;
		height: 100rpx;
		border-bottom: 1rpx solid #dadada;
	}
	.hover{
		background-color: #e6e6e6;
	}
	.text-ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		lines: 1;
		max-width:80%;
	}
</style>
