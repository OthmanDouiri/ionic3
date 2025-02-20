<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- General Settings -->
      <ion-list>
        <ion-list-header>
          <ion-label>General</ion-label>
        </ion-list-header>

        <ion-item>
          <ion-icon :icon="moonOutline" slot="start"></ion-icon>
          <ion-label>Dark Mode</ion-label>
          <ion-toggle v-model="darkMode"></ion-toggle>
        </ion-item>

        <ion-item>
          <ion-icon :icon="notificationsOutline" slot="start"></ion-icon>
          <ion-label>Notifications</ion-label>
          <ion-toggle v-model="notifications"></ion-toggle>
        </ion-item>

        <ion-item>
          <ion-icon :icon="languageOutline" slot="start"></ion-icon>
          <ion-label>Language</ion-label>
          <ion-select v-model="language" placeholder="Select">
            <ion-select-option value="en">English</ion-select-option>
            <ion-select-option value="es">Spanish</ion-select-option>
            <ion-select-option value="fr">French</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>

      <!-- Account Settings -->
      <ion-list>
        <ion-list-header>
          <ion-label>Account</ion-label>
        </ion-list-header>

        <ion-item button @click="editProfile">
          <ion-icon :icon="personOutline" slot="start"></ion-icon>
          <ion-label>Edit Profile</ion-label>
          <ion-icon :icon="chevronForwardOutline" slot="end"></ion-icon>
        </ion-item>

        <ion-item button @click="openPrivacy">
          <ion-icon :icon="lockClosedOutline" slot="start"></ion-icon>
          <ion-label>Privacy</ion-label>
          <ion-icon :icon="chevronForwardOutline" slot="end"></ion-icon>
        </ion-item>

        <ion-item button @click="openSecurity">
          <ion-icon :icon="shieldOutline" slot="start"></ion-icon>
          <ion-label>Security</ion-label>
          <ion-icon :icon="chevronForwardOutline" slot="end"></ion-icon>
        </ion-item>
      </ion-list>

      <!-- Logout Button -->
      <ion-list>
        <ion-item button color="danger" @click="logout">
          <ion-icon :icon="logOutOutline" slot="start"></ion-icon>
          <ion-label>Log Out</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonToggle,
  IonSelect,
  IonSelectOption,
  IonIcon,
} from "@ionic/vue";
import { ref } from "vue";
import {
  moonOutline,
  notificationsOutline,
  languageOutline,
  personOutline,
  lockClosedOutline,
  shieldOutline,
  logOutOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import router from "@/router";

// State variables
const darkMode = ref(false);
const notifications = ref(true);
const language = ref("en");

// Methods for navigation
const editProfile = () => {
   router.push('/person'); 
};
const openPrivacy = () => {
  router.push('/privacy'); 
};
const openSecurity = () => {
  router.push('/security'); 
};
const logout = () => {
  console.log("Logging out...");
};
</script>

<style scoped>
ion-list-header {
  margin-top: 10px;
  font-weight: bold;
  color: #333;
}

ion-item {
  --padding-start: 16px;
  --inner-padding-end: 16px;
}
</style>
