import { createApp } from "vue";
import App from "./App.vue";
import Icon from "@/components/Dynamic/Icon.vue";

const app = createApp(App);

app.component("Icon", Icon);

app.mount("#app");