<template>
    <!-- v-model主要用于表单元素的双向绑定，当页面输入的值发生变化，那么data的值也跟着变化，反之亦然 -->
    <div>
        <div>
            <label for="">姓名：</label>
            <input type="text" v-model="name" /> 
        </div>
        <div>
            <label for="">年龄：</label>
            <input type="text" v-model="age" /> 
        </div>
        <div>
            <label for="">性别：</label>
            男 <input type="radio" value="男" v-model="sex" /> 
            女 <input type="radio" value="女" v-model="sex" /> 
        </div> 
        <div>
            <label for="">爱好：</label>
            足球 <input type="checkbox" value="足球" v-model="hobby" /> 
            游泳 <input type="checkbox" value="游泳" v-model="hobby" /> 
            唱歌 <input type="checkbox" value="唱歌" v-model="hobby" /> 
        </div> 
        <div>
            <label for="">地区：</label>
            <select v-model="city">
                <option value="深圳">深圳</option>
                <option value="北京">北京</option>
                <option value="上海">山海</option>
            </select>
        </div>
        <div>
            <label for="">简介：</label>
            <textarea v-model="introduction" id="" cols="30" rows="10"></textarea>
        </div>
    </div>
</template>

<script>
    const options = {
        data: function(){
            return {
                name: '王五',
                age: 59,
                sex: '男',
                hobby: [
                    '足球',
                    '游泳',
                    '唱歌'
                ],
                city: '深圳',
                introduction: '我是一个英雄'
            }
        }
    }

    export default options
</script>