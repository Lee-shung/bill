<template>
	<view>
		<picker @change="bindPickerChange" mode="selector" :value="index" :range="array">
			<view class="picker">
			      当前选择：{{array[index]}}
			</view>
		</picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				array: ['全部','收入','支出']
			}
		},
		methods: {
			bindPickerChange(e) {
				this.index = e.detail.value;
			}
		}
	}
</script>

<style>

</style>
