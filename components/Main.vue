<template>
    <div class="container">
        <h1> Hello  From Index</h1>
        <input type="number" v-model="amount">
        <p>{{amount}}</p>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data(){
            return{
                amount:0
            }
        }
    }
</script>

<style scoped lang="scss">
.container{
    h1{
        color: green;
    }
}
</style>
