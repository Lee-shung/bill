<template>
	<view class="mine">
		<view class="header">
			<image :src="userInfo.avatarUrl" mode="widthFix"></image>
			<view class="nikeName">{{userInfo.nickName}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: null
			}
		},
		onShow() {
			this.userInfo = getApp().globalData.userInfo;
		},
		methods: {
			
		}
	}
</script>

<style>
.header {
	background-color: #02FF89;
}
.header image {
	display: block;
	width: 120rpx;
	border-radius: 50%;
	margin: 0 auto;
}
.header .nikeName {
	text-align: center;
	margin-top: 10rpx;
}
</style>
