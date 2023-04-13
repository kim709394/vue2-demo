<template>
    <div>
        <table  >
            <colgroup>
                <col width="150">
                <col width="150">
                <col width="150">
                <col width="150">
                <col width="150">
                <col width="150">
                <col width="150">
            </colgroup>
            <caption>
                <strong>核心网列表</strong>
            </caption>
            <thead>
                <tr>
                    <td>名称</td>
                    <td>厂商名称</td>
                    <td>ip地址</td>
                    <td>mac地址</td>
                    <td>型号</td>
                    <td>用户名</td>
                    <td>密码</td>
                </tr>
            </thead>
            <tbody v-if="devices.length >0">
                <tr v-for="p of devices" :key="p.id">
                    <td>{{ p.name }}</td>
                    <td>{{ p.manufacturer }}</td>
                    <td>{{ p.ip }}</td>
                    <td>{{ p.mac }}</td>
                    <td>{{ p.model }}</td>
                    <td>{{ p.username }}</td>
                    <td>{{ p.password }}</td>
                </tr>
            </tbody>
            <tbody v-else>
                暂无数据>
            </tbody>
        </table>
    </div>
</template>
<script>
    import _myAxios from '@/util/myAxios';
    const options = {
        //页面加载时调用的方法
        mounted: function(){
           this.getData();  
        },
        data: function(){
            return {devices:[]};
        },
        methods: {
            getData(){
                _myAxios.post("/corenetwork/dopage",{
                    pageNo: 1,
                    pageSize: 10
                }).then(resp => {
                    this.devices = resp.data.data.records;
                }).catch(error =>{
                    console.log(error);
                });
            }
        }
    }
    export default options;
</script>

<style>
    table {
        border-color: black;
        border: 1px; 
        align-self: "center";
        background-color: white;
        margin:  auto;
        text-align: center ;
    }
    strong {
        font-size: 15px;
        color: crimson;
    }
    thead td {
        font-size: 10px;
    }
    td {
        font-size: 4px;
        color: black;
    }
</style>