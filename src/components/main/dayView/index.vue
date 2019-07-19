<template>
    <div id="dayRoot">
        <Row type="flex" justify="center" align="top" :gutter="2">
            <template v-for="week,index in calendarHeader">
                <Col span="3">
                    <Button type="text" style="width: 100%" disabled>{{week}}</Button>
                </Col>
            </template>
        </Row>
        <Row v-for="subArray in calendarArray"
             type="flex"
             justify="center"
             align="top"
             :gutter="2"
             style=" margin-top:2px;">
            <template v-for="day in subArray">
                <Col span="3">
                    <day-element :day="day"></day-element>
                    <!--<Button size="large" :type="day.type" style="width: 100%"
                            @click="selectDay(day)">
                        {{day.day}}
                    </Button>-->
                </Col>
            </template>
        </Row>

    </div>
</template>

<script>
    import calendar from '@/util/calendar';
    import dayElement from "@/components/main/dayView/dayElement";

    export default {
        name: "dayView",
        props: {
            date: Object
        },
        data() {
            return {
                calendarHeader: ['日', '一', '二', '三', '四', '五', '六'],
                calendarArray: [],
            }
        },
        created() {
            this.calendarArray = calendar(this.date);
        },
        methods: {},
        components: {
            dayElement
        }

    }
</script>

<style scoped>

</style>
