import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import App from "./App.vue";
import router from "./router";
import i18n from "@/assets/lang";
import Config from "./Config";
import "./assets/main.scss";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(i18n);
app.use(ElementPlus);
app.use(createPinia());
app.use(router);
app.mount("#app");
app.config.globalProperties.$config = Config;
app.config.globalProperties.$t = i18n;