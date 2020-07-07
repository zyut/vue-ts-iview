<template>
    <div class="app-wrapper">
        <sidebar class="sidebar-container">sidebar-container</sidebar>
        <div class="main-container">
            <header>
                <div class="nav-bar">nav-bar</div>
                <div class="tags-view">tags-view</div>
            </header>
            <div class="app-container">app-container</div>
        </div>
    </div>
</template>

<script lang="ts">
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
    .app-wrapper {
        position: relative;
        height: 100%;
        width: 100%;
    }
</style>
