<script setup>
const props = defineProps(['count']);
</script>

<template>
    <div v-if="count" class="notification-badge">
        {{ count > 9 ? '9+' : count }}
    </div>
</template>

<style lang="scss" scoped>
@import "@/scss/_animations.scss";

.notification-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.6rem;
    padding: 1rem .8rem;
    color: white;
    font-size: 1.1rem;
    font-weight: 700;
    background-color: red;
    border-radius: 100px;
}
</style>