<template>
    <div class="nav-bar">
        <div class="hamburger-container">
        </div>
        <Breadcrumb class="breadcrumb-container">
            <Breadcrumb-item href="/">Home</Breadcrumb-item>
            <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>
            <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
        </Breadcrumb>
    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator'

    @Component({
        name: 'Navbar'
    })
    export default class Navbar extends Vue {
    }
</script>

<style scoped lang="scss">
    .nav-bar {
        position: relative;
        height: 50px;
        background-color: #fff;
        box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

        .hamburger-container {
            float: left;
            height: 100%;

            .hamburger {
                /*width: 20px;*/
                /*height: 20px;*/
            }
        }

        .breadcrumb-container {
            float: left;
            line-height: 50px;
            padding: 0 8px;
        }
    }
</style>
