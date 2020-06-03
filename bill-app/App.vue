
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
					} else {
						wx.navigateTo({
							url: '/pages/login/login',
							success(res) {
								
							}
						})
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
	/*每个页面公共css */
	page {
		font-size: 28rpx;
		color: #333333;
	}
	
</style>
