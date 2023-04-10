<template>
    <div>
          <!-- 事件绑定: v-on:事件名 -->
        <input type="button" :value="msg1" v-on:click="c1" />
        <!-- 事件绑定简写 @事件名 -->
        <input type="button" :value="msg2" @click="c2" />
        <span>{{ count }}</span>
    </div>
  
</template>
<script>
    const options = {
        data: function(){
            return { 
                msg1: '点我1',
                msg2: '点我2',
                count: 0
            }
        },
        methods: {
            c1: function(){
                //this指向的是data函数返回值的对象
                this.count++;
            },
            /* c2:funtion(){} 简写 */
            c2(){
                this.count--;
            }

        }
    }

    export default options
</script>