<template>
	<view class="detail">
		<view class="select">
			<picker @change="changeDate" mode="selector" :value="index" :range="array">
				<view class="picker">
				     <text>{{array[index]}}</text><image mode="widthFix" src="../../static/img/select.png"></image>
				</view>
			</picker>
			<picker @change="changeCate" mode="selector" :value="index1" :range="array1">
				<view class="picker">
				     <text>{{array1[index1]}}</text><image mode="widthFix" src="../../static/img/select.png"></image>
				</view>
			</picker>
		</view>
		<view class="content">
			<view class="item">
				<image src="../../static/img/wechat.png" mode="widthFix"></image>
				<view class="time">
					<text >地铁充值</text>
					<text style="float: right; font-size: 36rpx; font-weight: bold;">-20.00</text>
					<view style="font-size: 24rpx; color: #C0C0C0; padding-top: 10rpx;">6月1日 08:41</view>
				</view>
			</view>
			<view class="item">
				<image src="../../static/img/alipay.png" mode="widthFix"></image>
				<view class="time">
					<text >朋友转账</text>
					<text style="float: right; font-size: 36rpx; font-weight: bold;" :class="flag?'active':''">+20.00</text>
					<view style="font-size: 24rpx; color: #C0C0C0; padding-top: 10rpx;">6月1日 08:41</view>
				</view>
			</view>
			<view class="item">
				<image src="../../static/img/alipay.png" mode="widthFix"></image>
				<view class="time">
					<text >朋友转账</text>
					<text style="float: right; font-size: 36rpx; font-weight: bold;" :class="flag?'active':''">+20.00</text>
					<view style="font-size: 24rpx; color: #C0C0C0; padding-top: 10rpx;">6月1日 08:41</view>
				</view>
			</view>
			<view class="item">
				<image src="../../static/img/alipay.png" mode="widthFix"></image>
				<view class="time">
					<text >朋友转账</text>
					<text style="float: right; font-size: 36rpx; font-weight: bold;" :class="flag?'active':''">+20.00</text>
					<view style="font-size: 24rpx; color: #C0C0C0; padding-top: 10rpx;">6月1日 08:41</view>
				</view>
			</view>
			<view class="item">
				<image src="../../static/img/alipay.png" mode="widthFix"></image>
				<view class="time">
					<text >朋友转账</text>
					<text style="float: right; font-size: 36rpx; font-weight: bold;" :class="flag?'active':''">+20.00</text>
					<view style="font-size: 24rpx; color: #C0C0C0; padding-top: 10rpx;">6月1日 08:41</view>
				</view>
			</view>
			<view class="item">
				<image src="../../static/img/alipay.png" mode="widthFix"></image>
				<view class="time">
					<text >朋友转账</text>
					<text style="float: right; font-size: 36rpx; font-weight: bold;" :class="flag?'active':''">+20.00</text>
					<view style="font-size: 24rpx; color: #C0C0C0; padding-top: 10rpx;">6月1日 08:41</view>
				</view>
			</view>
			<view class="item">
				<image src="../../static/img/alipay.png" mode="widthFix"></image>
				<view class="time">
					<text >朋友转账</text>
					<text style="float: right; font-size: 36rpx; font-weight: bold;" :class="flag?'active':''">+20.00</text>
					<view style="font-size: 24rpx; color: #C0C0C0; padding-top: 10rpx;">6月1日 08:41</view>
				</view>
			</view>
			<view class="item">
				<image src="../../static/img/alipay.png" mode="widthFix"></image>
				<view class="time">
					<text >朋友转账</text>
					<text style="float: right; font-size: 36rpx; font-weight: bold;" :class="flag?'active':''">+20.00</text>
					<view style="font-size: 24rpx; color: #C0C0C0; padding-top: 10rpx;">6月1日 08:41</view>
				</view>
			</view>
			<view class="item">
				<image src="../../static/img/alipay.png" mode="widthFix"></image>
				<view class="time">
					<text >朋友转账</text>
					<text style="float: right; font-size: 36rpx; font-weight: bold;" :class="flag?'active':''">+20.00</text>
					<view style="font-size: 24rpx; color: #C0C0C0; padding-top: 10rpx;">6月1日 08:41</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				array: ['全部','收入','支出'],
				index1: 0,
				array1: ['全部交易类型','支付宝','现金','微信','银行卡'],
				flag: true
			}
		},
		methods: {
			changeDate(e) {
				this.index = e.detail.value;
			},
			changeCate(e) {
				this.index1 = e.detail.value;
			}
		},
		//上拉刷新
		onReachBottom() {
			wx.showLoading({
			  title: '加载中',
			  mask: true,
			});
			setTimeout(() => {
				wx.hideLoading();
			},2000)
		},
		//下拉刷新
		 onPullDownRefresh: function() {
		    setTimeout(() => {
				wx.stopPullDownRefresh();
			},1000);
		},
	}
</script>

<style>
.picker {
	font-size: 32rpx;
}
image {
	width: 48rpx;
	vertical-align: middle;
}
.select {
	display: flex;
	justify-content: space-between;
	padding: 20rpx 36rpx;
	background-color: #f9f9f9;
}
.content {
	padding: 0rpx 36rpx;
}
.content .item::after {
	content: '';
	display: block;
	clear: both;
}
.item image {
	width: 88rpx;
	margin-right: 20rpx;
	float: left;
	padding: 36rpx 0;
	vertical-align: middle;
}
.item .time {
	width: 84%;
	float: right;
	padding: 36rpx 0;
	border-bottom: 2rpx solid #C8C7CC;
}
.item .time::after {
	content: '';
	display: block;
	clear: both;
}
.active {
	color: #F0AD4E;
}
</style>
