<template>
	<view>
		<!-- 帖子详情信息 -->
		<common-list :item="info" isdetail 
		@doComment='doComment' 
		@doShare="doShare"
		@follow="follow"
		@doSupport="doSupport">
			<view>{{info.content}}</view>
			<view>
				<image v-for ="(item,index) in info.images" :key="index" :src="item.url" @click="preview(index)"
				style="width:96%;margin:0 2%;"></image>
			</view>
		</common-list>
		<divider></divider>
		<!-- 评论 -->
		<view style="display: flex;padding:20rpx;">
			<image src="../../static/logo.png" style="width: 50rpx;height: 50rpx;border-radius: calc(50%);"></image>
			<view style="display: flex;flex:1;flex-direction: column;position: relative;margin-left: 20rpx;">
				<text style="color: #007AFF;font-size: 20rpx;">小猫咪</text>
				<view>支持国产，支持DCloud</view>
				<text style="font-size: 20rpx;color: #a5a5a5;">2天前</text>
				<text style="position: absolute;top:68%;right: 20rpx;font-size: 20rpx;color: #a5a5a5;">5回复</text>
			</view>
		</view>
		<!-- 弹窗 -->
		<more-share ref="share"></more-share>
		<!-- 占位 -->
		<view style=" height: 100rpx;"></view>
		<bottom-input @submit="submit"></bottom-input>
	</view>
</template>

<script>
	import commonList from '@/components/common/common-list.vue';
	import bottomInput from '@/components/common/botton-input.vue';
	import moreShare from '@/components/common/more-share.vue';
	export default {
		components:{
			commonList,
			bottomInput,
			moreShare
		},
		data() {
			return {
				
				//当前帖子信息
				info: {
					username: "昵称",
					userpic: "../../static/me.png",
					newstime: "时间2020.02.02",
					isFollow: false,
					title: "我是标题1",
					titlepic: "../../static/xj.jpg",
					support: {
						type: "support",
						support_count: 1,
						unsupport_count: 2
					},
					comment_count: 0,
					share_num: 2,
					content:"uniapp仿微信小程序开发",
					images:[{
						url:'../../static/lb1.jpg'
					},{
						url:'../../static/lb2.jpg'
					}]
				},
			}
		},
		onLoad(e) {
			//初始化
			if (e.detail) {
				this.__init(JSON.parse(e.detail))
			}
		},
		computed:{
			imagesList(){
				return this.info.images.map(item=>item.url)
			}
		},
		onNavigationBarButtonTap() {
			this.$refs.share.open()
		},
		onBackPress() {
			this.$refs.share.close()
		},
		methods: {
			__init(data) {
				//修改标题
				uni.setNavigationBarTitle({
					title: data.title
				})
			},
			// 预览图片
			preview(index){
				uni.previewImage({
							current:index,
				            urls: this.imagesList,
				        });
			},
			//提交评论
			submit(data){
				console.log(data)
			},
			//点击评论
			doComment(){
				
			},
			// 点击分享
			doShare(){
				
			},
			// 关注
			follow(){
				this.info.isFollow=true
				uni.showToast({
					title:"关注成功"
				});
			},
			// 顶踩操作
			doSupport(e){
				let msg=e.type==='support'?'顶':'踩'
				//之前操作过
				if(this.info.support.type===e.type){
					return uni.showToast({
						title: '已经操作过了',
						icon:'none'
					});
				}
				//之前没有操作过
				if(this.info.support.type===""){
					this.info.support[e.type+'_count']++
					
				}else if(this.info.support.type==="support" && e.type==="unsupport"){
					//顶-1
					this.info.support.support_count--;
					//踩+1
					this.info.support.unsupport_count++;
				}else if(this.info.support.type==="unsupport" && e.type==="support"){
					//顶+1
					this.info.support.support_count++;
					//踩-1
					this.info.support.unsupport_count--;
				}
				this.info.support.type=e.type
				uni.showToast({
					title: msg
				});
			}
		}
	}
</script>

<style>

</style>
