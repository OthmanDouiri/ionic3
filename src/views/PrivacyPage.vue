<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Privacy Policy</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="container b-light">
        <h1 class="b-semi">Privacy Policy</h1>

        <p class="mt-5">
        Your privacy is important to us. This privacy policy explains how we collect, use, and share information about you when you use our services.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We may collect the following types of information:
      </p>
      <ul>
        <li>Personal Information: Name, email address, and contact details.</li>
        <li>Usage Data: Information about how you use our services, including your interactions with our website and application.</li>
      </ul>
      
      <h2>How We Use Your Information</h2>
      <p>
        We use the information we collect for various purposes, including:
      </p>
      <ul>
        <li>To provide and maintain our services.</li>
        <li>To notify you about changes to our services.</li>
        <li>To allow you to participate in interactive features when you choose to do so.</li>
        <li>To provide customer support.</li>
        <li>To gather analysis or valuable information so that we can improve our services.</li>
      </ul>
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
} from "@ionic/vue";

</script>

<style scoped>
h1 {
  font-size: 1.5em;
  margin-bottom: 16px;
}
h2 {
  font-size: 1.2em;
  margin-top: 16px;
}
p {
  margin: 8px 0;
}
ul {
  margin: 8px 0 16px 20px;
}
</style>
