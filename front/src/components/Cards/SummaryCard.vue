<script setup>
import Card from "@/components/Base/Card.vue";
import HeadingSmall from "@/components/Base/HeadingSmall.vue";
import Icon from "@/components/Base/Icon.vue";
import Chart from "@/components/Base/Chart.vue";
import { chartBig } from "@/utils/chartBig.js";
import { mdiDotsHorizontal } from "@mdi/js";
</script>

<template>
  <card class="card">
    <div class="card__top">
      <heading-small class="card__title" text="Summary" />
      <icon :mdiIconPath="mdiDotsHorizontal" />
    </div>
    <div class="chart">
      <chart cid="summary" :chartObj="chartBig" height="200" />
    </div>
  </card>
</template>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
@import "@/scss/_mixins.scss";
@include card;
</style>