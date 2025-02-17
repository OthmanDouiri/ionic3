<template>
  <ion-page class="page">
    <ion-content>
      <div class="start-page">
        <img src="/img/logo.png" alt="Logo" class="logo" />
        <h1 class="title">Discover Morocco during the 2030 World Cup</h1>
        <ion-button class="orange-button" expand="block" routerLink="/home">
          Explore Morocco
          <ion-icon slot="end" :icon="arrowForwardOutline"></ion-icon>
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonButton, IonIcon } from "@ionic/vue";
import { arrowForwardOutline } from "ionicons/icons";
</script>

<style scoped>
.start-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  background-color: #fbfbd3;
}

.logo {
  width: 250px;
  height: auto;
}

.title {
  font-size: 2rem;
  margin: 20px 0;
}

.orange-button {
  --background: #ff5919;
  --color: white;
  --border-radius: 10px;
  font-size: 1.5rem;
  margin: 60px;
}
</style>
