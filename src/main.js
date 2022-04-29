const { createApp } = require("vue");
import App from "./App.vue";
import store from "./store";
createApp(App).use(store).mount("#app");

