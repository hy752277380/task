<template>
    <Row id="root">
        <Col span="20" id="title">
            <Badge status="processing"/>
            <h4>{{title}}</h4>
        </Col>
        <Col span="4">
            <TimePicker type="timerange" placement="bottom-end" placeholder="Select time"></TimePicker>
        </Col>
    </Row>
</template>

<script>
    export default {
        name: "interval",
        data() {
            return {
                title: 'Complete at least one simple algorithm problem',
                value: new Date()
            }
        }
    }
</script>

<style scoped>
    #root {
        height: 30px;
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
