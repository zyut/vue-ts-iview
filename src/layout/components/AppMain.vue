<template>
    <section class="app-main">app-main
    </section>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator'

    @Component({
        name: 'AppMain'
    })
    export default class AppMain extends Vue {

    }
</script>

<style lang="scss" scoped>
    .app-main {
        position: relative;
        width: 100%;
        min-height: calc(100vh - 50px);
    }

    .fix-header + .app-main {
        padding-top: 50px;
    }

    .hasTagsView {
        .app-main {
            /* 84 = navbar + tags-view = 50 + 34 */
            min-height: calc(100vh - 84px);
        }

        .fix-header + .app-main {
            padding-top: 84px;
        }
    }
</style>
