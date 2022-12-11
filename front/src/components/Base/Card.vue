<script setup>
</script>

<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.card {
  padding: 2rem;
  border-radius: 1rem;
  background-color: $color-gray-lightest;
  box-shadow: $box-shadow;
  overflow-x: hidden;

  @media screen and (min-width: $bp-desktop) {
    padding: 3rem;
  }
}
</style>