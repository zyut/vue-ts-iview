<template>
    <div class="app-wrapper">
        <sidebar class="sidebar-container"></sidebar>
        <div class="main-container hasTagsView">
            <header class="fix-header">
                <navbar></navbar>
                <tags-view></tags-view>
            </header>
            <app-main></app-main>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {Sidebar, Navbar, TagsView, AppMain} from './components'

    @Component({
        components: {
            Sidebar,
            TagsView,
            Navbar,
            AppMain
        }
    })
    export default class Index extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import "~@/styles/variable.scss";

    .app-wrapper {
        position: relative;
        height: 100%;
        width: 100%;
    }

    .fix-header {
        position: fixed;
        width: calc(100% - #{$sideBarWidth});
        top: 0;
        right: 0;
        z-index: 9;
    }
</style>
