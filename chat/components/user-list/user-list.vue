<template>
	<view style="padding: 20rpx;display: flex;align-items: center;border-bottom: 1rpx solid #e5e5e5;">
		<image :src="item.avatar" style="width: 100rpx;height: 100rpx;border-radius:calc(50%);margin-right: 20rpx;"></image>
		<view style="display: flex;flex-direction: column;flex:1;">
			<text style="font-size:30rpx;">{{item.username}}</text>
			<uni-badge :text="item.age" :type="item.sex===1?'error':'primary'" size="small" >
				<text v-if="item.sex>0" class="iconfont" :class="item.sex===1?'icon-fenxiang':'icon-index'" style="font-size: 24rpx;margin-right:5rpx;"></text>
			</uni-badge>
		</view>
		<view class="uni-icon uni-icon-checkbox-filled" :class="item.isFollow?'text-light-muted':'text-main'"></view>
	</view>
</template>

<script>
	import uniBadge from '../../components/uni-ui/uni-badge/uni-badge.vue'
	export default{
		components:{
			uniBadge
		},
		props:{
			item:Object,
			index:Number
		}
	}
</script>

<style>
	.text-light-muted {
		color: #a9a4a7;
	}
</style>
