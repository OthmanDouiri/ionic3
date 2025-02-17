<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Library</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="empty-state">
        <ion-icon :icon="alertCircleOutline" class="icon"></ion-icon>
        <p class="message">There's nothing to show yet</p>
      </div>
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
  IonIcon,
} from "@ionic/vue";
import { alertCircleOutline } from "ionicons/icons";
</script>

<style scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  color: #6c757d;
}

.icon {
  font-size: 50px;
  margin-bottom: 10px;
  color: #a0a0a0;
}

.message {
  font-size: 18px;
  font-weight: 500;
}
</style>
