<template>
  <NuxtLayout :name="layout">
    <main ref="disco">
      <div>This is a Home Page</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
        blanditiis delectus eos et, iure labore neque perferendis, provident
        quibusdam saepe ut, voluptatem. Ea earum incidunt itaque quidem quisquam
        quo sint.
      </p>
      <button v-ripple class="primary-button" @click="process">Snap</button>
    </main>
  </NuxtLayout>
</template>

<script setup></script>

<script>
import HtmlImageProcessor from "html-image-processor";
const layout = "default";
export default {
  name: "Home",
  components: {},
  methods: {
    process() {
      const htmlImageProcessor = new HtmlImageProcessor({});

      const imageFile = htmlImageProcessor.process(this.$refs.disco);

      const shareData = {
        title: "MDN",
        text: "Learn web development on MDN!",
        url: "https://developer.mozilla.org",
        files: [imageFile],
      };
      window.navigator.share(shareData);
    },
  },
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
