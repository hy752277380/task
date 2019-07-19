<template>
    <div id="monthRoot">
        <Row>
            <CellGroup>
                <template v-for="year in yearArray">
                    <Cell :title="year.year+' 年'" @click.native="selectYear(year)">
                        <Badge :count="10" slot="extra"/>
                        <Icon type="ios-arrow-forward" slot="extra" size="16"/>
                    </Cell>
                </template>
            </CellGroup>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "yearView",
        data() {
            return {
                date: new Date(),
                yearArray: []
            }
        },
        methods: {
            selectYear(year) {
                this.$emit("selectYear", year);
            }
        },
        created() {
            // Date.setFullYear(num)
            // num 表示年份的四位整数。用本地时间表示。
            let yearArray = [];
            let date = new Date(this.date);
            //date.setFullYear(this.date.getFullYear() - 6); // 从上一年的最后第5个月开始，以匹配一个循环时拿到的月份
            for (let x = 0; x < 6; x++) {
                date.setFullYear(date.getFullYear() - x);
                yearArray[x] = {
                    date: date,
                    year: date.getFullYear(),
                    type: this.date.getFullYear() === date.getFullYear() ? 'info' : 'default'
                }
            }
            this.yearArray = yearArray;
        }
    }
</script>

<style scoped>

</style>
