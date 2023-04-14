<template>
    <div>
        <el-container>
            <el-header>
                <!-- 头部 -->
                <el-dropdown>
                <span class="el-dropdown-link">
                    欢迎您,admin<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>上传头像</el-dropdown-item>
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
            </el-header>
            <el-container>
                <!-- 侧边栏 -->
                <el-aside width="200px">
                    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                    </el-radio-group>
                    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse">
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">导航一</span>
                        </template>
                        <el-menu-item-group>
                        <span slot="title">分组一</span>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                        <span slot="title">选项4</span>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-container class="main">
                    <el-main>
                        <!-- 搜索框 -->
                        <div>
                            <el-form :inline="true" :model="searchForm" ref="searchForm" label-position="left" label-width="auto">
                                <el-form-item label="路由器名称" prop="name">
                                    <el-input v-model="searchForm.name" placeholder="路由器名称"></el-input>
                                </el-form-item>
                                <el-form-item label="厂商名称" prop="manufacturer">
                                    <el-input v-model="searchForm.manufacturer" placeholder="厂商名称"></el-input>
                                </el-form-item>
                                <el-form-item label="IP地址" prop="ip">
                                    <el-input v-model="searchForm.ip" placeholder="IP地址"></el-input>
                                </el-form-item>
                                <el-form-item label="MAC地址" prop="mac">
                                    <el-input v-model="searchForm.mac" placeholder="MAC地址"></el-input>
                                </el-form-item>
                                <el-form-item label="创建日期" prop="createdTime">
                                    <el-date-picker
                                        v-model="searchForm.createdTime"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                                        </el-date-picker>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="doPage">查询</el-button>
                                    <el-button  @click="reset('searchForm')">重置</el-button>

                                </el-form-item>
                                </el-form>
                        </div>
                        <!-- 表格数据 -->
                        <div v-if="tableData.length > 0" >
                            <el-table
                            :data="tableData"
                            style="width: 100%">
                                <el-table-column
                                    prop="name"
                                    label="名称"
                                    width="180">
                                </el-table-column>
                                <el-table-column
                                    prop="manufacturer"
                                    label="厂商名称"
                                    width="180">
                                </el-table-column>
                                <el-table-column
                                    prop="ip"
                                    label="ip地址">
                                </el-table-column>
                                <el-table-column
                                    prop="mac"
                                    label="mac地址">
                                </el-table-column>
                                <el-table-column
                                    prop="model"
                                    label="型号">
                                </el-table-column>
                                <el-table-column
                                    prop="username"
                                    label="用户名">
                                </el-table-column>
                                <el-table-column
                                    prop="password"
                                    label="密码">
                                </el-table-column>
                                <el-table-column
                                    prop="createdAt"
                                    label="创建时间">
                                </el-table-column>
                            </el-table>
                            <!-- 分页插件 -->
                            <el-pagination
                            :page-size.sync="pageSize"
                            :current-page.sync="pageNo"
                            :pager-count="5"
                            layout="total,sizes,prev, pager, next,jumper"
                            :total="recordCount"
                            :page-sizes="[2, 4, 6, 8, 10, 12]"
                            @current-change="doPage"
                            @size-change="doPage">
                            </el-pagination>
                        </div>
                        <div v-else>
                            暂无数据
                        </div>
                    </el-main>
                    <el-footer>
                        © 深圳市XXXX股份有限公司
                    </el-footer>
                </el-container>
            </el-container>
          
        </el-container>
    </div>
</template>

<script>
    import _myAxios from '@/util/myAxios';
    import {timestampToDateStr} from '@/util/dateUtil'
    export default {
        mounted(){
            this.doPage();
        },
        data() {
            return {
                tableData: [],
                recordCount:0,
                pageSize:8,
                pageNo:1,
                searchForm:{
                    name:'',
                    manufacturer:'',
                    mac:'',
                    ip:'',
                    createdTime:[]
                },
                isCollapse: true    //导航栏收缩/展开控制
            }
        },
        methods: {
            doPage(){
                let createdTimeStart='';
                let createdTimeEnd = '';
                let createdTimeArr =this.searchForm.createdTime;
                if(this.searchForm.createdTime.length > 0){
                    createdTimeStart = createdTimeArr[0].getTime();
                    createdTimeEnd = createdTimeArr[1].getTime();
                }
                _myAxios.post("/router/dopage",{
                        pageNo: this.pageNo,
                        pageSize: this.pageSize,
                        name: this.searchForm.name,
                        manufacturer: this.searchForm.manufacturer,
                        mac: this.searchForm.mac,
                        ip: this.searchForm.ip,
                        createdTimeStart: createdTimeStart,
                        createdTimeEnd: createdTimeEnd
                    }).then(resp => {
                        if(resp.data.data != null){
                            var records =resp.data.data.records;
                            records.forEach(element => {
                                element.createdAt = timestampToDateStr(element.createdAt);
                            });
                            this.tableData = records;
                            this.recordCount = resp.data.data.recordCount;
                        }
                });
            },
            reset(formName){
                this.$refs[formName].resetFields();
            }
        }

    }
</script>

<style>
    .el-header, .el-footer {
        background-color: #409EFF;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
  
    .el-aside {
        background-color: #FFFFFF;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 50px;
        min-height: 82vh;
      
    }
  
    
    body > .el-container {
        margin-bottom: 40px;
    }
    
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }
    
    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
    .el-pagination {
        text-align: right;
    }
    .el-form-item {
        text-align: left;
    }
    .el-header {
        text-align: right;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
        
</style>