<template>
	<view>
		<view style="display: flex; justify-content: space-between;">
			<view style="margin-left: 20rpx;font-size: 30rpx;">
				热门分类
			</view>
			<view style="display: flex;color: #ababaa;margin-right: 20rpx;" @click="openMore">
				<view style="margin-right: 10rpx;" class="animate__animated
			" hover-class="animate__jello" >更多</view>
				<view>&gt;</view>
			</view>
		</view>
		<!-- 关注推荐... -->
		<view style="display: flex;flex-wrap: nowrap;
		text-align: center;justify-content: space-between;padding: 20rpx 15rpx;border-bottom: 1rpx solid #ebebeb;">
			<view v-for="(item,index) in hotCate" :key="index" style="width:100rpx;
			background-color:skyblue;"class="animate__animated
			" hover-class="animate__jello" @click="openDetail(item)">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:['hotCate'],
		methods:{
			openMore(){
				uni.navigateTo({
					url:'../../pages/topic-nav/topic-nav',
				})
			},
			openDetail(){
				console.log("打开话题详情页");
			}
		},
	}
</script>

<style>
</style>
