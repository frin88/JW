import { createStore } from "vuex";
import ui from "./modules/ui";
import data from "./modules/data";

// Create a new store instance.
const store = createStore({
  modules: { ui, data }
});

export default store;
