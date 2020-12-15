<template>
	<view style="height: 100rpx;" class="fixed-bottom">
		<input type="text" v-model="content" class="border" placeholder="文明发言" :adjust-position="false" @confirm="submit">
		<view class="iconfont icon-xinxi animate__animated " hover-class="animate__jello text-main" style="width: 100rpx;
		display: flex;align-items: center;justify-content: center;font-size: 40rpx;"
		 @click="submit">
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				content:""
			}
		},
		methods:{
			submit(){
				//是否为空
				if (this.content === '') {
					return uni.showToast({
						title: '消息不能为空',
						icon: 'none'
					});
				}
				this.$emit('submit',this.content)
				//清空输入框
				this.content = ""
			}
		}
	}
</script>

<style>
	.fixed-bottom {
		position: fixed;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 1030;
		display: flex;
		align-items: center;
		border-top: 1rpx solid #e3e3e3;
		background-color: #FFFFFF;
	}
	
	.border {
		/* border: 1rpx solid #555555; */
		flex: 1;
		border-radius: 5rpx;
		background-color: #f4f4f4;
		margin-left: 20rpx;
		padding: 5rpx;
	}
</style>
