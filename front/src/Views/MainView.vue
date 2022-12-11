<script setup>
import Cards from "@/components/Cards.vue";
import Bar from "@/components/Bar.vue";
import Sidebar from "@/components/Sidebar.vue";
import DimmingBottom from "@/components/Base/DimmingBottom.vue";


</script>

<template>
  <div class="view-container">
    <sidebar />
    <main class="main">
      <bar />
      <cards class="main__cards" />
      <dimming-bottom />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/_variables";

.view-container {
  display: flex;
}

.main {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  overflow: scroll;
  gap: 2.2rem;
  padding: 1.5rem;

  &__cards {
    //Margin of height of dimming component to let user see all content
    margin-bottom: 10rem;
  }

  @media screen and (min-width: $bp-desktop) {
    padding: 4rem 5rem;
  }
}
</style>