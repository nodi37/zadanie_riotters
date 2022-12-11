<script setup>
import { reactive, ref, onMounted } from "vue";
import {
  getCurrenciesData,
  getCurrencyInfo,
  dummyData,
} from "@/services/currencyService.js";
import ButtonAccent from "@/components/Base/Buttons/ButtonAccent.vue";
import ButtonWhite from "@/components/Base/Buttons/ButtonWhite.vue";
import ChangeComponent from "@/components/Cards/Tabs/SummaryTabTable/ChangeComponent.vue";
import Chart from "@/components/Base/Chart.vue";
import chartSmall from "@/utils/chartSmall.js";

const loading = ref(true);
const apiError = ref(false);
const currenciesArr = reactive({ value: [] });

const formatPrice = (price) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(floatRound(price));

const floatRound = (number) => (Math.floor(number * 100) / 100).toFixed(2);


//Prosta obsługa błędów
onMounted(async () => {
  try {
    const apiData = await getCurrenciesData();

    for (const currency of apiData) {
      const currInfo = await getCurrencyInfo(currency.symbol);
      currenciesArr.value.push({
        id: currency.id,
        name: currency.name,
        symbol: currency.symbol,
        price: currency.quote.USD.price,
        change_24h: currency.quote.USD.percent_change_24h,
        logo: currInfo.logo,
      });
    }
  } catch (error) {
    console.log(error)
    apiError.value = true;
  }

  loading.value = false;
});
</script>

<template>
  <span v-if="loading || apiError" :class="{ 'text-red': apiError }">
    {{ apiError ? 'Error when loading data from API!' : 'Loading...' }}
  </span>
  <div v-else class="summary-table">
    <div v-for="curr in currenciesArr.value" :key="curr.symbol" class="row">
      <img class="row__logo" :src="curr.logo" :alt="curr.name" />

      <div class="row__column row__column--name">
        <span>{{ curr.symbol }}</span>
        <span class="row__value">{{ curr.name }}</span>
      </div>

      <div class="row__column">
        <span>Price</span>
        <span class="row__value">{{ formatPrice(curr.price) }}</span>
      </div>

      <div class="row__column">
        <span>Change</span>
        <change-component :number="floatRound(curr.change_24h)" />
      </div>

      <div class="row__chart">
        <chart :cid="'sm-tab-' + curr.symbol" :chartObj="chartSmall(curr.change_24h > 0)" height="60" />
      </div>

      <div class="row__actions">
        <button-white text="Sell" />
        <button-accent text="Buy" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/_variables";

.text-red {
  color: red;
}

.summary-table {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & .row {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
    padding: 1.5rem;
    background-color: white;
    border: 1px solid $color-gray-light;
    border-radius: 5px;
    font-size: 1.4rem;

    &__logo {
      height: 3rem;
      width: 3rem;
      margin: 0 1rem;
      border-radius: 99px;
      -webkit-border-radius: 99px;
      outline: 1px solid $color-gray-light;
      outline-offset: 6px;
    }

    &__column {
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
      text-align: center;
    }

    &__value {
      color: black;
      font-weight: 500;
    }

    &__chart {
      justify-self: center;
      max-width: 80%;

      grid-row: 2 / span 1;
      grid-column: 2/ span 1;
    }

    &__actions {
      display: flex;
      gap: 1rem;
      place-self: end;
    }

    @media screen and (min-width: $bp-desktop) {
      grid-template-columns: auto repeat(3, 1fr) 2fr auto;
      grid-template-rows: 1fr;
      justify-items: start;
      align-items: center;

      &__column {
        text-align: unset;
      }

      &__chart {
        grid-row: unset;
        grid-column: unset;
      }

      &__actions {
        grid-column: unset;
        place-self: unset;
      }
    }
  }
}
</style>