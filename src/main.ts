// import { createApp } from 'vue';
// import App from './App.vue'
// import router from './router'
// import store from './store'

// // Vue.config.productionTip = false

// const app = createApp();
// app.use()
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store  from "./store";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
