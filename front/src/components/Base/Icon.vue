<script setup>
const props = defineProps(['mdiIconPath']);
</script>

<template>
  <svg class="icon" viewBox="0 0 24 24">
    <path :d="mdiIconPath"></path>
  </svg>
</template>

