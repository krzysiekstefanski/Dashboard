import { createApp } from 'vue'
import { createPinia } from "pinia";
import router from "./router";
import Maska from 'maska'
import App from './App.vue'
import injectGlobalStyles from "./GlobalStyles";

createApp(App).use(createPinia()).use(router).use(Maska).mount('#app')

// We need to inject global styles after App is moutned(see line nr 8)
injectGlobalStyles();
