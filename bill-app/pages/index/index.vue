<template>
	<view class="content">
		<!-- 头部 -->
		<view class="header">
			<view class="top">
				<view class="h_left">
					<view>
						本月支出（元）
					</view>
					<view class="bottom_text">
						<text class="big">{{total.split('.')[0]}}</text>.<text>{{total.split('.')[1]}}</text>
					</view>
				</view>
				<view>
					<view>
						本月收入（元）
					</view>
					<view class="bottom_text">
						<text class="big">{{total.split('.')[0]}}</text>.<text>{{total.split('.')[1]}}</text>
					</view>
				</view>
				<view class="select_date">
					<picker mode="date" :value="date" fields="month" start="2019-05" end="" @change="bindDateChange">
						<view class="picker">
							<view>
								{{date.split('-')[0]}}年
							</view>
							<view class="bottom_text">
								<text class="big">{{date.split('-')[1]}}</text>月<image mode="widthFix" src="../../static/img/select.png"></image>
							</view>
						</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="charts">
			<view class="title">
				<text>统计 | 图表 </text>
				<image mode="widthFix" src="../../static/img/chart.png"></image>
			</view>
			<view id="chart">
				<canvas canvas-id="canvasPie" id="canvasPie" class="charts" @touchstart="touchPie"></canvas>
			</view>
		</view>
	</view>
</template>

<script>
	import uCharts from '../../components/u-charts.js';
	var _this;
	var canvaPie;
	export default {
		data() {
			return {
				date: '2020-06',
				total: '1200.00',
				width: '',
				height: ''
			}
		},
		onLoad() {
			_this = this;
			this.width = uni.upx2px(750);
			this.height = uni.upx2px(500);
			this.showPie();
		},
		onShow() {
			// this.showPie();
		},
		methods: {
			showPie() {
				canvaPie = new uCharts({
					$this: _this,
					canvasId: 'canvasPie',
					type: 'pie',
					fontSize: 11,
					legend: {
						show: true
					},
					background: '#FFFFFF',
					pixelRatio: 1,
					series: [{
						"name": "一班",
						"data": 50
					}, {
						"name": "二班",
						"data": 30
					}, {
						"name": "三班",
						"data": 20
					}, {
						"name": "四班",
						"data": 18
					}, {
						"name": "五班",
						"data": 8
					}, ],
					animation: true,
					width: _this.width,
					height: _this.height,
					dataLabel: true,
					extra: {
						pie: {
							lableWidth: 15
						}
					},
				});
			},
			bindDateChange(e) {
				this.date = e.detail.value;

			},
			touchPie(e) {

			}
		}
	}
</script>

<style>
	.header {
		background-color: #00aaff;
	}

	.top {
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 10rpx 24rpx;
	}

	.picker {
		text-align: center;
	}

	.big {
		font-weight: bold;
		font-size: 42rpx;
	}

	.bottom_text {
		line-height: 58rpx;

	}

	.bottom_text image {
		width: 48rpx;
		vertical-align: middle;
	}

	.charts {
		background-color: #f9f9f9;
	}

	.charts .title {
		font-size: 32rpx;
		padding: 20rpx 24rpx;
	}

	.title image {
		width: 36rpx;
		vertical-align: -6rpx;
		margin-left: 6rpx;
	}

	canvas {
		width: 750rpx;
		height: 500rpx;
	}
</style>
