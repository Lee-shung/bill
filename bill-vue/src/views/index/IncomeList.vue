<template>
    <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort = "{prop: 'date', order: 'descending'}">
        <el-table-column
                type="selection"
                width="55">
        </el-table-column>
        <el-table-column
                prop="id"
                label="编号"
                width="100">
        </el-table-column>
        <el-table-column
                prop="date"
                label="日期"
                sortable
                width="180">
        </el-table-column>
        <el-table-column
                label="收入类型"
                width="180">
            <template slot-scope="scope">
            <el-select v-model="scope.row.cate" placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </template>
        </el-table-column>
        <el-table-column
            prop="way"
            label="收款方式"
            width="180">
        </el-table-column>
        <el-table-column
                prop="remark"
                label="备注"
                width="180">
        </el-table-column>
    </el-table>
</template>
<script>
    export default {
        name: "IncomeList",
        data() {
            return {
                tableData: [{
                    id: 1,
                    date: '2016-05-02',
                    cate: '双皮奶',
                    way: '支付宝',
                    remark: '上海市普陀区金沙江路 1518 弄'
                }, {
                    id: 1,
                    date: '2016-05-04',
                    cate: '黄金糕',
                    way: '支付宝',
                    remark: '上海市普陀区金沙江路 1517 弄'
                }, {
                    id: 1,
                    date: '2016-05-01',
                    cate: '双皮奶',
                    way: '现金',
                    remark: '上海市普陀区金沙江路 1519 弄'
                }, {
                    id: 1,
                    date: '2016-05-03',
                    cate: '黄金糕',
                    way: '微信',
                    remark: '上海市普陀区金沙江路 1516 弄'
                }],
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
            }
        },
    }
</script>

<style scoped>

</style>