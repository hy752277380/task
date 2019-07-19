<template>
    <div id="monthRoot">
        <Row v-for="subArray in monthArray"
             type="flex"
             justify="center"
             align="top"
             :gutter="6"
             style="margin:5px auto; width: 90%;">
            <template v-for="month in subArray">
                <Col span="6">
                    <Tag style="width: 100%;"
                         type="dot"
                         :color="month.color"
                         @click.native="selectMonth(month)">
                        {{month.month.transform}}月
                    </Tag>
                    <!--<Button style="width: 100%;"
                            :type="month.type"
                            @click="selectMonth(month)">
                        {{month.month.transform}}
                    </Button>-->
                </Col>
            </template>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "monthView",
        data() {
            return {
                date: new Date(),
                monthArray: []
            }
        },
        methods: {
            selectMonth(month) {
                this.$emit("selectMonth", month);
            },
        },
        created() {
            // Date.setMonth(num)
            // num值介于 0（一月） ~ 11（十二月） 之间：
            // -1 为去年的最后一个月
            // 12 为明年的第一个月
            // 13 为明年的第二个月
            let monthArray = [[], [], [], [], []];
            let date = new Date(this.date);
            date.setMonth(-5); // 从上一年的最后第5个月开始，以匹配一个循环时拿到的月份
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 4; j++) {
                    date.setMonth(date.getMonth() + 1);
                    monthArray[i][j] = {
                        date: date,
                        month: {
                            origin: date.getMonth(),
                            transform: date.getMonth() + 1
                        },
                        color: this.date.getFullYear() === date.getFullYear() ? 'primary' : 'default'
                    };
                }
            }
            this.monthArray = monthArray;
        }
    }
</script>

<style scoped>

</style>
<!--
tag 颜色定义:
default 属于其他年份的月份，在选中年份中不予查看
primary 表示当前月份
success 表示其他每日任务全满月份
error 表示其他每日任务少于20%的月份
warning 表示其他每日任务少于60%的月份
-->
