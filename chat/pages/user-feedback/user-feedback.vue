<template>
	<view>
		<uni-section title="配置图标" type="line"></uni-section>
		<uni-collapse>
			<uni-collapse-item title="标题文字" showAnimation>
				<text class="content">折叠内容主体，可自定义内容及样式</text>
			</uni-collapse-item>
			<uni-collapse-item title="标题文字" showAnimation>
				<text class="content">折叠内容主体，可自定义内容及样式</text>
			</uni-collapse-item>
		</uni-collapse>
		<view style="padding: 20rpx 30rpx;">
			<button type="primary" class="bg-main" style="color: #FFFFFF;border-radius: 50rpx;border: 0;">意见反馈</button>
		</view>
	</view>
</template>

<script>
	import uniCollapse from "@/components/uni-ui/uni-collapse/uni-collapse.vue";
	import uniCollapseItem from "@/components/uni-ui/uni-collapse-item/uni-collapse-item.vue";
	export default {
		components: {
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {

			}
		},
		methods: {}
	}
</script>

<style>
	.content {
		padding: 15px;
		font-size: 14px;
		line-height: 20px;
		background-color: #f9f9f9;
		color: #666;
	}
</style>
