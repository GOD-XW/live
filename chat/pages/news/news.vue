<template>
	<view>
		<!-- 导航 -->
		<uni-nav-bar :border="false" :statusBar="true" :fixed="true">
			<view style="display: flex;align-items: center;justify-content: center;font-weight: bold;width: 100%;">
				<view style="margin:0 10rpx;" :class="tabBarIndex===index? 'font-color':'font-color1'" v-for="(item,index) in tabBar"
				 :key="index" @click="changeTab(index)">{{item.name}}</view>
			</view>
			<text class="iconfont icon-fatie right" slot="right" style="font-size: 35rpx;" @click="right"></text>
		</uni-nav-bar>


		<swiper :duration="500" :style="'height:'+scrollH+'px;'" :current="tabBarIndex" @change="onChangeTab">
			<!-- 关注 -->
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'" @scrolltolower="loadmoreEvent">
					<block v-for="(item,index) in list" :key="index">
						<common-list :item="item" :index="index" @doSupport="doSupport"></common-list>
						<divider></divider>
					</block>
					<load-more :loadmore="loadmore"></load-more>
				</scroll-view>
			</swiper-item>

			<!-- 话题 -->
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'">
					<!-- 热门分类 -->
					<hot-cate :hotCate="hotCate"></hot-cate>
					<!-- 搜索框 -->
					<view style="padding: 20rpx;">
						<view class="search" @click="openSearch">
							<view class="iconfont
							 icon-xingtaiduICON_sousuo---copy" style="margin-right: 20rpx;">
							</view>搜索话题
						</view>
					</view>
					<!-- 轮播图 -->
					<swiper :indicator-dots="true" :autoplay="true" class="carousel" style="padding:0 2% 10rpx 2%;width: 96%;">
						<swiper-item>
							<image src="../../static/lb1.jpg" class="carousel"></image>
						</swiper-item>
						<swiper-item>
							<image src="../../static/lb2.jpg" class="carousel"></image>
						</swiper-item>
						<swiper-item>
							<image src="../../static/xj.jpg" class="carousel"></image>
						</swiper-item>
					</swiper>
					<divider></divider>
					<!-- 最近更新 -->
					<view style="font-size: 30rpx;margin-left: 20rpx;">最近更新</view>
					<!-- 话题列表组件 -->
					<block v-for="(item,index) in topList" :key="index">
						<topic-list :index="index" :item="item"></topic-list>
					</block>
					
				</scroll-view>
			</swiper-item>
		</swiper>


	</view>
</template>

<script>
	const demo = [{
			username: "昵称",
			userpic: "../../static/me.png",
			newstime: "时间2020.02.02",
			isFollow: true,
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
			isFollow: true,
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
			isFollow: true,
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
	import uniNavBar from "@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue";
	import loadMore from '@/components/common/load-more.vue';
	import commonList from '@/components/common/common-list.vue';
	import hotCate from '@/components/news/hot-cate.vue';
	import divider from '@/components/common/divider.vue';
	import topicList from '@/components/news/topic-list.vue'
	export default {
		components: {
			uniNavBar,
			commonList,
			loadMore,
			hotCate,
			divider,
			topicList
		},
		data() {
			return {
				scrollH: 500,
				tabBarIndex: 0,
				tabBar: [{
						name: "关注"
					},
					{
						name: "话题"
					}
				],
				hotCate: [{
						name: "关注"
					},
					{
						name: "推荐"
					},
					{
						name: "体育"
					},
					{
						name: "热点"
					},
					{
						name: "财经"
					},
					{
						name: "娱乐"
					},
				],
				topList:[{
					cover:"../../static/logo.png",
					title:"#话题名称#",
					desc:"话题描述",
					today_count:0,
					news_count:10
				},
				{
					cover:"../../static/logo.png",
					title:"#话题名称#",
					desc:"话题描述",
					today_count:0,
					news_count:10
				},
				{
					cover:"../../static/logo.png",
					title:"#话题名称#",
					desc:"话题描述",
					today_count:0,
					news_count:10
				},
				{
					cover:"../../static/logo.png",
					title:"#话题名称#",
					desc:"话题描述",
					today_count:0,
					news_count:10
				},
				{
					cover:"../../static/logo.png",
					title:"#话题名称#",
					desc:"话题描述",
					today_count:0,
					news_count:10
				},
				{
					cover:"../../static/logo.png",
					title:"#话题名称#",
					desc:"话题描述",
					today_count:0,
					news_count:10
				},{
					cover:"../../static/logo.png",
					title:"#话题名称#",
					desc:"话题描述",
					today_count:0,
					news_count:10
				},
				{
					cover:"../../static/logo.png",
					title:"#话题名称#",
					desc:"话题描述",
					today_count:0,
					news_count:10
				},
				{
					cover:"../../static/logo.png",
					title:"#话题名称#",
					desc:"话题描述",
					today_count:0,
					news_count:10
				},
				{
					cover:"../../static/logo.png",
					title:"#话题名称#",
					desc:"话题描述",
					today_count:0,
					news_count:10
				}],
				//关注列表
				list: [],
				//上拉加载更多，加载中，没有更多了
				loadmore: "上拉加载更多"
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: res => {
					this.scrollH = res.windowHeight - res.statusBarHeight - 44
				}
			})
			//加载测试数据
			this.list = demo
		},
		methods: {

			changeTab(index) {
				this.tabBarIndex = index
			},
			right() {
				uni.navigateTo({
					url: '../add-input/add-input'
				})
			},
			//滑动
			onChangeTab(e) {
				// console.log(e)
				this.tabBarIndex = e.detail.current
			},
			//顶踩
			doSupport(e) {
				//拿到当前对象
				let item = this.list[e.index];
				let msg = e.type === 'support' ? '顶' : '踩'
				//之前没有操作过
				if (item.support.type === '') {
					item.support[e.type + '_count']++
				}
				//之前顶了
				else if (item.support.type === 'support' && e.type === 'unsupport') {
					//顶-1
					item.support.support_count--;
					//踩+1
					item.support.unsupport_count++;
				}
				//之前踩了
				else if (item.support.type === 'unsupport' && e.type === 'support') {
					//顶+1
					item.support.support_count++;
					//踩-1
					item.support.unsupport_count--;
				}
				item.support.type = e.type
				uni.showToast({
					title: msg + '成功'
				});
			},
			//上拉加载
			loadmoreEvent() {
				//验证当前是否处于可加载状态
				if (this.loadmore !== '上拉加载更多') return;
				//设置加载状态
				this.loadmore = "加载中...";
				// 模拟数据请求
				setTimeout(() => {
					// 加载数据
					// 设置加载状态
					this.list = [...this.list, ...this.list];
					//恢复加载状态
					this.loadmore = "上拉加载更多";
				}, 2000)
			},
				openSearch(){
					uni.navigateTo({
						url:"../search/search?type=topic",
					})
				}
		}
	}
</script>

<style>
	.font-color {
		color: #ff4A6A;
		font-size: 35rpx;
	}

	.font-color1 {
		color: #9a9a9a;
		font-size: 30rpx
	}

	.search {
		background-color: #f8f8fc;
		border-radius: 10rpx;
		display: flex;
		text-align: center;
		justify-content: center;
		color: #8c8c8c;
	}
	.carousel{
		width: 100%;
		height:300rpx;
		border-radius:10rpx;
	}
	.text{
		font-size: 24rpx;
		color: #c3c2bd;
	}
</style>
