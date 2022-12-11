<script setup>
import Icon from "@/components/Base/Icon.vue";
import NotificationCountBadge from "@/components/Base/NotificationCountBadge.vue";
import {
    mdiChartBellCurve,
    mdiBankOutline,
    mdiCheckDecagramOutline,
    mdiWalletOutline,
    mdiFlagVariantOutline,
    mdiAtomVariant
} from "@mdi/js";
import { reactive, ref } from 'vue';
import { useViewStore } from "@/stores/ViewStore.js";
const viewStore = useViewStore();


const activeTab = ref(0)
function handleClick(i) {
    activeTab.value = i;
    viewStore.changeSidebarState();
}
//Trzeba by to przenieść do jakiegoś store żeby było łatwiej zarządzać
const navItems = reactive({
    value: [
        { text: 'Overview', icon: mdiChartBellCurve, nCount: 12 },
        { text: 'Buy/Sell', icon: mdiBankOutline, nCount: 0 },
        { text: 'Wallets', icon: mdiCheckDecagramOutline, nCount: 0 },
        { text: 'Bundles', icon: mdiWalletOutline, nCount: 1 },
        { text: 'Reporting', icon: mdiFlagVariantOutline, nCount: 0 },
        { text: 'Community', icon: mdiAtomVariant, nCount: 0 },
    ]
});

</script>
<template>
    <nav class="navbar">
        <div class="list">
            <button v-for="(item, i) in navItems.value" :class="{ 'item--active': activeTab == i }" @click="handleClick(i)">
                <icon class="list__icon" :mdiIconPath="item.icon" />
                <span>{{ item.text }}</span>
                <NotificationCountBadge :count="item.nCount" />
            </button>
        </div>
    </nav>
</template>
<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.navbar {
    padding: 1rem;
    margin-bottom: .5rem;
}

.list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    color: $color-gray;

    & button {
        display: flex;
        align-items: center;
        gap: .8rem;
        padding: .6rem 1rem;
        color: inherit;
        font-weight: 500;
        background-color: transparent;
        border: 1px solid transparent;
        border-radius: 5px;
        transition: all .2s;
        cursor: pointer;

        //For accessibility
        &:focus {
            border-color: $color-accent;
        }

        & .notification-badge {
            margin-left: auto;
        }
    }

    & .item--active {
        color: black;
        background-color: white;
        border: 1px solid $color-gray-light;

        & .list__icon {
            fill: $color-accent;
        }
    }

    &__icon {
        height: 2.5rem;
        width: 2.5rem;
        fill: currentColor;
    }
}
</style>