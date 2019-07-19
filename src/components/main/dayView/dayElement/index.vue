<template>
    <div id="day-element">
        <Button :type="day.type" style="padding: 5px; width: 100%;">
            <h4>{{day.day}}</h4>
            <small v-if="day.term">{{day.term}}</small>
            <small v-else>{{day.lunar.lunarDay}}</small>
        </Button>
    </div>
</template>

<script>
    export default {
        name: "dayElement",
        props: {
            day: Object
        },
    }
</script>

<style scoped>
    small {
        font-style: initial;
        margin-top: -2px;
        display: block;
    }

    h4 {
        font-weight: bolder;
    }
</style>
