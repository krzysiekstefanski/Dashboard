<script>
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "vue3-styled-components";

export default {
  components: {
    GlobalStyles,
    ThemeProvider,
  },
};
</script>

<template>
  <ThemeProvider>
    <RouterView />
  </ThemeProvider>
</template>
