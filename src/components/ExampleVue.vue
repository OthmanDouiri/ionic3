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

        <!-- Forgot Password -->
        <ion-item button @click="closeMenu" router-link="/forgot-password">
          <ion-icon :icon="key" slot="start"></ion-icon>
          <ion-label>Forgot Password</ion-label>
        </ion-item>

        <!-- Privacy Policy -->
        <ion-item button @click="closeMenu" router-link="/privacy-policy">
          <ion-icon :icon="documentText" slot="start"></ion-icon>
          <ion-label>Privacy Policy</ion-label>
        </ion-item>

        <!-- Terms of Service -->
        <ion-item button @click="closeMenu" router-link="/terms-of-service">
          <ion-icon :icon="clipboard" slot="start"></ion-icon>
          <ion-label>Terms of Service</ion-label>
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
          <ion-menu-button></ion-menu-button>
        </ion-buttons>

        <ion-buttons slot="start">
          <ion-button color="light" @click="$router.back()">
            <ion-icon :icon="arrowBack" />
          </ion-button>
        </ion-buttons>

        <!-- Título dinámico -->
        <ion-title class="nav-menu text-center">{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Sección de Tabs -->
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
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
  clipboard,
  informationCircle,
  mail,
} from "ionicons/icons";

// Estado del título de la página
const pageTitle = ref("Home");

// Detectar cambios en la ruta
const rout = useRoute();

watch(
  () => rout.path,
  (path) => {
    switch (path) {
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
      case "/login":
        pageTitle.value = "Login";
        break;
      default:
        pageTitle.value = "Home";
        break;
    }
  }
);

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
  --background: orangered !important;
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
