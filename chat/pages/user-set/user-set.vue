<template>
	<view>
		<uni-list-item title="账号与安全" @click="open('user-password')"></uni-list-item>
		<uni-list-item title="绑定邮箱" @click="open('user-email')"></uni-list-item>
		<uni-list-item title="资料编辑" @click="open('user-userinfo')"></uni-list-item>
		<uni-list-item title="清除缓存"></uni-list-item>
		<uni-list-item title="意见反馈" @click="open('user-feedback')"></uni-list-item>
		<uni-list-item title="关于社区"@click="open('about')"></uni-list-item>
		<view style="padding: 20rpx 30rpx;">
			<button type="primary" class="bg-main" style="color: #FFFFFF;border-radius: 50rpx;border: 0;">退出登录</button>
		</view>
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
				
			}
		},
		methods: {
			open(path){
				uni.navigateTo({
					url:`../${path}/${path}`
				});
			}
		}
	}
</script>

<style>

</style>
