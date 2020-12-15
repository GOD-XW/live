<template>
	<view style="position:fixed;left: 0;bottom:120rpx;right: 0;">
		<scroll-view scroll-y="true" style="height: 300rpx; width: 520rpx;" scroll-with-animation class="pl-3"
		 :scroll-into-view="ScrollIntoView">
			<view :id="'dm'+item.id" class="flex justify-start align-start rounded p-2 mb-2" style="background-color: rgba(255,255,255,0.125);"
			 v-for="(item,index) in list" :key="index">
				<text class="font-md text-danger ">{{item.name}}：</text>
				<text class="font-md text-white">{{item.content}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				ScrollIntoView: ""
			}
		},
		mounted() {
			// let id = 1
			// setInterval(() => {
			// 	this.list.push({
			// 		id:id,
			// 		name: "张五" + id,
			// 		content: "你真丑" + id
			// 	})
			// 		id++
			// 	this.toBottom()
			// 	console.log(this.list)
			// }, 2000)
		},
		methods: {
			// 发送弹幕
			send(data){
				this.list.push(data)
					this.toBottom()
			},
			toBottom() {
				setTimeout(() => {
					let len = this.list.length
					if (len > 0 && this.list[len - 1]) {
						this.ScrollIntoView = "dm" + this.list[len - 1].id
					}
				}, 200)

			}
		}
	}
</script>

<style>
</style>
