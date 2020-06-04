<template>
	<view class="mine">
		<view class="header" v-if="isLogin">
			<image :src="userInfo.avatarUrl" mode="widthFix"></image>
			<view class="nikeName">{{userInfo.nickName}}</view>
			<view class="record">
				<view class="record">
					<view class="item">
						<view class="num">0</view>
						<view>总记账天数</view>
					</view>
					<view class="item">
						<view class="num">1500.00</view>
						<view>负债金额</view>
					</view>
					<view class="item">
						<view class="num">0</view>
						<view>总记账次数</view>
					</view>
				</view>
			</view>
		</view>
		<view class="header" v-else>
			<view class="avatar" style="height: 120rpx; background-color: #ffffff;"></view>
			<view @click="login" class="nikeName" style="font-weight: bold;">未登录</view>
			<view class="record">
				<view class="item">
					<view class="num">0</view>
					<view>总记账天数</view>
				</view>
				<view class="item">
					<view class="num">00.00</view>
					<view>负债金额</view>
				</view>
				<view class="item">
					<view class="num">0</view>
					<view>总记账次数</view>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="list">
				<view class="child">
					<text>个人信息</text>
					<image src="../../static/img/right.png" mode="widthFix"></image>
				</view>
				<view class="child">
					<text>类型设置</text>
					<image src="../../static/img/right.png" mode="widthFix"></image>
				</view>
				<view class="child">
					<text>我的钱包</text>
					<image src="../../static/img/right.png" mode="widthFix"></image>
				</view>
				<view class="child">
					<text>关于我们</text>
					<image src="../../static/img/right.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: null,
				isLogin: false
			}
		},
		onShow() {
			this.userInfo = getApp().globalData.userInfo;
			if (this.userInfo) {
				this.isLogin = true;
			}
		},
		methods: {
			login() {
				let _this = this;
				//获取用户授权信息
				wx.navigateTo({
					url: '/pages/login/login',
				});
			}
		}
	}
</script>

<style>
.header {
	background-color: #00aaff;
}
.header image, .avatar {
	display: block;
	width: 120rpx;
	border-radius: 50%;
	margin: 0 auto;
}
.header .nikeName {
	text-align: center;
	margin-top: 10rpx;
}
.record {
	display: flex;
	padding: 28rpx 30rpx 20rpx;
	justify-content: space-between;
	box-sizing: border-box;
	width: 100%;
}
.record .item {
	text-align: center;
	color: #666666;
}
.record .item .num {
	font-size: 36rpx;
	font-weight: 700;
	color: #DD524D;
	line-height: 1.8;
}
.content {
	width: 100%;
	background-color: #f5f5f5;
	overflow: hidden;
}
.content .list {
	width: 100%;
	box-sizing: border-box;
	padding: 0 30rpx;
	background-color: #ffffff;
	margin: 24rpx 0;
	border-top: 2rpx solid #eeeeee;
	border-bottom: 2rpx solid #eeeeee;
}
.list .child {
	width: 100%;
	display: flex;
	justify-content: space-between;
	line-height: 88rpx;
	border-bottom: 2rpx solid #eeeeee;
}
.list .child:last-child {
	border-bottom: none;
}
.child image {
	width: 32rpx;
	padding-top: 14px;
}
</style>
