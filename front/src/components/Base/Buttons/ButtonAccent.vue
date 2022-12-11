<script setup>
const props = defineProps(["text"]);
</script>

<template>
  <button class="btn" :aria-label="text">{{ text }}</button>
</template>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
@import "@/scss/_mixins.scss";
@include button;
.btn {
  background-color: $color-accent;
  color: white;

  &:hover {
    background-color: $color-accent-dark;
  }

  &:active {
    background-color: $color-accent-dark2;
  }
}
</style>