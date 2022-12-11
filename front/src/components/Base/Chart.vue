<script setup>
import { onMounted } from "@vue/runtime-core";
import Chart from "chart.js/auto";

const props = defineProps(["cid", "chartObj", "height"]);

onMounted(() => {
  const chart = new Chart(
    document.getElementById("chart-" + props.cid),
    props.chartObj
  );
});
</script>

<template>
  <canvas :id="'chart-' + cid" :height="height"></canvas>
</template>

<style lang="scss" scoped>
</style>
