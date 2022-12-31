<template>
  <div class="default-layout">
    <NavigationHeader />

    <main>
      <slot />
    </main>

    <NavigationFooter />
  </div>
</template>

<script>
import NavigationFooter from "../components/Navigation/Footer";
import NavigationHeader from "../components/Navigation/Header";

export default {
  components: { NavigationFooter, NavigationHeader },
};
</script>

<style lang="scss" scoped>
.default-layout {
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
}
</style>
