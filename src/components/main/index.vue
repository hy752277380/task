<template>
    <div class="layout">
        <Row :gutter="16">
            <Col span="7">
                <Card :padding="2">
                    <Button type="text" slot="title" icon="md-time" @click="choose">{{titleText}}</Button>
                    <div slot="extra">
                        <Button type="text" icon="ios-arrow-up" size="large"/>
                        <Button type="text" icon="ios-arrow-down" size="large" style="margin-left: 2px;"/>
                    </div>
                    <transition enter-active-class="animated zoomIn faster">
                        <day-view v-if="calendarNum===1" v-on:selectDay="setDay" :date="select"/>
                        <month-view v-else-if="calendarNum===2" v-on:selectMonth="setMonth"/>
                        <year-view v-else-if="calendarNum===3" v-on:selectYear="setYear"/>
                        <p v-else>error</p>
                    </transition>
                </Card>
            </Col>
            <Col span="17">
                <Card>
                    <Tabs>
                        <TabPane label="macOS" icon="logo-apple">标签一的内容</TabPane>
                        <TabPane label="Windows" icon="logo-windows">标签二的内容</TabPane>
                        <TabPane label="Linux" icon="logo-tux">标签三的内容</TabPane>
                    </Tabs>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
    import "@/static/Animate.css";
    import DayView from '@/components/main/dayView';
    import MonthView from "@/components/main/monthView";
    import YearView from "@/components/main/yearView";

    export default {
        name: "index",
        data() {
            return {
                nowDate: new Date(),
                select: {
                    date: 0, // 初始化时间为当前时间
                    year: 0, // 初始化时候为当前年份
                    month: 0, // 初始化时候为当前月份
                    day: 0, // 初始化时候为当前天
                },
                calendarNum: 1, // 1为day，2为month，3为year:在做视图切换时候使用
                titleText: new Date().getFullYear() + "年" + (new Date().getMonth() + 1) + "月"
            }
        },
        components: {
            DayView,
            MonthView,
            YearView
        },
        methods: {
            choose() {
                if (this.calendarNum === 3) return;
                this.calendarNum++;
                this.setTitleText();
            },
            setTitleText() {
                if (this.calendarNum === 1) this.titleText = this.select.year + "年" + (this.select.month + 1) + "月";
                if (this.calendarNum === 2) this.titleText = this.select.year + "年";
                if (this.calendarNum === 3) this.titleText = (this.select.year - 5) + "-" + this.select.year;
                return this.titleText;
            },
            setDay() {
                this.setTitleText();
            },
            setMonth(month) {
                this.select.month = month.month.origin;
                this.calendarNum--;
                this.setTitleText();
            },
            setYear(year) {
                this.select.year = year.year;
                this.calendarNum--;
                this.setTitleText();
            }
        },
        created() {
            // 初始化选中的时间
            this.select = {
                date: this.nowDate, // 初始化时间为当前时间
                year: this.nowDate.getFullYear(), // 初始化时候为当前年份
                month: this.nowDate.getMonth(), // 初始化时候为当前月份
                day: this.nowDate.getDate(), // 初始化时候为当前天
            };
        }
    }
</script>

<style scoped>
    .layout {
        background-color: #f5f7f9;
        padding: 20px;
        height: 100%;
    }
</style>
