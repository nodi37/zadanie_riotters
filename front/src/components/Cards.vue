<script setup>
import BalanceCard from "@/components/Cards/BalanceCard.vue";
import SummaryCard from "@/components/Cards/SummaryCard.vue";
import TabsCard from "@/components/Cards/TabsCard.vue";

</script>

<template>
  <div class="cards">
    <balance-card class="cards__balance" />
    <summary-card class="cards__summary" />
    <tabs-card class="cards__tabs" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/_variables";

.cards {
  display: grid;
  gap: 2.2rem;
  grid-template-columns: 100%;

  &__summary {
    order: 3;
  }

  @media screen and (min-width: $bp-desktop) {
    grid-template-columns: repeat(4, minmax(0, 1fr));

    &__balance {
      grid-column: 1 / span 2;
    }

    &__summary {
      order: unset;
      grid-column: 3 / span 2;
    }

    &__tabs {
      grid-column: 1 / -1;
    }
  }
}
</style>