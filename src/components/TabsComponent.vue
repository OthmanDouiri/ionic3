<template>
  <!-- Menu -->
  <ion-menu content-id="main-content" side="start" class="custom-menu">
    <ion-header>
      <ion-toolbar>
        <ion-title color="light">Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-list>
        <!-- Login -->
        <ion-item button @click="closeMenu" router-link="/login">
          <ion-icon :icon="logIn" slot="start"></ion-icon>
          <ion-label>Login</ion-label>
        </ion-item>

        <!-- Security -->
        <ion-item button @click="closeMenu" router-link="/security">
          <ion-icon :icon="key" slot="start"></ion-icon>
          <ion-label>Security</ion-label>
        </ion-item>

        <!-- Privacy Policy -->
        <ion-item button @click="closeMenu" router-link="/privacy">
          <ion-icon :icon="documentText" slot="start"></ion-icon>
          <ion-label>Privacy Policy</ion-label>
        </ion-item>

        <!-- Settings -->
        <ion-item button @click="closeMenu" router-link="/settings">
          <ion-icon :icon="settings" slot="start"></ion-icon>
          <ion-label>Settings</ion-label>
        </ion-item>

        <!-- About -->
        <ion-item button @click="closeMenu" router-link="/about">
          <ion-icon :icon="informationCircle" slot="start"></ion-icon>
          <ion-label>About Us</ion-label>
        </ion-item>

        <!-- Contact -->
        <ion-item button @click="closeMenu" router-link="/contact">
          <ion-icon :icon="mail" slot="start"></ion-icon>
          <ion-label>Contact Us</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <!-- Main content wrapped in ion-page -->
  <ion-page id="main-content" class="nav-menu">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="end">
          <!-- Botón para abrir el menú -->
          <ion-menu-button v-if="!isLoginPage"></ion-menu-button>
        </ion-buttons>

        <ion-buttons slot="start">
          <ion-button
            color="light"
            @click="$router.back()"
            v-if="route.path !== '/home'"
          >
            <ion-icon :icon="arrowBack" />
          </ion-button>
        </ion-buttons>

        <!-- Título dinámico -->
        <ion-title class="nav-menu text-center">{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Sección de Tabs -->
    <ion-tabs>
      <ion-router-outlet :key="$route.fullPath"></ion-router-outlet>
      <ion-tab-bar v-if="!isLoginPage" slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="notifications" href="/notifications">
          <ion-icon :icon="notifications" />
          <ion-label>Notifications</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="heart" href="/likes">
          <ion-icon :icon="heart" />
          <ion-label>Likes</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="settings" href="/settings">
          <ion-icon :icon="settings" />
          <ion-label>Settings</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="person" href="/person">
          <ion-icon :icon="person" />
          <ion-label>Profil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonButton,
  IonList,
  IonItem,
} from "@ionic/vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";

import {
  arrowBack,
  home,
  notifications,
  settings,
  person,
  heart,
  logIn,
  key,
  documentText,
  informationCircle,
  mail,
} from "ionicons/icons";

// Estado del título de la página
const pageTitle = ref("Home");

// Détecter si la page actuelle est la page de connexion
const isLoginPage = ref(false);

// Detectar cambios en la ruta
const route = useRoute();

const updatePageState = () => {
  const loginPages = [
    "/login",
    "/signup/1",
    "/signup/2",
    "/signup/3",
    "/signup/4",
    "/signup/5",
    "/signup/6",
  ];
  isLoginPage.value = loginPages.includes(route.path);
  switch (route.path) {
    case "/home":
      pageTitle.value = "Home";
      break;
    case "/notifications":
      pageTitle.value = "Notifications";
      break;
    case "/settings":
      pageTitle.value = "Settings";
      break;
    case "/likes":
      pageTitle.value = "Likes";
      break;
    case "/person":
      pageTitle.value = "Profil";
      break;
    case "/places-to-go":
      pageTitle.value = "Places to go";
      break;
    case "/popular":
      pageTitle.value = "Popular";
      break;
    case "/privacy":
      pageTitle.value = "Privacy";
      break;
    case "/security":
      pageTitle.value = "Security";
      break;
    case "/contact":
      pageTitle.value = "Contact";
      break;
    case "/about":
      pageTitle.value = "About";
      break;
    default:
      pageTitle.value = "";
  }
};

watch(() => route.path, updatePageState);
onMounted(updatePageState);

// Cerrar el menú
const closeMenu = () => {
  const menu = document.querySelector("ion-menu");
  menu?.close();
};
</script>

<style scoped>
.nav-menu {
  background-color: orangered;
}

ion-toolbar,
ion-tab-bar {
  --background: #ff4500 !important;
  --ion-background-color: orangered !important;
}

ion-tab-button,
ion-menu-button,
ion-button {
  --color-selected: white;
  --color: white;
}

.text-center {
  color: rgb(255, 255, 255);
  text-align: center;
}
</style>
