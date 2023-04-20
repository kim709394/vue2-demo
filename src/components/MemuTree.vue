<template>
    <div>
        <div  v-for="item of treeData" :key="item.id" >
            <el-submenu :index="item.id" v-if="item.type == 'dir'" >
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">{{ item.title }}</span>
                </template>
                <!-- 递归渲染树形菜单 -->
                <memuTree :treeData="item.children" v-if="item.children.length > 0"></memuTree>
            </el-submenu>
            <el-menu-item :index="item.id" :route="item.url" v-else>{{ item.title }}</el-menu-item>
        </div>       
    </div>
</template>

<script>
export default {
    name: 'memuTree',
    props:{
            treeData:{
                type: Array,
                default:() => []
            }
        }
}
</script>

<style>


</style>