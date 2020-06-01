<template>
    <div class="main">
        <div class="bill-data" ref="pie"></div>
        <div class="bill-data" ref="bar"></div>
    </div>
</template>

<script>
    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/pie');
    require('echarts/lib/chart/bar');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');
    export default {
        name: "Data",
        computed: {
          getMonth() {
              let monthArr = [];
              for (let i = 1; i <= 12; i++) {
                  monthArr.push(`${i}月`);
              }
              return monthArr;
          }
        },
        mounted() {
            let _this = this;
            //初始化echarts
            const myPie = echarts.init(this.$refs.pie);
            const myBar = echarts.init(this.$refs.bar);
            //绘制圆形图表
            myPie.setOption({
                title: {
                    text: '消费类型图表'
                },
                tooltip: {
                    show: true,
                    trigger: 'item'
                },
                series : [
                    {
                        name: '消费类型',
                        type: 'pie',
                        radius: '55%',
                        roseType: true,
                        data:[
                            {value:235, name:'生活用品'},
                            {value:274, name:'饮食'},
                            {value:310, name:'上网'},
                            {value:335, name:'出行'},
                            {value:200, name:'外借'}
                        ]
                    }
                ]
            });
            //绘制扇形图表
            myBar.setOption({
                color: ['#5793f3', '#d14a61'],
                title: {
                    text: '个人收支表'
                },
                toolbox: {
                    feature: {
                        dataView: {show: true, readOnly: false},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                legend: {
                    data: ['收入','支出']
                },
                tooltip: {
                  show: true,
                  trigger: 'axis',
                },
                //x轴显示内容
                xAxis: [
                    {
                        type: 'category',
                        data: _this.getMonth
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '金额',
                        min: 0,
                        max: 3000,
                        position: 'left',
                        axisLabel: {
                            formatter: '￥{value}'
                        },

                    }
                ],
                series: [
                    {
                        name: '收入',
                        type: 'bar',
                        data: [1200.00,2300.00,800.00,666.66,1220.00,487.88,2666.89,
                        681.22,123.00,2550.00,1563.36,480.00]
                    },
                    {
                        name: '支出',
                        type: 'bar',
                        data: [1100.10,700.00,1100.80,423.66,920.00,1200.88,2006.89,
                            890.22,602.22,1250.00,1063.36,680.00]
                    }
                ]
            });
        }
    }
</script>

<style scoped lang="stylus">
.bill-data
    width: 600px;
    height: 500px;
    border: 1px solid #ccc
    display inline-block
</style>