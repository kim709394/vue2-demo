<template>
    <div>
        <input type="button" value="点我" @click="getCount">
    </div>
</template>
<script>
//导入自定义axios实例
import axios from '../util/myAxios'
const options = {
    methods: {
        //同步ajax请求需要添加async和await关键字
        async getCount(){
            const resp = await axios.get('/worker/collected/count');
            console.log(resp);
        }
    }
}
export default options

</script>