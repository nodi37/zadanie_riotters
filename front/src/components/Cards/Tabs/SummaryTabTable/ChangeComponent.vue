<script setup>
import Icon from "@/components/Base/Icon.vue";
import {
  mdiArrowTopRightThinCircleOutline,
  mdiArrowBottomRightThinCircleOutline,
} from "@mdi/js";
import { computed } from "@vue/runtime-core";

const props = defineProps(["number"]);

const isPositive = computed(() => props.number > 0);
const formattedNum = computed(() =>
  props.number < 0
    ? props.number.replace("-", "- ") + "%"
    : "+ " + props.number + "%"
);
</script>

<template>
  <div class="change">
    <span :class="{ 'change--up': isPositive, 'change--down': !isPositive }">
      {{ formattedNum }}
    </span>
    <icon
      class="icon"
      :class="{ 'change--up': isPositive, 'change--down': !isPositive }"
      :mdiIconPath="
        isPositive
          ? mdiArrowTopRightThinCircleOutline
          : mdiArrowBottomRightThinCircleOutline
      "
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/_variables";

.change {
  display: flex;
  align-items: center;
  gap: .5rem;
  font-weight: 600;

  &--up {
    color: $color-green;
  }

  &--down {
    color: $color-red;
  }

  .icon {
    height: 1.8rem;
    width: 1.8rem;
    fill: currentColor;
  }
}
</style>