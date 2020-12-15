<template>
	<view>
		<input type="text" class="uni-input" value="" placeholder="请输入你要绑定的邮箱" v-model="email" />
		<input type="text" class="uni-input" value="" placeholder="请输入密码" v-model="password" />
		<view style="padding: 20rpx 30rpx;">
			<button type="primary" class="bg-main" style="color: #FFFFFF;border-radius: 50rpx;border: 0;" :disabled="disabled"
			 :class="disabled ? 'bg-main-disabled':''" @click="submit">绑定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				email: '',
				password: ''
			}
		},
		computed: {
			disabled() {
				return this.password === "" || this.email === ""
			}
		},
		methods: {
			check() {
				let rule=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
				if(!rule.test(this.email)){
					uni.showToast({
						title:"邮箱格式错误",
						icon:"none"
					});
					return false;
				}
				return true
			},
			submit() {
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
