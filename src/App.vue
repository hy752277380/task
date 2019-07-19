<template>
    <div id="app">
        <main-component></main-component>
    </div>
</template>

<script>
    import mainComponent from '@/components/main'

    export default {
        name: 'app',
        components: {
            mainComponent,
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
