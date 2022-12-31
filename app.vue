<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
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
