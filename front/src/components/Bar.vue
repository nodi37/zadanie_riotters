<script setup>
import TextInput from "@/components/Base/TextInput.vue";
import ButtonGray from "@/components/Base/Buttons/ButtonGray.vue";
import Icon from "@/components/Base/Icon.vue";
import NotificationBadge from "@/components/Base/NotificationBadge.vue";
import { mdiBellOutline, mdiMenu } from "@mdi/js";
import { useViewStore } from "@/stores/ViewStore.js";
const viewStore = useViewStore();

</script>

<template>
  <div class="bar">
    <text-input class="bar__search-input" />
    <div class="bar__buttons">
      <button-gray btnLabel="Show notifications">
        <icon class="bar__icon" :mdiIconPath="mdiBellOutline" />
        <notification-badge nCount='10' />
      </button-gray>
      <button-gray btnLabel="Open menu" @click="() => viewStore.changeSidebarState()">
        <icon class="bar__icon" :mdiIconPath="mdiMenu" />
      </button-gray>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.bar {
  display: flex;
  gap: 1rem;

  &__search-input {
    flex: 0 0 20rem;

    &:has(.input:focus) {
      flex: 0 0 25rem;
    }

    @media screen and (min-width: $bp-desktop) {
      flex: 0 0 30rem;

      &:has(.input:focus) {
        flex: 0 0 50rem;
      }
    }
  }

  &__buttons {
    display: flex;
    gap: 1rem;
    margin-left: auto;
  }

  &__icon {
    height: 16px;
    width: 16px;
    fill: $color-gray;
  }
}
</style>