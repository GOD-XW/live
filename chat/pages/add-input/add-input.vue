<template>
	<view>
		<uni-nav-bar left-icon="back" statusBar :border="false" @clickLeft="back" >
			<view style="display: flex;align-content: center;justify-content: center;width: 100%;">所有人可见
				<text class="iconfont icon-fenxiang"></text>
			</view>
		</uni-nav-bar>
		<!-- 文本域 -->
		<textarea v-model="content" placeholder="说一句话吧" style="width: 100%;padding:10rpx;letter-spacing: 2rpx;" />
		<!-- 多图上传 -->
		<upload-image ref="uploadImage" @change="changeImage" :list="imageList" :show="show"></upload-image>
		<!-- 底部操作条 -->
		<view class="fixed-bottom">
			<view class="iconfont icon-fenxiang foot-btn animate__animated " hover-class="animate__jello"></view>
			<view class="iconfont icon-fenxiang foot-btn animate__animated" hover-class="animate__jello"></view>
			<view class="iconfont icon-fenxiang foot-btn animate__animated" hover-class="animate__jello"
			@click="iconClickEvent('uploadImage')">
			</view>
			<view class="font animate__animated"  hover-class="animate__jello">发送</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue";
	import uploadImage from '@/components/common/upload-image.vue';
	export default {
		components: {
			uniNavBar,
			uploadImage
		},
		data() {
			return {
				content:"",
				imageList:[],
				showBack:false
			}
		},
		computed:{
			show(){
				return this.imageList.length>0
			}
		},
		// 监听返回
		onBackPress() {
			if((this.content !== '' || this.imageList.length>0) && !this.showBack){
				uni.showModal({
					content: '是否保存为草稿',
					showCancel: true,
					cancelText: '不保存',
					confirmText: '保存',
					success: res => {
						if(res.confirm)
						 {
							this.store() 
						 }
						 else{
							 uni.removeStorage({
							 	key:'add-input'
							 })
						 }
						uni.navigateBack({
							delta: 1
						});
					},
				});
				this.showBack=true
				return true
			}
		},
		//页面加载
		onLoad() {
			uni.getStorage({
				key:"add-input",
				success: (res) => {
					if(res.data){
						let result=JSON.parse(res.data)
						this.content=result.content
						this.imageList=result.imageList
					}
				}
			})
		},
		methods: {
			//底部图片点击事件
			iconClickEvent(e){
				switch(e){
					case 'uploadImage':
					this.$refs.uploadImage.chooseImage()
					break;
				}
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			//保存
			store(){
				//保存本地存储
				uni.setStorage({
					key:'add-input',
					data:JSON.stringify({
						content:this.content,
						imageList:this.imageList
					})
				})
			},
			// 选中图片
			changeImage(e){
				this.imageList=e
			}
		}
	}
</script>

<style>
	.fixed-bottom{
		position: fixed;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 5;
		background-color: #FFFFFF;
		height: 85rpx;
		display: flex;
		text-align: center;
	}
	.font{
		background-color: #ff4a6a;
		color: #FFFFFF;
		width: 100rpx;
		height: 50rpx;
		font-size: 24rpx;
		text-align: center;
		line-height: 50rpx;
		border-radius:8rpx;
		margin-left: auto;
		margin-right: 20rpx;
	}
	.foot-btn{
		width: 100rpx;
		height:100rpx;
		display: flex;
		justify-content: center;
		align-content: center;
		font-size: 40rpx;
	}
</style>
