<script setup>
const props = defineProps(["text"]);
</script>

<template>
  <h1 class="header">
    {{ text }}
  </h1>
</template>

<style lang="scss" scoped>
.header {
  font-size: 2rem;
  font-weight: 500;
}
</style>