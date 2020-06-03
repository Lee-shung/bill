<template>
	<view>
		<view class='head-view'>
		    <view class='head-image-view'>
		      <image class='head-image' src='/static/img/cash.png' mode='scaleToFill'></image>
		    </view>
		    <view class='title-text'>申请获取以下权限</view>
		    <view class='content-text'>获得你的公开信息(昵称,头像,手机等)</view>
		    <button class='auth-btn' type='primary' open-type='getUserInfo' @getuserinfo='bindGetUserInfo'>授权登录</button>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			bindGetUserInfo (e) {
				getApp().globalData.userInfo = e.detail.userInfo;
				wx.switchTab({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style>
.head-view {
	padding: 90rpx 50rpx;
}
.head-image-view {
	display: block;
	padding: 50rpx 50rpx 0 50rpx;
}
.head-image {
	display: block;
	margin: 0 auto;
	width: 100rpx;
	height: 100rpx;
}
.title-text {
	padding: 50rpx 20rpx;
	font-size: 28rpx;
	color: #020e0f;
	text-align: center;
}
.content-text {
	padding-left: 50rpx;
	font-size: 14px;
	color: #666;
	text-align: center;
}
.auth-btn {
	margin-top: 70rpx;
	padding: 0 50rpx;
	height: 90rpx;
	font-size: 36rpx;
}
</style>
