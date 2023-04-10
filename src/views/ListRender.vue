<template>
    <div>
        <table id="persons" >
            <colgroup>
                <col width="150">
                <col width="150">
                <col width="150">
                <col width="150">
            </colgroup>
            <caption>
                <strong>员工信息表</strong>
            </caption>
            <thead>
                <tr>
                    <td>姓名</td>
                    <td>标签号</td>
                    <td>工号</td>
                    <td>部门</td>
                </tr>
            </thead>
            <tbody v-if="persons.length >0">
                <tr v-for="p of persons" :key="p.id">
                    <td>{{ p.name }}</td>
                    <td>{{ p.cardid }}</td>
                    <td>{{ p.workerCode }}</td>
                    <td>{{ p.department }}</td>
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
        mounted: function(){
           this.getData();
        },
        data: function(){
            return {persons:[]};
        },
        methods: {
            getData(){
                _myAxios.post("/staff/page",{
                    pageNo: 1,
                    pageSize: 10
                }).then(resp => {
                    this.persons = resp.data.data.records;
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