<template>
	<view>
		<topic-info :info="info"></topic-info>
		<divider></divider>
		<view style="padding: 20rpx;display: flex;align-items: center;
		border-bottom: 1rpx solid #f0edee;" hover-class="bg-light"
		 v-for="(item,index) in hotList" :key="index">
			<text class="iconfont icon-fenxiang text-main"></text>
			<text style="font-size: 35rpx;font-weight:400;" class="text-ellipsis">{{item.title}}</text>
		</view>
		<divider></divider>
		<!-- tab -->
		<view style="display: flex;align-items: center;text-align: center;padding: 20rpx 0;">
			<view :class="index===tabIndex? 'default text-main': 'news'"
			 v-for="(item,index) in tabBars" :key="index" @click="changeTab(index)">
			 {{item.name}}
			 </view>
		</view>
		<!-- 列表 -->
		<template v-if="lisData.length>0">
		<block v-for="(item,index) in lisData" :key="index">
			<common-list :index="index" :item="item"></common-list>
			<divider></divider>
		</block>
		<!-- 上拉加载 -->
		<load-more :loadmore="loadtext"></load-more>
		</template>
		<template v-else>
			<no-thing></no-thing>
		</template>
		<!-- 上拉加载 -->
		
	</view>
</template>

<script>
	const demo = [{
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
	import topicInfo from '@/components/topic-detail/topic-info.vue';
	import commonList from '@/components/common/common-list.vue';
	import noThing from '@/components/common/no-thing.vue';
	import loadMore from '../../components/common/load-more.vue';
	export default {
		components: {
			topicInfo,
			commonList,
			noThing,
			loadMore
		},
		data() {
			return {
				info: {
					"cover": "../../static/lb1.jpg",
					"desc": "话题描述",
					"news_count": 10,
					"title": "#话题名称#",
					"today_count": 0
				},
				hotList: [{
					title:"【新人必读】uni-app实战第二季商城类目开发"
				},
				{
					title:"【新人必读】uni-app实战第三季仿微信项目开发"
				}],
				
				tabIndex:0,
				tabBars:[{
					name:"默认"
				},
				{
					name:"最新"
				}
				],
				//默认
				list1:[],
				loadtext1:"上拉加载更多",
				//最新
				list2:[],
				loadtext2:"上拉加载更多",
			}
		},
		computed:{
			//当前列表数据
			lisData(){
				if(this.tabIndex===0){
					return this.list1
				}
				return this.list2
			},
			//当前上拉加载
			loadtext(){
				if(this.tabIndex===0){
					return this.loadtext1
				}
					return this.loadtext2
			}
		},
		onLoad(e) {
			if (e.detail) {
				let res = JSON.parse(e.detail)
				console.log(res);
			}
			this.list1=demo
		},
		onReachBottom() {
			this.loadmore()
		},
		methods: {
			changeTab(index){
				this.tabIndex=index
			},
			//上拉加载更多
			loadmore(){
				//拿到当前列表
				let index=this.tabIndex
				//判断是否处于可加载状态
				if(this.loadtext!=='上拉加载更多') return;
				//设置上拉加载状态处于加载中...
				this['loadtext'+(index+1)]='加载中...'
				setTimeout(()=>{
					this['list'+(index+1)]=[...this['list'+(index+1)],...this['list'+(index+1)]]
					this['loadtext'+(index+1)]='上拉加载更多'
					},2000)
			}
		}
	}
</script>

<style>
	.text-ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		lines: 1;
	}

	.bg-light {
		background-color: #ebebeb;
	}
	.default{
		flex: 1;
		font-size: 35rpx;
		font-weight: bold;
	}
	.news{
		flex: 1;
		font-size: 30rpx;
	}
</style>
