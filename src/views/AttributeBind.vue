<template>
    <div>
        <!-- 属性绑定，绑定标签的value属性的值为data对象的返回值
            v-bind:属性名="属性值"，简写：:属性名="属性值"
        -->
        <input type="text" v-bind:value="name" />
        <input type="text" v-bind:value="age" />
        <!-- 简写 -->
        <input type="date" :value="birthday" />
    </div>

</template>
<script>
const options = {
    data : function(){
        return {
            name: '李四',
            age: 28,
            birthday: '1998-01-09'
        }
    }
}
export default options
</script>