<template>
  <!-- Menu -->
  <ion-menu content-id="main-content" side="start" class="custom-menu">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu Content</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"> This is the menu content. </ion-content>
  </ion-menu>

  <!-- Main content wrapped in ion-page -->
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="end">
          <!-- Button to open the menu -->
          <ion-menu-button></ion-menu-button>
        </ion-buttons>

        <ion-buttons slot="start">
          <ion-button @click="$router.back()">
            <ion-icon :icon="arrowBack" />
          </ion-button>
        </ion-buttons>

        <ion-title class="nav-menu text-center">Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Tabs Section -->
    <ion-tabs class="nav-menu">
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

  <div class="container"></div>
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
import { arrowBack } from "ionicons/icons";

import { home, notifications, settings, person } from "ionicons/icons";
</script>

<style scoped>
.nav-menu {
  background-color: orangered;
}
</style>
