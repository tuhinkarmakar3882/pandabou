<template>
  <NuxtLayout :name="layout">
    <div>This is a Home Page</div>
  </NuxtLayout>
</template>

<script setup>
const layout = "default";
</script>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.style-guide {
  padding-inline: var(--spacing-small-2x);

  * + * {
    margin: var(--spacing-small-1x) 0;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: var(--spacing-standard-1x);
  }
}
</style>
