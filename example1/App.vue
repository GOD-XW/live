<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			const domModule=weex.requireModule('dom')
			domModule.addRule('fontFace',{
				'fontFamily':"iconfont",
				'src':"url('/static/uni.ttf')"
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url("/comm/free.css");
	/* #ifndef APP-PLUS-NVUE */
	@import url("/comm/icon.css");
	/* #endif */
	
</style>
