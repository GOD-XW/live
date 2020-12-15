<template>
	<view>
		<input type="text" class="uni-input" placeholder="输入旧密码" v-model="oldpassword" />
		<input type="text" class="uni-input" placeholder="输入新密码" v-model="newpassword" />
		<input type="text" class="uni-input" placeholder="输入确认密码" v-model="renewpassword" />
		<view style="padding: 20rpx 30rpx;">
			<button type="primary" class="bg-main" style="color: #FFFFFF;border-radius: 50rpx;border: 0;" :disabled="disabled"
			 :class="disabled ? 'bg-main-disabled':''" @click="submit">设置</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldpassword: "",
				newpassword: "",
				renewpassword: ""
			}
		},
		computed: {
			disabled() {
				return this.oldpassword == '' || this.newpassword == '' || this.renewpassword == ''
			}
		},
		methods: {
			//验证
			check() {
				if (this.newpassword !== this.renewpassword) {
					uni.showToast({
						title: '两次密码不一致',
						icon: 'none'
					});
					return false
				}
				return true
			},
			submit(){
				if(!this.check()){
					return;
				}
				console.log("打印成功")
			}
		}
	}
</script>

<style>

</style>
