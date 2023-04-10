<!-- 
    vue视图分为三个部分，
    template标签用于生成html代码，注意template标签内只能有一个根标签
    script用于页面交互行为和数据渲染
    style用于渲染css样式
<template> 
</template>
<script>
</script>
<style>
</style>
 -->
<template>
    <div>
        <h1>
            {{ name }}  {{ age }}   <!-- 不能再一个双大括号里面插入两个以上的变量 -->
        </h1>
        <h2>
            {{ name + age }}    <!-- 运行表达式,数值计算、三元运算符等 -->
        </h2>
    </div>
</template>
<script>
const options = {
    data: function(){
        return {
            name : '张三',
            age : 18
        };
    }
};
//导出变量
export default options;
</script>