<template>
    <div>
        <el-container>
            <el-header>
                <span>
                    用户名：
                    <el-input v-model="username" label="用户名" style="width: 200px;" clearable placeholder="请输入登录用户名"></el-input>
                    密码：
                    <el-input placeholder="请输入密码" v-model="passwd"  style="width: 200px;" show-password></el-input>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <el-button type="success" @click="login()">登录</el-button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <el-button type="success" @click="logout()">注销</el-button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="sessionUser" v-if="sessionUser">
                            欢迎您: {{ sessionUser }}
                    </span>
                </span>
              
              
               
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
                    <el-menu router default-active="1-4-1" class="el-menu-vertical-demo"  :collapse="isCollapse" unique-opened>
                        <memu-tree :treeData="authorities" ></memu-tree>
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
    import MemuTree from '@/components/MemuTree.vue'
    import {resetRouter} from '@/router/myRouter'
    export default {
        //复用组件
        components: {
            MemuTree
        },
        //模拟登录完后获取会话用户的所有目录和菜单权限列表
        mounted(){
            let auths = localStorage.getItem('authorities');
            let username =localStorage.getItem('user');
            this.sessionUser = username;
            auths = JSON.parse(auths);
            this.menuRender(auths);
            this.authorities =auths;
            console.log(this.$router.getRoutes());
        },

        data(){
            return {
                //是否展开好收起属性
                isCollapse : true,
                authorities : [],
                username:'',
                passwd:'',
                sessionUser:''
            }
        },
       
        methods: {
           menuRender(menuArray){
            menuArray.forEach(element => {
                    if(element.type == 'list'){
                        //添加动态路由
                        this.$router.addRoute(
                            {
                                path: element.url ,
                                component: () => import('../views/children/ChildView1.vue')
                            }
                        )
                    }
                    if(element.children.length >0){
                        this.menuRender(element.children);
                    }
                });
           },
           login(){
                if(this.username && this.passwd){
                    let param=new URLSearchParams();
                    param.set('username',this.username);
                    param.set('password',this.passwd);
                    _myAxios.post('/user/login',param).then(resp => {
                        let loginUser = resp.data.data;
                        this.sessionUser = loginUser.name;
                        //获取当前用户菜单列表
                        _myAxios.get(`/user/getdirandlisttreebyuserid/${loginUser.id}`)
                        .then(resp => {
                            let tree = resp.data.data;
                            let array = tree.children;
                            this.authorities = array;
                            // localStorage:浏览器关闭前有效。sessionStorage：标签页关闭前有效
                            localStorage.setItem('authorities',JSON.stringify(this.authorities));
                            localStorage.setItem('user',this.sessionUser);
                            //打印所有路由信息
                            console.log(this.$router.getRoutes());
                            this.menuRender(array);
                            console.log(this.$router.getRoutes());
                        });
                    });
                }
            },
            logout(){
                //重置路由
                resetRouter();
                this.sessionUser = '';
                this.authorities = [];
                //清空换存
                localStorage.clear();
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
        text-align: left;
    }
    .sessionUser {
        text-align: right;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
        
</style>