import "./style.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { useProductStore } from "./store";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

const { initProductFields } = useProductStore();
initProductFields();
app.mount("#app");
