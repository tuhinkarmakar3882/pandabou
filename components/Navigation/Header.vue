<template>
  <header>
    <img src="https://picsum.photos/36" alt="Pandabou Website Logo" />

    <p>PandaBou</p>

    <button v-ripple class="primary-button">Login</button>
  </header>
</template>

<script>
export default {
  name: "NavigationHeader",
  components: {},
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  height: var(--spacing-max);
  gap: var(--spacing-small-3x);
  background: var(--color-top-nav-bg);
  padding-inline: var(--spacing-standard-1x);
  box-shadow: 0 2px 4px var(--default-shadow-color);

  img {
    border-radius: 100vh;
  }

  button {
    margin-left: auto;
  }
}
</style>
