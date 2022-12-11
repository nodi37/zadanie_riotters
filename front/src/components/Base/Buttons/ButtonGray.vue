<script setup>
const props = defineProps(['btnLabel'])
</script>

<template>
  <button type="button" class="button" :aria-label="btnLabel">
    <slot></slot>
  </button>
</template>


<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.button {
  flex: 0 0 auto;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: .8rem 1.2rem;
  background-color: $color-gray-lightest;
  border: none;
  border-radius: 8px;
  box-shadow: $box-shadow;
  cursor: pointer;
  transition: all 150ms;

  &:hover {
    background-color: #e2e2e4;
  }

  &:active {
    background-color: #cccccc;
  }
}
</style>