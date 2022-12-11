<script setup>
import card from "@/components/Base/Card.vue";
import TabsComponent from "@/components/Base/TabsComponent.vue";
import SummaryTab from "@/components/Cards/Tabs/SummaryTab.vue";
</script>

<template>
  <card class="tabs-card">
    <tabs-component
      :tabList="['Summary', 'Table', 'Charts', 'Reporting', 'Analisys']"
    >
    <template v-slot:divider>
      <div class="tabs-card__divider">&nbsp;</div>
    </template>
      <template v-slot:tabPanel-1>
        <summary-tab />
      </template>
      <template v-slot:tabPanel-2> Może nie za dobrze </template>
      <template v-slot:tabPanel-3> Może nie za szybko </template>
      <template v-slot:tabPanel-4> Może nie za ładnie! </template>
      <template v-slot:tabPanel-5> ALE TANIO!!! </template>
    </tabs-component>
  </card>
</template>

<style lang="scss">
@import "@/scss/_variables.scss";

.tabs-card {
  color: $color-gray;

  .tabs {
    &__button-list {
      display: flex;
      max-width: 100%;
      overflow-x: scroll;
      gap: 2rem;
      letter-spacing: -1px;
      
      &::-webkit-scrollbar {
        height: 0 !important;
        width: 0 !important;
      }
    }

    &__button {
      transition: color 0.5s;

      & label {
        display: block;
        padding: 0 0 1rem 0;
        cursor: pointer;
      }

      &--active {
        color: black;
        border-bottom: 3px solid $color-accent;
      }
    }
  }

  &__divider {
    width: 130%;
    height: 1px;
    margin-bottom: 2rem;
    background-color: $color-gray-light;
  }
}
</style>