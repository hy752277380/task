<template>
    <Row id="root">
        <Col span="20" id="title">
            <Badge status="processing"/>
            <h4>{{title}}</h4>
        </Col>
        <Col span="4">
            <TimePicker type="time" :value="value" format="HH点mm分ss秒" placeholder="Select time"></TimePicker>
        </Col>
        <Col span="24" style="margin-top: 10px;">
            <Input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..."/>
        </Col>
    </Row>
</template>

<script>
    export default {
        name: "describe",
        data() {
            return {
                value6: '',
                value: '',
                title: 'Complete at least one simple algorithm problem',
            }
        }
    }
</script>

<style scoped>
    #root {
        margin-top: 10px;
    }

    #title {
        margin: auto;
        line-height: 2;
    }

    .ivu-badge {
        margin-left: 10px;
        float: left;
    }
</style>
