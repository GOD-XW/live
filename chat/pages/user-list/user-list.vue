<template>
	<view>
		<view style="display: flex;align-items: center;text-align: center;height: 100rpx;">
			<view :class="index===tabIndex? 'default text-main': 'news'" v-for="(item,index) in tabBars" :key="index" @click="changeTab(index)">
				{{item.name}} <text v-if="item.num>0" style="margin-left: 20rpx;">{{item.num}}</text>
			</view>
		</view>

		<!-- 列表 -->
		<swiper :duration="500" :current="tabIndex" @change="onChangeTab" :style="'height:'+scrollH+'px;'">
			<swiper-item v-for="(item,index) in newsList" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'" @scrolltolower="loadmore(index)">

					<template v-if="item.list.length>0">
						<!-- 列表 -->
						<block v-for="(item2,index2) in item.list" :key="index2">
							<!-- 列表样式 -->
							<user-list :item="item2" :index="index"></user-list>
						</block>
						<!-- 上拉加载 -->
						<load-more v-if="item.list.length>10" :loadmore='item.loadmore'></load-more>
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
			avatar: "/static/me.png",
			username: "昵称",
			sex: 1,
			age:16,
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
	import loadMore from '@/components/common/load-more.vue';
	import noThing from '@/components/common/no-thing.vue';
	import userList from '../../components/user-list/user-list.vue';
	export default {
		components: {
			loadMore,
			noThing,
			userList
		},
		data() {
			return {
				//列表高度
				scrollH: 600,
				tabIndex: 0,
				tabBars: [{
						name: "互关",
						num: 0
					},
					{
						name: "关注",
						num: 2
					},
					{
						name: "粉丝",
						num: 30
					}
				],
				newsList: []
			}
		},
		//监听搜索框
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: "../search/search?type=user",
			});
		},
		onNavigationBarButtonTap() {
			uni.navigateBack({
				delta: 1
			});
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
			changeTab(index) {
				this.tabIndex = index
			},
			//监听滑动
			onChangeTab(e) {
				this.changeTab(e.detail.current)
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
	.default {
		flex: 1;
		font-size: 35rpx;
		font-weight: bold;
	}

	.news {
		flex: 1;
		font-size: 30rpx;
	}

	
</style>
