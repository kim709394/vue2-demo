<template>
    <div>
        <h1>自定义组件引用</h1>
        <my-button bgcolor="red" size="lg" >大</my-button>
        <my-button bgcolor="green" size="sm" >小</my-button>
        <my-button bgcolor="blue" size="xs" >迷你</my-button>
    </div>
</template>
<script>
import MyButton from "../components/ButtonComponent.vue"
    const options = {
        components : {
            MyButton  //等同于 MyButton:"MyButton"
        }
    }
    export default options;
</script>
