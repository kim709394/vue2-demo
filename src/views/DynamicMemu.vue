<template>
    <div>
        <el-container>
            <el-header>
         
            </el-header>
            <el-container>
                <!-- 侧边栏 -->
                <el-aside width="200px">
                    <!-- 导航栏 -->
                    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                        <el-radio-button :label="false">展开</el-radio-button>
                        <el-radio-button :label="true">收起</el-radio-button>
                    </el-radio-group>
                    <!-- 加上router属性开启导航菜单路由跳转 -->
                    <el-menu router default-active="1-4-1" class="el-menu-vertical-demo"  :collapse="isCollapse" unique-opened="true">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span slot="title">导航一</span>
                            </template>
                            <el-submenu index="1-4">
                                <span slot="title">选项4</span>
                                <el-menu-item index="1-4-1" route="/about">选项4-1</el-menu-item>
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
                        <router-view></router-view>
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
    export default {
        //模拟登录完后获取会话用户的所有目录和菜单权限列表
        mounted(){
            _myAxios.get('/user/getdirandlisttreebyuserid/62')
            .then(resp => {
                let tree = resp.data.data;
                let array = JSON.stringify(tree.children);
                this.authorities = array;
            })
        },

        data(){
            return {
                //是否展开好收起属性
                isCollapse : true,
                authorities : array
            }
        },
       
        methods: {
           
        },
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