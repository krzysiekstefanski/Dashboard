<script>
import HelloWorld from "./components/HelloWorld.vue";
import { ThemeProvider } from "vue3-styled-components";

export default {
  components: {
    HelloWorld,
    ThemeProvider,
  },
};
</script>

<template>
  <ThemeProvider>
    <HelloWorld />
  </ThemeProvider>
</template>
