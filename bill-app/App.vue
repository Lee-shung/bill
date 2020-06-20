
<script>
	export default {
		
		onLaunch: function() {
			//获取用户授权信息
			wx.getSetting({
				success(res) {
					if (res.authSetting['scope.userInfo']) {
						wx.getUserInfo({
							success(res) {
								getApp().globalData.userInfo = res.userInfo;
							}
						});
					}
				}
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {
			userInfo: null
		}
	}
</script>

<style>
	@import "/wxcomponents/vant/dist/common/index.wxss";
	/*每个页面公共css */
	page {
		font-size: 28rpx;
		color: #333333;
	}
	
</style>
