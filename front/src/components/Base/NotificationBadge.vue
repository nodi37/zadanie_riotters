<script setup>

</script>

<template>
  <div class="notification-badge" />
</template>

<style lang="scss" scoped>
@import "@/scss/_animations.scss";

.notification-badge {
  height: 10px;
  width: 10px;
  position: absolute;
  top: -3px;
  right: -5px;
  background-color: red;
  border-radius: 100px;
  animation: notificationBadge 5s ease-out infinite;
  z-index: 99;
}
</style>