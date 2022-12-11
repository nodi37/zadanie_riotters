<script setup>
import Icon from "@/components/Base/Icon.vue";
import { mdiDotsHorizontal } from "@mdi/js";
</script>

<template>
    <div class="profile">
        <img class="profile__image" src="@/assets/profileImage.png" alt="Marc Webber">
        <div class="profile__data">
            <span class="profile__user-name">
                Marc Webber
            </span>
            <span class="profile__user-email">
                marc@riot.com
            </span>
        </div>
        <icon class="profile__action" :mdiIconPath="mdiDotsHorizontal" />
    </div>
</template>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.profile {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 2rem;
    padding-top: .5rem;

    &__image {
        height: 4rem;
        width: 4rem;
        border-radius: 99px;
        object-fit: cover;
        background-color: white;
        outline: 1px solid $color-gray-light;
    }

    &__data {
        font-size: 1.4rem;
    }

    &__user-name {
        font-weight: 500;
    }

    &__user-email {
        color: $color-gray;
    }

    &__action {
        height: 4rem;
        width: 4rem;
        fill: $color-gray;
        transition: all 150ms;
        cursor: pointer;

        &:active {
            fill: $color-gray-dark;
        }
    }
}
</style>