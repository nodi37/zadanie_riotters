<script setup>
import { mdiMagnify } from "@mdi/js";

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="block">
    <svg class="block__icon" viewBox="0 0 24 24">
      <path :d="mdiMagnify"></path>
    </svg>
    <input class="input" type="text" placeholder="Search" :value="modelValue"
      @input="(e) => emit('update:modelValue', e.target.value)" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.block {
  display: flex;
  align-items: center;
  background-color: $color-gray-lightest;
  border-radius: 8px;
  box-shadow: $box-shadow;
  transition: all 300ms;

  &__icon {
    width: 24px;
    height: 24px;
    margin: 0 0.5rem;
    fill: $color-gray;
  }

  //Działa w Chrome/Edge/Safari/Opera
  &:has(.input:focus) .block__icon {
    fill: $color-accent;
  }

  & .input {
    width: 100%;
    color: #605f66;
    font-size: 1.6rem;
    padding: 1rem 1rem 1rem 0;
    border: none;
    background-color: inherit;
    outline: none;
    cursor: pointer;

    &::placeholder {
      color: $color-gray;
    }
  }
}
</style>