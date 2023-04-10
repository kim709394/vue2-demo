<template>
    <div>
        <p>
            通过计算属性获取全名:
            {{ completedName }}
            {{ completedName }}
        </p>
        <p>
            通过函数运算获取全名:
            {{ fullName() }}
            {{ fullName() }}
        </p>
    </div>
</template>
<script>
    const options = {
        data: function(){
            return {
                firstName: '六',
                lastName: '赵'
            }
        },
        //函数计算每次调用都会执行代码
        methods: {
            fullName(){
                console.log('fullName');
                return this.lastName+this.firstName;
            }
        },
        computed:{
            /* 通过计算属性获取的值具有缓存作用，只执行一次代码的返回值到处可用，只要data对象的值没发生改变 */
            completedName(){
                console.log('completedName');
                return this.lastName+this.firstName;
            }
        }
    }
    export default options
</script>