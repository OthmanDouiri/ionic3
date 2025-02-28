<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Article Details</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <div class="container">
      <div class="under-construction">
        <ion-icon :icon="alertCircleOutline" class="icon"></ion-icon>

        <h2>This page is under construction</h2>
        <p>We are working on adding more details. Stay tuned!</p>
      </div>
    </div>
  </ion-content>
</template>

<script setup lang="ts">
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
} from "@ionic/vue";
import { alertCircleOutline } from "ionicons/icons";

</script>

<style scoped>
.icon {
  font-size: 50px;
  color: #a0a0a0;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
}

.under-construction {
  padding: 20px;
}

.under-construction h2 {
  font-size: 2rem;
  color: #ff5919;
}

.under-construction p {
  font-size: 1.2rem;
  color: #666;
}
</style>
