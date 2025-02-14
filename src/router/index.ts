import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import ExampleVue from "@/components/ExampleVue.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    component: ExampleVue,
    children: [
      {
        path: "",
        redirect: "/home",
      },
      {
        path: "home",
        component: () => import("@/views/HomePage.vue"),
      },
      {
        path: "notifications",
        component: () => import("@/views/NotificationsPage.vue"),
      },
      {
        path: "settings",
        component: () => import("@/views/SettingPage.vue"),
      },
      {
        path: "person",
        component: () => import("@/views/PersonPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  // Use: createWebHistory(process.env.BASE_URL) in your app
  history: createWebHistory(),
  routes,
});

export default router;
