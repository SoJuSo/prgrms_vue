import { createApp } from "vue";
import App from "~/App";
import store from "~/store/index";

// 여기서 createStore을 정리하는게 아닌 따로 파일을 만든다.
const app = createApp(App);
app.use(store);
app.mount("#app");
