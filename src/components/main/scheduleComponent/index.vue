<template>
    <fixed v-if="type==='fixed'"></fixed>
    <interval v-else-if="type==='interval'"></interval>
    <describe v-else-if="type==='describe'"></describe>
    <file v-else-if="type==='file'"></file>
</template>

<script>

    export default {
        name: "scheduleComponent",
        props: {
            type: String
        },
        data() {
            return {
                value1: new Date(),
            }
        },
        components: {
            fixed: () => import("@/components/main/scheduleComponent/fixed"),
            interval: () => import("@/components/main/scheduleComponent/interval"),
            describe: () => import("@/components/main/scheduleComponent/describe"),
            file: () => import("@/components/main/scheduleComponent/file")
        }
    }
</script>

<style scoped>

</style>
