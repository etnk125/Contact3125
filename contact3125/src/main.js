import { createApp } from "vue";
import App from "./App.vue";

// import css
import FomanticUI from "vue-fomantic-ui";
import "fomantic-ui-css/semantic.min.css";
import "./index.css";

// import router
import router from "./routers";

createApp(App).use(router).use(FomanticUI).mount("#app");
