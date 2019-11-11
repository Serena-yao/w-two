<template>
    <div>
        <div class="topnav">
            <span @click="back()">←</span>
            <span>網易</span>
            <span>主页</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        back(){//返回上一层
            window.history.back()
        }
    },
}
</script>
<style lang='scss'>
    .topnav{
        width: 100%;
        height: .4rem;
        background: red;
        line-height: .4rem;
        display: flex;
        justify-content: space-around;
        color: #fff;
        font-size: .32rem;
    }
</style>
