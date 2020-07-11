import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import router from "./router";

new Vue({
	router,
	render: h => h(App),
}).$mount("#app");
