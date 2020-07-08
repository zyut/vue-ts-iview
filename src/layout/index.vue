<template>
    <div class="app-wrapper">
<<<<<<< HEAD
        <sidebar class="sidebar-container"></sidebar>
        <div class="main-container hasTagsView">
            <header class="fix-header">
                <navbar></navbar>
                <tags-view></tags-view>
            </header>
            <app-main></app-main>
=======
        <sidebar class="sidebar-container">sidebar-container</sidebar>
        <div class="main-container">
            <header>
                <div class="nav-bar">nav-bar</div>
                <div class="tags-view">tags-view</div>
            </header>
            <div class="app-container">app-container</div>
>>>>>>> 5dff251fb9ac173b3338d56433cefb8a5f89a9e0
        </div>
    </div>
</template>

<script lang="ts">
<<<<<<< HEAD
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

=======
import { Component, Vue } from 'vue-property-decorator';
import { Sidebar } from './components'
@Component({
    components: {
        Sidebar
    }
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
>>>>>>> 5dff251fb9ac173b3338d56433cefb8a5f89a9e0
    .app-wrapper {
        position: relative;
        height: 100%;
        width: 100%;
    }
<<<<<<< HEAD

    .fix-header {
        position: fixed;
        width: calc(100% - #{$sideBarWidth});
        top: 0;
        right: 0;
        z-index: 9;
    }
=======
>>>>>>> 5dff251fb9ac173b3338d56433cefb8a5f89a9e0
</style>
