<template>
    <div id="main">
        <p id="data">{{ count }}</p>
        <button @click="increment()">Increment</button>
        <input type="number" v-model="count" id="myInput">
    </div>
</template>

<script>
    export default {
        name:"counter",
        data() {
            return {
                count: 0
            }
        },

        methods: {
            increment() {
                this.count++
            }
        }
    }
</script>

<style scoped>

</style>
