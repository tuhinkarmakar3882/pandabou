<template>
  <div>
    <NuxtPage />

    <link
      href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;1,400&family=Raleway:wght@300;400;500&display=swap"
      rel="stylesheet"
    />
  </div>
</template>

<script lang="ts" setup>
import { useHead } from "nuxt/app";

useHead({
  title: "Home",
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - PandaBou` : "PandaBou";
  },
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ children: "console.log('Hello world')" }],
});
</script>
