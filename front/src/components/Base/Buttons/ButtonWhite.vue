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
  border: 1px solid $color-gray-light;
  background-color: white;
  color: $color-accent;

  &:hover {
    background-color: whitesmoke;
  }

  &:active {
    background-color: gray;
    color: white;
  }
}
</style>