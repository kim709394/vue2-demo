<template>
    <div>
        <el-container>
            <el-header>
                <!-- 使用绑定点击事件和路由提供的$router.push(path)函数实现路由跳转 -->
                <el-button type="danger" @click ='jump("/c/c1")'>c1</el-button>
                <el-button type="success" @click = 'jump("/c/c2")'>c2</el-button>
                <el-button type="info" @click = 'jump("/c/c3")'>c3</el-button>
                <el-button type="warning" @click = 'jump("/about")'>about</el-button>
            </el-header>
            <el-container>
                <!-- 侧边栏 -->
                <el-aside width="200px">
                    <!-- 使用router-link标签和to属性实现路由跳转 -->
                    <router-link to="/c/c1">c1</router-link><br/>
                    <router-link to="/c/c2">c2</router-link><br/>
                    <router-link to="/c/c3">c3</router-link><br/>
                    <router-link to="/about">about</router-link>
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

    export default {
       
        methods: {
            jump(path){
                this.$router.push(path);
            }
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
    
 
        
</style>