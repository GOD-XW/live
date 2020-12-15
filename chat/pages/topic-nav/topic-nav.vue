<template>
	<view>
		<!-- 顶部导航栏 -->
		<scroll-view scroll-x :scroll-into-view="scrollInto" scroll-with-animation class="scroll-row" style="height:100rpx;">
			<view v-for="(item,index) in tabBars" :key="index" class="scroll-row-item font-md " style="padding: 5rpx 40rpx ;"
			 :id="'tab'+index" :class="tabIndex===index?'text-main font-lg font-weight-bold':''" @click="changeTab(index)">{{item.name}}</view>
		</scroll-view>

		<swiper :duration="500" :current="tabIndex" @change="onChangeTab" :style="'height:'+scrollH+'px;'">
			<swiper-item v-for="(item,index) in newsList" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'" @scrolltolower="loadmore(index)">
					<template v-if="item.list.length>0">
						<!-- 列表 -->
						<block v-for="(item2,index2) in item.list" :key="index2">
							<topic-list :item="item2" :index="index2" ></topic-list>
						</block>
						<!-- 上拉加载 -->
						<load-more :loadmore='item.loadmore'></load-more>
					</template>
					<template v-else>
						<no-thing></no-thing>
					</template>

				</scroll-view>
			</swiper-item>
		</swiper>

	</view>
</template>

<script>
	const demo = [{
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
				}
	];
	
	import loadMore from '@/components/common/load-more.vue'
	import topicList from '@/components/news/topic-list.vue'
	// import divider from '../../components/common/divider.vue';（已引入全局组件）
	export default {
		components: {
			topicList,
			loadMore
			// , divider
		},
		data() {
			return {
				now: 0,
				//列表高度
				scrollH: 600,
				//顶部选项卡
				tabIndex: 0,
				scrollInto: "",
				tabBars: [{
						name: '关注',
					},
					{
						name: '推荐',
					},
					{
						name: '体育',
					},
					{
						name: '热点',
					},
					{
						name: '财经',
					},
					{
						name: '娱乐',
					},
					{
						name: '军事',
					},
					{
						name: '历史',
					}
				],
				newsList: [],
			}
		},
		//监听点击导航栏搜索框
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
				url:'../search/search',
			})
		},
		//监听按钮导航
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url:'../add-input/add-input'
			})
		},
		onLoad() {
			uni.getSystemInfo({
				success: res => {
					this.scrollH = res.windowHeight - uni.upx2px(100)
				}
			})
			//根据选项生成列表
			this.getData()
		},
		methods: {
			getData() {
				var arr = []
				for (let i = 0; i < this.tabBars.length; i++) {
					let obj = {
						//上拉加载更多，加载中，没有更多了
						loadmore: "上拉加载更多",
						list: []
					}
					// obj.list = this.list;
					if (i < 2) {
						obj.list = demo
					}
					arr.push(obj)
				}
				this.newsList = arr
			},
			//监听滑动
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			},
			//切换选项卡
			changeTab(index) {
				this.now = index;
				if (this.tabIndex === index) {
					return;
				}
				this.tabIndex = index
				//滚动到指定元素
				this.scrollInto = 'tab' + index
			},
			//关注
			follow(e) {
				this.newsList[this.now].list[e].isFollow = true;
				uni.showToast({
					title: '已关注',
				});
				console.log("关注")
			},
			//顶踩操作
			doSupport(e) {
				//拿到当前对象
				let item = this.newsList[this.now].list[e.index];
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
			//上拉加载更多
			loadmore(index) {
				let item = this.newsList[index];
				//判断是否处于可加载状态（上拉加载更多）
				if (item.loadmore !== '上拉加载更多') return;
				//修改当前列表加载状态
				item.loadmore = '加载中...';
				//模拟数据请求
				setTimeout(() => {
					//加载数据
					item.list = [...item.list, ...item.list];
					//恢复加载状态
					item.loadmore = '上拉加载更多...';
				}, 2000)
			}
		}
	}
</script>

<style>
	.scroll-row {
		width: 100%;
		white-space: nowrap;
	}

	.scroll-row-item {
		display: inline-block !important;
	}

	.font-md {
		font-size: 35rpx;
	}

	.font-lg {
		font-size: 50rpx;
	}

	.font-weight-bold {
		font-weight: bold;
	}
</style>
