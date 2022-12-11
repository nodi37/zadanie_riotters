<script setup>
import { ref, watch } from "vue";
const props = defineProps(["tabList"]);
const activeTab = ref(1);
</script>

<template>
  <div class="tabs">
    <ul class="tabs__button-list">
      <li
        v-for="(tab, index) in tabList"
        :key="index"
        class="tabs__button"
        :class="{ 'tabs__button--active': index == activeTab - 1 }"
      >
        <label :for="`label-${index}`" v-text="tab" />
        <input
          :id="`label-${index}`"
          type="radio"
          :name="`${index}-tab`"
          :value="index + 1"
          v-model="activeTab"
        />
      </li>
    </ul>
    <slot name="divider" />
    <template v-for="(tab, index) in tabList">
      <div :key="index" v-if="index + 1 === activeTab">
        <slot :name="`tabPanel-${index + 1}`" />
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  &__button-list {
    position: relative;
    list-style: none;
  }

  &__button {
    & input {
      display: none;
    }
  }
}
</style>

