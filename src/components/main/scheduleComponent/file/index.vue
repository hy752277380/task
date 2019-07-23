<template>
    <Row id="root">
        <Col span="16" id="title">
            <Badge status="processing"/>
            <h4>{{title}}</h4>
        </Col>
        <Col span="8">
            <span style="line-height: 2;">{{fileName}}</span>
            <Upload :before-upload="handleUpload"
                    action="#" style="width: 120px; float: right;">
                <Button icon="ios-cloud-upload-outline">upload file</Button>
            </Upload>
        </Col>
    </Row>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                title: 'Complete at least one simple algorithm problem',
                file: null,
                fileName: '1111ssssssssss1.pdf',
                loadingStatus: false
            }
        },
        methods: {
            handleUpload(file) {
                this.file = file;
                return false;
            },
            upload() {
                this.loadingStatus = true;
                setTimeout(() => {
                    this.file = null;
                    this.loadingStatus = false;
                    this.$Message.success('Success')
                }, 1500);
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
