<template>
	<view>
		<van-tabs :active="active" @change="onChange">
			<van-tab title="支出">
				<view class="cate">
					<view @click="addBill" class="cate-item"><text>交通出行</text></view>
					<view class="cate-item"><text>生活用品</text></view>
					<view class="cate-item"><text>零食水果</text></view>
					<view class="cate-item"><text>日常饮食</text></view>
					<view class="cate-item"><text>穿着打扮</text></view>
					<view class="cate-item"><text>游戏充值</text></view>
					<view class="cate-item"><text>外出娱乐</text></view>
					<view class="cate-item"><text>债务还款</text></view>
					<view class="cate-item"><text>医疗看病</text></view>
					<view class="cate-item"><text>数码电子</text></view>
					<view class="cate-item"><text>房租水电</text></view>
					<view class="cate-item"><text>其他消费</text></view>
				</view>
			</van-tab>
			<van-tab title="收入">
				<view class="cate">
					<view class="cate-item"><text>工资转入</text></view>
					<view class="cate-item"><text>朋友还款</text></view>
					<view class="cate-item"><text>理财收入</text></view>
					<view class="cate-item"><text>红包收入</text></view>
					<view class="cate-item"><text>其他收入</text></view>
				</view>
			</van-tab>
			<van-popup :show="show" position="bottom" @close="onClose">
				<view class="tally-detail">
					<view class="content">
						<view class="left">
							<picker style="display: inline-block;" mode="date" :value="date" start="2015-09-01" end="2099-09-01" @change="bindDateChange">
							    <view class="picker">
							      <image src="../../static/img/calendar.png"></image> {{date.replace(/-/g,'/')}}
							    </view>
							</picker>
							<view style="width: 100%;">
								<text>备注：</text>
								<input style="display: inline-block;width: 80%;" class="weui-input"/>
							</view>
						</view>
						<view class="right">
							{{number.toFixed(2)}}
						</view>
					</view>
					<view class="keyboard">
						
					</view>
				</view>
			</van-popup>
		</van-tabs>
	</view>
</template>

<script>
export default {
	data() {
		return {
			active: 0,
			tagActive: 0,
			show: false,
			cate: '',
			date:'',
			number:0.00
		};
	},
	methods: {
		onChange(event) {},
		onTagChange(event) {},
		addBill() {
			this.show = true;
		},
		onClose() {
			this.show = false;
		},
		bindDateChange(e) {
			this.date = e.detail.value
		}
	},
	created() {
		let date = new Date();
		let localDate = date.toLocaleDateString();
		this.date = localDate;
	}
};
</script>

<style>
.cate {
	display: flex;
	justify-content: left;
	flex-wrap: wrap;
}
.cate .cate-item {
	width: 33%;
	text-align: center;
	line-height: 68rpx;
}
.tally-detail image {
	width: 36rpx;
	height: 36rpx;
}
.content {
	display: flex;
	width: 100%;
	justify-content: space-between;
}
.left {
	width: 80%;
}
.right {
	width: 20%;
}
</style>
