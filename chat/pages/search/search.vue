<template>
	<view>
		<!-- 搜索历史 -->
		<template v-if="searchList.length===0">
			<view style="margin: 10rpx 0 10rpx 20rpx;font-size:30rpx;">搜索历史</view>
			<view style="display: flex;flex-wrap: wrap;width: 80%;">
				<view style=" height: 50rpx;border: 1rpx solid #969896;
		margin:20rpx;text-align:center;line-height: 50rpx;font-size: 24rpx;padding:8rpx;"
				 hover-class="bg-light" @click="clicktapSearchHistory(item)" v-for="(item,index) in list" :key="index">
					{{item}}
				</view>
			</view>
		</template>
		<!-- 数据列表 -->
		<template v-else>
			<block v-for="(item,index) in searchList" :key="index">
				<template v-if="type==='post'">
					<!-- 帖子 -->
				<common-list :item="item" :index="index"></common-list>
				</template>
				<template v-else-if="type==='topic'">
					<!-- 话题 -->
				<topic-list :item="item" :index="index"></topic-list>
				</template>
				<template v-else>
					<!-- 用户 -->
				<user-list :item="item" :index="index"></user-list>
				</template>
				
			</block>
		</template>
	</view>
</template>

<script>
	//测试数据
	const demo1 = [{
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
		},
		{
			username: "昵称",
			userpic: "../../static/you.png",
			newstime: "时间2020.02.08",
			isFollow: false,
			title: "我是标题2",
			titlepic: "",
			support: {
				type: "unsupport",
				support_count: 2,
				unsupport_count: 1
			},
			comment_count: 5,
			share_num: 6,
		},
		{
			username: "昵称",
			userpic: "../../static/you.png",
			newstime: "时间2020.02.08",
			isFollow: false,
			title: "我是标题3",
			titlepic: "../../static/xj.jpg",
			support: {
				type: "",
				support_count: 2,
				unsupport_count: 1
			},
			comment_count: 5,
			share_num: 6,
		}
	];
	const demo2 = [
		{
			cover: "../../static/logo.png",
			title: "#话题名称#",
			desc: "话题描述",
			today_count: 0,
			news_count: 10
		}, {
			cover: "../../static/logo.png",
			title: "#话题名称#",
			desc: "话题描述",
			today_count: 0,
			news_count: 10
		},
		{
			cover: "../../static/logo.png",
			title: "#话题名称#",
			desc: "话题描述",
			today_count: 0,
			news_count: 10
		},
		{
			cover: "../../static/logo.png",
			title: "#话题名称#",
			desc: "话题描述",
			today_count: 0,
			news_count: 10
		},
	];
	const demo3 = [{
			avatar: "/static/me.png",
			username: "昵称",
			sex: 1,
			age: 16,
			isFollow: true
		},
		{
			avatar: "/static/you.png",
			username: "昵称",
			sex: 2,
			age: 24,
			isFollow: false
		},
		{
			avatar: "/static/you.png",
			username: "昵称",
			sex: 0,
			age: 24,
			isFollow: true
		}
	];
	import commonList from '@/components/common/common-list.vue';
	import topicList from '@/components/news/topic-list.vue';
	import userList from "@/components/user-list/user-list.vue";
	export default {
		components: {
			commonList,
			topicList,
			userList
		},
		data() {
			return {
				searchText: "",
				list: ['uni-app开发商城类', '实战教程', 'vuex实战', 'uniapp实战', 'vue', 'uni-app微信实战开发'],
				//搜索结果
				searchList: [],
				//搜索类型
				type: "post"
			}
		},
		//监听原生原生导航输入
		onNavigationBarSearchInputChanged(e) {
			this.searchText = e.text
		},
		//监听点击导航搜索按钮
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				this.searchEvent()
			}
		},
		onLoad(e) {
			if (e.type) {
				this.type = e.type
			}
			let pageTitle = '帖子'
			switch (this.type) {
				case 'post':
					pageTitle = '帖子'
					break;
				case 'topic':
					pageTitle = '话题'
					break;
				case 'user':
					pageTitle = '用户'
					break;
			}
			//修改搜索占位
			// #ifdef APP-PLUS
			let currentWebview = this.$mp.page.$getAppWebview();
			let tn = currentWebview.getStyle().titleNView;
			tn.searchInput.placeholder = '搜索' + pageTitle;
			currentWebview.setStyle({
				titleNView: tn
			})
			// #endif

		},
		methods: {
			//点击搜索事件
			clicktapSearchHistory(text) {
				this.searchText = text
				this.searchEvent()
			},
			//搜索事件
			searchEvent() {
				//收起键盘
				uni.hideKeyboard()
				//处于loading状态
				uni.showLoading({
					title: '加载中...',
					mask: false
				})
				//请求搜索
				setTimeout(() => {
					switch (this.type) {
						case 'post':
							this.searchList = demo1
							break;
						case 'topic':
							this.searchList = demo2
							break;
						case 'user':
							this.searchList = demo3
							break;
					}
					// 隐藏loading
					uni.hideLoading()
				}, 2000)
			}
		},

	}
</script>

<style>
	.bg-light {
		background-color: #f8f9fa;
		/* background-color: #fa2509; */
	}
</style>
