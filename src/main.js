import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import VueHighlightJS from "vue-highlightjs";
import "highlight.js/styles/default.css";

Vue.use(VueHighlightJS);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
