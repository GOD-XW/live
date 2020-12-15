<template>
	<view>
		<uni-list-item title="头像" >
			<view slot="right" style="display: flex;align-items: center;" @click="changeUserpic">
			<image  :src="userpic" style="width:100rpx;height:100rpx;border-radius: calc(50%);"></image>
			<text class="iconfont icon-fenxiang" style="margin-left: 20rpx;"></text>
			</view>
		</uni-list-item>
		<uni-list-item title="昵称">
			<view slot="right" style="display: flex;align-items: center;">
			<input v-model="username"  class="uni-input" style="text-align: right;"/>
			<text class="iconfont icon-fenxiang" style="margin-left: 20rpx;"></text>
			</view>
		</uni-list-item>
		<uni-list-item title="性别" @click="changeSex">
			<view slot="right" style="display: flex;align-items: center;">
			<text >{{sexText}}</text>
			<text class="iconfont icon-fenxiang" style="margin-left: 20rpx;"></text>
			</view>
		</uni-list-item>
		<picker mode="date" :value="birthday" @change="onDateChange">
		<uni-list-item title="生日">
			<view slot="right" style="display: flex;align-items: center;">
			<text >{{birthday}}</text>
			<text class="iconfont icon-fenxiang" style="margin-left: 20rpx;"></text>
			</view>
		</uni-list-item>
		</picker>
		<uni-list-item title="情感" @click="changeEmotion">
			<view slot="right" style="display: flex;align-items: center;">
			<text >{{EmotionText}}</text>
			<text class="iconfont icon-fenxiang" style="margin-left: 20rpx;"></text>
			</view>
		</uni-list-item>
		<uni-list-item title="职业" @click="changeJob">
			<view slot="right" style="display: flex;align-items: center;">
			<text >{{Job}}</text>
			<text class="iconfont icon-fenxiang" style="margin-left: 20rpx;"></text>
			</view>
		</uni-list-item>
		<uni-list-item title="家乡">
			<view slot="right" style="display: flex;align-items: center;">
		<regionPicker
		  :multiIndex_="selections1"
		  custom_="北京"
		  @selecteRegion_="selecteRegion1"
		  title_=""
		/>
			<text class="iconfont icon-fenxiang" style="margin-left: 20rpx;"></text>
			</view>
		</uni-list-item>
		<view style="padding: 20rpx 30rpx;">
			<button type="primary" class="bg-main" style="color: #FFFFFF;border-radius: 50rpx;border: 0;"
			>完成</button>
		</view>
		
		
		<!-- //测试 -->
		<!-- <view>
		    <regionPicker
		      :multiIndex_="selections2"
		      custom_="请选择"
		      @selecteRegion_="selecteRegion2"
		      title_="默认选项"
		    />
		</view> -->
	
	</view>
</template>

<script>
	const sexArray=['男', '女', '不限']
	const EmotionArray=['未婚', '已婚', '保密']
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue";
	import regionPicker from "@/components/region-picker.vue";
	export default {
		components:{
			uniListItem,
			regionPicker
		},
		data() {
			return {
				userpic:"/static/you.png",
				username:"昵称",
				sex:0,
				Emotion:0,
				Job:"销售",
				birthday:"00-00-00",
				selections1: [],
			}
		},
		computed:{
			sexText(){
				return sexArray[this.sex]
			},
			EmotionText(){
				return EmotionArray[this.Emotion]
			},
		},
		methods: {
			selecteRegion1(value) {
			  this.selections1 = value;
			  console.log(this.selections1)
			},
			//修改生日
			onDateChange(e){
				this.birthday=e.detail.value
			},
			// 修改头像
			changeUserpic(){
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: [ 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album','camera'], //从相册选择
				    success: (res)=> {
						this.userpic=res.tempFilePaths[0]
				        // console.log(res);
				    }
				});
			},
			//修改性别
			changeSex(){
				uni.showActionSheet({
				    itemList:sexArray,
				    success:  (res)=>{
						this.sex=res.tapIndex
				    },
				});
			},
			//修改情感
			changeEmotion(){
				uni.showActionSheet({
				    itemList:EmotionArray,
				    success:  (res)=>{
						this.Emotion=res.tapIndex
				    },
				});
			},
			//修改职业
			changeJob(){
				let JobArray=['It', '销售', '学生']
				uni.showActionSheet({
				    itemList:JobArray,
				    success:  (res)=>{
						this.Job=JobArray[res.tapIndex]
				    },
				});
			}
		}
	}
</script>

<style>
.container {
  padding: 20px;
  font-size: 14px;
  line-height: 24px;
}
</style>
