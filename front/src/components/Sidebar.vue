<script setup>
import Logo from "@/components/Base/Logo.vue";
import HeadingSmall from "@/components/Base/HeadingSmall.vue";
import NavMenu from "@/components/NavMenu.vue";
import AsideUserProfile from "@/components/AsideUserProfile.vue";
import { useViewStore } from "@/stores/ViewStore.js";
import { onMounted, onUnmounted } from "vue";
const viewStore = useViewStore();


let lastBreakPoint = '';

//Opens/closes sidebar when changing breakpoints
const resizeHandler = () => {

    if (window.innerWidth < 1020 && lastBreakPoint == 'desktop') {
        viewStore.closeSidebar();
    }

    if (window.innerWidth > 1020 && lastBreakPoint == 'mobile') {
        viewStore.openSidebar();
    }

    lastBreakPoint = window.innerWidth < 1020 ? 'mobile' : 'desktop';
};



onMounted(() => {
    window.addEventListener("resize", resizeHandler);
    //Runing this here does nothing apart from setting current size deskop/mobile
    resizeHandler();
});

onUnmounted(() => {
    window.removeEventListener("resize", resizeHandler);
});

</script>

<template>
    <div>
        <div class="overlay" @click="() => viewStore.changeSidebarState()"
            :class="{ 'overlay--visible': viewStore.sidebarVisible }">
            &nbsp;
        </div>
        <aside class="sidebar" :class="{ 'sidebar--visible': viewStore.sidebarVisible }">
            <logo />
            <nav-menu />
            <div class="sidebar__divider">&nbsp;</div>
            <heading-small class="sidebar__subtitle" text="Favorites" />
            <!-- W razie dodania tutaj list ulubionych musi tu być element z overflow-y: scroll -->
            <aside-user-profile class="sidebar__user-profile" />
        </aside>
    </div>
</template>

<style lang="scss" scoped>
@import "@/scss/_variables";

.overlay {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    transform: translate(-100%);
    opacity: 0;
    background-color: $color-overlay;
    z-index: 59;
    transition: opacity .3s;

    &--visible {
        transform: translate(0);
        opacity: 1;
    }

    @media screen and (min-width: $bp-desktop) {
        display: none;
    }
}

.sidebar {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 30rem;
    height: 100vh;
    transform: translateX(-100%);
    background-color: $color-gray-lightest;
    transition: transform .5s, width .2s, opacity .3s;
    z-index: 60;

    &--visible {
        transform: translateX(0);
    }

    @media screen and (min-width: $bp-desktop) {
        position: relative;
        width: 0;
        opacity: 0;
        transform: translateX(0);
        overflow: hidden;

        &--visible {
            width: 30rem;
            opacity: 1;
        }
    }

    &__divider {
        height: 1px;
        width: 100%;
        background-color: $color-gray-light;
    }

    &__subtitle {
        padding: 1.6rem 2rem;
        color: $color-gray;
        font-size: 1.4rem;
    }

    &__user-profile {
        margin-top: auto;
    }
}
</style>