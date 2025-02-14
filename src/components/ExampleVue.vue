<template>
  <!-- Menu -->
  <ion-menu content-id="main-content" side="start" class="custom-menu">
    <ion-header>
      <ion-toolbar>
        <ion-title color="light">Menu Content</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"> This is the menu content. </ion-content>
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
          <ion-button @click="$router.back()">
            <ion-icon :icon="arrowBack" />
          </ion-button>
        </ion-buttons>

        <!-- Título dinámico -->
        <ion-title class="nav-menu text-center text-light">{{ pageTitle }}</ion-title>
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

        <ion-tab-button tab="settings" href="/settings">
          <ion-icon :icon="settings" />
          <ion-label>Settings</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="person" href="/person">
          <ion-icon :icon="person" />
          <ion-label>Person</ion-label>
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
} from "@ionic/vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { arrowBack, home, notifications, settings, person } from "ionicons/icons";

// Estado del título de la página
const pageTitle = ref("Home");

// Detectar cambios en la ruta
const rout = useRoute();

watch(() => rout.path, (path) => {
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
    case "/person":
      pageTitle.value = "Person";
      break;
  }
});
</script>

<style scoped>
.nav-menu {
  background-color: orangered;
}

ion-toolbar, ion-tab-bar {
  --background: orangered !important;
  --ion-background-color: orangered !important;
}

ion-tab-button, ion-menu-button, ion-button {
  --color-selected: white;
  --color: white;
}
</style>
