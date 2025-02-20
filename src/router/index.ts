import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import ExampleVue from "@/components/ExampleVue.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/start",
  },
  {
    path: "/start",
    component: () => import("@/views/StartPage.vue"), 
  },

  {
    path: "/",
    component: ExampleVue,
    children: [
      {
        path: "login",
        component: () => import("@/views/LoginPage.vue"),
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
      {
        path: "privacy",
        component: () => import("@/views/PrivacyPage.vue"),
      },
      {
        path: "security",
        component: () => import("@/views/SecurityPage.vue"),
      },
      {
        path: "signup/1",
        component: () => import("@/views/SignUp/SignUpPage1.vue"),
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
