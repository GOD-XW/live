<template>
	<view style="width: 750rpx;margin-top: 20rpx;">
		<view style="display: flex;width: 100%;height: 100rpx;position: relative;">
			<image :src="item.userpic" @click="openSpace"
			style="width: 70rpx;height: 70rpx;border-radius: 50%;margin: 15rpx 0 0 10rpx;"></image>
			<view style="display: flex;flex-direction: column;margin:15rpx;">
				<view style="font-size: 8px;">{{item.username}}</view>
				<view style="font-size: 8px;color: #888888;">{{item.newstime}}</view>
			</view>
			<view @click="follow" v-if="!item.isFollow"
			class="animate__animated " hover-class="animate__jello" 
			style="width: 100rpx;height: 50rpx;background-color: #fd5f6c;color: #FFFFFF;text-align: center;line-height: 50rpx;border-radius: 8rpx;position: absolute;left:85%;top: 25rpx;">
				关注</view>
		</view>
		<view style="margin: 10rpx;" @click="openDetail">{{item.title}}</view>
		<!-- 帖子详情 -->
		<slot>
			<image v-if="item.titlepic" :src="item.titlepic" 
			style="width: 730rpx;height:300rpx;margin-left: 10rpx;border-radius: 10rpx;" @click="openDetail">
			</image>
		</slot>
		<view style="display: flex;align-items: center;">
			<!-- 顶 -->
			<view style="flex: 1;display: flex;align-items: center;justify-content: center; " 
			class="animate__animated animate__faster " hover-class="animate__jello text-main" 
			@click="doSupport('support')"
			:class="item.support.type==='support' ? 'support-active':''">
				<text class="iconfont icon-dianzan" style="margin-right: 5rpx;"></text>
				<text>{{item.support.support_count>0?item.support.support_count:'顶'}}</text>
			</view>
			<!-- 踩 -->
			<view style="flex: 1;display: flex;align-items: center;justify-content: center;" 
			class="animate__animated animate__faster " hover-class="animate__jello text-main" 
			@click="doSupport('unsupport')"
			:class="item.support.type==='unsupport' ? 'support-active':''">
				<text class="iconfont icon-zan" style="margin-right: 5rpx;"></text>
				<text>{{item.support.unsupport_count>0?item.support.unsupport_count:'踩'}}</text>
			</view>
			<view style="flex: 1;display: flex;align-items: center;justify-content: center;"
			class="animate__animated animate__faster " hover-class="animate__jello text-main" @click="doComment">
				<text class="iconfont icon-xinxi" style="margin-right: 5rpx;"></text>
				<text>{{item.comment_count > 0? item.comment_count:'评论'}}</text>
			</view>
			<view style="flex: 1;display: flex;align-items: center;justify-content: center;"
			class="animate__animated animate__faster " hover-class="animate__jello text-main" @click="doShare">
				<text class="iconfont icon-fenxiang" style="margin-right: 5rpx;"></text>
				<text>{{item.share_num>0?item.share_num:'分享'}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			item:Object,
			index:{
				type:Number,
				default:-1
				},
			isdetail:{
				type:Boolean,
				default:false 
			}
		},
		methods:{
			//打开个人空间
			openSpace(){
				console.log("打开个人空间")
			},
			//关注
			follow(){
				this.$emit('follow',this.index)
			},
			//详情
			openDetail(){
				//处于详情中
				if(this.isdetail) return;
				uni.navigateTo({
					url:"../../pages/detail/detail?detail="+JSON.stringify(this.item)
				})
			},
			//顶踩操作
			doSupport(type){
				this.$emit('doSupport',{
					type:type,
					index:this.index
				})
			},
			//评论
			doComment(){
				if(this.isdetail){
					return this.openDetail()
				}
				this.$emit('doComment')
			},
			//分享
			doShare(){
				if(this.isdetail){
					return this.openDetail()
				}
				this.$emit('doShare')
			}
		}
	}
</script>

<style>
	.support-active{
		color:#FF4A6A ;
		
	}
</style>
