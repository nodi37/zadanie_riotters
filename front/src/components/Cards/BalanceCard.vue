<script setup>
import Card from "@/components/Base/Card.vue";
import HeadingSmall from "@/components/Base/HeadingSmall.vue";
import Heading from "@/components/Base/Heading.vue";
import Icon from "@/components/Base/Icon.vue";
import ButtonAccent from "@/components/Base/Buttons/ButtonAccent.vue";
import ButtonWhite from "@/components/Base/Buttons/ButtonWhite.vue";
import { mdiDotsHorizontal, mdiArrowUpCircle } from "@mdi/js";
</script>

<template>
  <card class="card">
    <div class="card__top">
      <heading-small class="card__title" text="Current Balance" />
      <icon :mdiIconPath="mdiDotsHorizontal" />
    </div>
    <div class="card__balance">
      <span class="card__currency">$</span>
      <heading class="card__heading" text="21 432.23" />
    </div>
    <div class="card__state">
      <icon :mdiIconPath="mdiArrowUpCircle" />
      <span>12% vs last month</span>
    </div>
    <div class="card__actions">
      <button-accent text="Quick Invest" />
      <button-white text="Show report" />
    </div>
  </card>
</template>


<style lang="scss" scoped>
@import "@/scss/_variables.scss";
@import "@/scss/_mixins.scss";
@include card;
.card {
  display: flex;
  flex-direction: column;

  
  &__top {
    margin-bottom: 2rem;
  }

  &__balance {
    margin-bottom: 1rem;
  }

  &__currency {
    color: $color-gray;
    font-size: 4rem;
    font-weight: 300;
  }

  &__state {
    display: flex;
    align-items: center;
    gap: 3px;
    color: $color-green;
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 3rem;

    & svg {
      height: 1.8rem;
      width: 1.8rem;
      //W mdi nie ma takiej ikonki więc obrót
      transform: rotate(45deg);
      fill: $color-green;
    }
  }

  &__actions {
    margin-top: auto;
    display: flex;
    gap: 1rem;
  }
}
</style>