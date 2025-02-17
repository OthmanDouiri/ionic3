import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import ExampleVue from "@/components/ExampleVue.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/start",
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
        path: "login",
        component: () => import("@/views/LoginPage.vue"),
      },
      {
        path: "start",
        component: () => import("@/views/StartPage.vue"),
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
        path: "Likes",
        component: () => import("@/views/LikesPage.vue"),
      },
      {
        path: "settings",
        component: () => import("@/views/SettingPage.vue"),
      },
      {
        path: "person",
        component: () => import("@/views/PersonPage.vue"),
      },
      {
        path: "popular",
        component: () => import("@/views/PopularPage.vue"),
      },
      {
        path: "places-to-go",
        component: () => import("@/views/PlacetogoPage.vue"),
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
