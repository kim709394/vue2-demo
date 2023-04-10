<template>
    <div class="button" :class="[bgcolor,size]">
        按<slot></slot>扭
    </div>
</template>
<script>
    const options = {
        props: ["bgcolor","size"]
    } 
    export default options
</script>
<style>
    .button {
        height: 38px;
        line-height: 38px;
        border: 1px solid transparent;
        padding: 0 18px;
        background-color: #009688;
        color: #fff;
        white-space: nowrap;
        text-align: center;
        font-size: 14px;
        border-radius: 2px;
        cursor: pointer;
        display: inline-block;
        margin-right: 10px;
    }
    .lg {
        height: 44px;
        line-height: 44px;
        padding: 0 25px;
        font-size: 16px;
    }
    .sm {
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        font-size: 12px;
    }
    .xs {
        height: 22px;
        line-height: 22px;
        padding: 0 5px;
        font-size: 12px;
    }
    .red {
        background-color:red;
    }
    .green {
        background-color: green;
    }
    .blue {
        background-color: blue;
    }
</style>