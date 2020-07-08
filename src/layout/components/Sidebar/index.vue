<template>
    <div>
        <logo></logo>
        <Menu theme="dark" active-name="1-2" :open-names="['1']">
            <Menu-item name="6" :key="1">
                <Icon type="document-text"></Icon>
                文章管理
            </Menu-item>
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-paper"/>
                    内容管理
                </template>
                <Menu-item name="1-1">文章管理</Menu-item>
                <Menu-item name="1-2">评论管理</Menu-item>
                <Menu-item name="1-3">举报管理</Menu-item>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-people"/>
                    用户管理
                </template>
                <Menu-item name="2-1">新增用户</Menu-item>
                <Menu-item name="2-2">活跃用户</Menu-item>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats"/>
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <Menu-item name="3-1">新增和启动</Menu-item>
                    <Menu-item name="3-2">活跃分析</Menu-item>
                    <Menu-item name="3-3">时段分析</Menu-item>
                </MenuGroup>
                <MenuGroup title="留存">
                    <Menu-item name="3-4">用户留存</Menu-item>
                    <Menu-item name="3-5">流失用户</Menu-item>
                </MenuGroup>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats"/>
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <Menu-item name="3-1">新增和启动</Menu-item>
                    <Menu-item name="3-2">活跃分析</Menu-item>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats"/>
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats"/>
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats"/>
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats"/>
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats"/>
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
        </Menu>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import Logo from './Logo.vue'

    @Component({
        components: {
            Logo
        }
    })
    export default class Sidebar extends Vue {
    }
</script>

<style scoped>

</style>
