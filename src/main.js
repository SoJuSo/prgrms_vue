// import * as Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import World from "~/components/World";

const app = createApp(App);
app.component("World", World);
app.mount("#app");
