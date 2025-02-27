<template>
  <ion-page>
    <ion-content>
      <!-- Hero Section -->
      <div class="hero-section ion-text-center">
        <h1 class="text-center p-5">Discover who we are and what we do.</h1>
      </div>

      <!-- Mission Section -->
      <div class="section">
        <ion-grid>
          <ion-row class="ion-align-items-center">
            <ion-col size-md="6">
              <ion-img src="/img/mision.jpg" class="rounded-img"></ion-img>
            </ion-col>
            <ion-col size-md="6">
              <h2 class="b-semi">Our Mission</h2>
              <p>
                Our mission is to deliver innovative, high-quality solutions
                that meet the needs of our clients.
              </p>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>

      <!-- Values Section -->
      <div class="section">
        <h2 class="ion-text-center b-semi">Our Values</h2>
        <ion-grid>
          <ion-row>
            <ion-col
              size="12"
              size-md="4"
              class="ion-text-center"
              v-for="value in values"
              :key="value.title"
            >
              <ion-card>
                <ion-card-header>
                  <ion-card-title>{{ value.title }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <p>{{ value.description }}</p>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>

      <!-- Contact Section -->
      <div class="section bg-or ion-text-center">
        <h2 class="b-semi text-white">Contact Us</h2>
        <p class="text-white">
          Have questions or suggestions? We'd love to hear from you.
        </p>
        <ion-button expand="large" color="dark" href="/contact"
          >Get in Touch</ion-button
        >
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from "@ionic/vue";
import { ref } from "vue";

const values = ref([
  {
    title: "Innovación",
    description:
      "Impulsamos los límites de la tecnología para crear soluciones únicas que realzan la experiencia turística.",
  },
  {
    title: "Calidad",
    description:
      "Estamos comprometidos a ofrecer productos y servicios de la más alta calidad para nuestros visitantes.",
  },
  {
    title: "Compromiso",
    description:
      "Nos dedicamos a la satisfacción y éxito de nuestros clientes, asegurando que cada experiencia sea memorable.",
  },
]);
</script>

<style scoped>
.hero-section {
  background-color: #ff4500;
  padding: 50px 0;
  color: rgb(255, 255, 255);
}

.bg-or {
  background-color: #ff4500;
}
.section {
  padding: 40px 0;
}
.bg-light {
  background-color: #1f6bb8;
}
.rounded-img {
  border-radius: 10px;
  width: 100%;
}
.rounded-circle {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
ion-card {
  transition: transform 0.3s ease;
}
ion-card:hover {
  transform: translateY(-10px);
}
</style>
