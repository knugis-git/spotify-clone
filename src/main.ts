import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/home.vue";
import Login from "./components/login.vue";
import "./style.css";
import App from "./App.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

const vueApp = createApp(App);
vueApp.use(router);
vueApp.mount("#app");
