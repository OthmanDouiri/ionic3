<template>
  <ion-page>
    <ion-content>
      <div class="login-page">
        <img src="/img/logo.png" alt="Logo" class="logo" />
        <h1>Log in</h1>

        <!-- Email Input -->
        <p class="text-start">Email</p>
        <ion-item>
          <ion-input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
          ></ion-input>
        </ion-item>

        <!-- Password Input -->
        <p class="text-start">Password</p>
        <ion-item>
          <ion-input
            v-model="password"
            type="password"
            placeholder="Enter your password"
            required
          ></ion-input>
        </ion-item>

        <!-- Button -->
        <ion-button
          class="orange-button"
          expand="block"
          :router-link="true"
          router-direction="forward"
          to="/login"
        >
          Sign Up
          <ion-icon slot="end" :icon="arrowForwardOutline"></ion-icon>
        </ion-button>

        <!-- Social Login -->
        <div class="social-login">
          <div class="social-buttons">
            <h3>Log in with</h3>
            <ion-button
              class="google-button"
              expand="block"
              href="/auth/google"
            >
              <ion-icon slot="icon-only" :icon="logoGoogle"></ion-icon>
            </ion-button>
            <ion-button class="facebook-button" expand="block">
              <ion-icon slot="icon-only" :icon="logoFacebook"></ion-icon>
            </ion-button>
          </div>
        </div>

        <!-- Sign Up Link -->
        <div class="signup-link">
          <p>Don't have an account? <a href="/signup/1">Sign Up</a></p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonPage,
  IonContent,
  IonButton,
  IonItem,
  IonInput,
  IonIcon,
} from "@ionic/vue";
import { logoGoogle, logoFacebook, arrowForwardOutline } from "ionicons/icons";

const email = ref("");
const password = ref("");
</script>

<style scoped>
body {
  background-color: #fbfbd3;
}

.google-button {
  --background: #ff0000;
  --color: white;
}

.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fbfbd3;
}

.logo {
  width: 250px;
  height: auto;
  margin-bottom: 20px;
}

ion-item {
  margin-bottom: 16px;
  width: 100%;
  max-width: 400px;
  border-radius: 25px;
}

.orange-button {
  --background: #ff5919;
  --color: white;
  --border-radius: 25px;
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
}

h1 {
  margin-bottom: 20px;
}

.text-start {
  text-align: start;
  width: 100%;
  max-width: 400px;
  margin-left: 2rem;
}

/* Social Login */
.social-login {
  text-align: center;
  margin-top: 1rem;
}

.social-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
}

.signup-link {
  margin-top: 20px;
}
</style>
