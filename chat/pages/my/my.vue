<template>
	<view>
		<view class="top" hover-class="hover">
			<image src="../../static/me.png" style="width:100rpx;height: 100rpx;border-radius: calc(50%);"></image>
			<view style="display: flex;flex-direction: column;flex: 1;padding: 0 20rpx;">
				<text style="font-size: 30rpx;font-weight: bold;">昵称</text>
				<text style="font-size: 24rpx;color:#8F8F94;">总帖子10 今日发帖0</text>
			</view>
			<text style="font-size: 40rpx;color: #a7a7a7;">&gt;</text>
		</view>
		<view style="display: flex;align-items: center;padding:20rpx 30rpx;">
			<view style="display: flex;flex-direction: column;align-items: center;justify-content: center;flex: 1;"
			v-for="(item,index) in myData" :key="index">
				<text style="font-weight: bold;font-size: 30rpx;">{{item.num}}</text>
				<text style="font-size: 24rpx;color: #8C8C8C;">{{item.name}}</text>
			</view>
		</view>
		<view style="padding:20rpx 30rpx;">
		<image src="../../static/xj.jpg" mode="aspectFill" 
		style="height: 170rpx;width: 100%;border-radius:30rpx;"></image>
		</view>
		
		<uni-list-item title="浏览历史" showExtraIcon>
			<text slot="icon" class="iconfont icon-fenxiang"></text>
		</uni-list-item>
		<uni-list-item title="社区认证" showExtraIcon>
			<text slot="icon" class="iconfont icon-fenxiang"></text>
		</uni-list-item>
		<uni-list-item title="审核帖子" showExtraIcon>
			<text slot="icon" class="iconfont icon-fenxiang"></text>
		</uni-list-item>
	</view>
</template>

<script>
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
	export default {
		components:{
			uniListItem
		},
		data() {
			return {
				myData:[{
					name:'帖子',
					num:1
				},
				{
					name:'动态',
					num:2
				},
				{
					name:'评论',
					num:3
				},
				{
					name:'粉丝',
					num:4
				}]
			}
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url:"../user-set/user-set"
			})
		},
		methods: {
			
		}
	}
</script>

<style>
.top{
	display: flex;
	align-items: center;
	padding: 20rpx;
}
.hover{
	background-color: #f7f7f7;
}
</style>
