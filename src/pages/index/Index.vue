<template>
    <!-- <div>index 222</div> -->
    <div>
        <p v-for="item in dataList" :key="item">{{item}}</p>
    </div>
</template>
<script>
export default {
    name: 'Index',
    data() {
        return {
            dataList: []
        }
    },
    mounted() {
        for(var i = 0; i < 100; i++) {
            this.dataList.push(i)
        }
    }
}
</script>
<style  scoped>
</style>
