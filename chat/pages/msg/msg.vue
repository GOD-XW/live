<template>
	<view>
		<template v-if="list.length>0">
		<block v-for="(item,index) in list" :key="index">
		<msg-list :index="index" :item="item"></msg-list>
		</block>
		</template>
		<template v-else>
			<no-thing></no-thing>
		</template>
		
		<!-- 弹出层 -->
		<uni-popup ref="popup" type="bottom" >
		<view class="text" style="border-bottom: 1rpx solid #efefef;" 
		hover-class="bg-light" @click="popupEvent('friend')">
			<text class="iconfont icon-xingtaiduICON_sousuo---copy text-T"></text>添加好友
		</view>
		<view class="text" hover-class="bg-light " @click="popupEvent('clear')">
			<text class="iconfont icon-fenxiang text-T"></text>清除列表
		</view>
		</uni-popup>
	</view>
</template>

<script>
	const demo=[{
					avatar:"/static/me.png",
					username:"uniapp",
					update_time:"1600322810",
					data:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
					noread:20,
				},
				{
					avatar:"/static/you.png",
					username:"uniapp",
					update_time:"1565856947",
					data:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
					noread:99,
				},
				{
					avatar:"/static/me.png",
					username:"uniapp",
					update_time:"1597479347",
					data:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
					noread:999,
				},
				{
					avatar:"/static/me.png",
					username:"uniapp",
					update_time:"1600157747",
					data:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
					noread:1099,
				}]
	import msgList from "@/components/msg/msg-list.vue";
	import noThing from "@/components/common/no-thing.vue";
	import uniPopup from "@/components/uni-ui/uni-popup/uni-popup.vue";
	export default {
		components:{
			msgList,
			noThing,
			uniPopup
		},
		data() {
			return {
				list:[],
			}
		},
		onLoad() {
			this.list=demo
		},
		//监听下拉刷新
		onPullDownRefresh() {
		this.refresh()
		},
		//监听原生导航按钮事件
		onNavigationBarButtonTap(e) {
			switch (e.index){
				case 0://左边
				uni.navigateTo({
					url:"../user-list/user-list",
					// animationType: 'pop-in',
					//  animationDuration: 200
				});
				this.$refs.popup.close()//关闭弹出层
					break;
				case 1://右边
				this.$refs.popup.open()
					break;
			}
		},
		methods: {
			refresh(){
				setTimeout(()=>{
					this.list=demo
					//停止下拉刷新
					uni.stopPullDownRefresh()
				},2000)
			},
			//弹出层选项点击事件
			popupEvent(e){
				switch(e){
					case 'friend':
					uni.navigateTo({
						url: '../search/search?type=user',
					});
					break;
					case 'clear':
					console.log('清除列表');
					break;
				}
				//关闭弹出层
				this.$refs.popup.close()
			}
		}
	}
</script>

<style>
	.text{
		display: flex;
		text-align: center;
		justify-content: center;
		background-color: #ffffff;
		padding: 20rpx 0rpx;
	}
	.text-T{
		margin-right: 20rpx;
	}
	.bg-light{
		background-color: #dddddd;
	}
</style>
