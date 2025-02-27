<template>
  <ion-page>
    <ion-content>
      <div
        class="container d-flex justify-content-center align-items-center vh-100"
      >
        <div class="signup-page text-center">
          <img src="/img/logo.png" alt="Logo" class="logo" />
          <h1 class="b-semi">Create Account</h1>

          <!-- Name Input -->
          <div class="input-container mt-5">
            <label class="text-start w-100">Gender</label>
            <ion-item class="custom-item">
              <ion-select
                v-model="gender"
                placeholder="Select your gender"
                required
              >
                <ion-select-option value="male">Male</ion-select-option>
                <ion-select-option value="female">Female</ion-select-option>
              </ion-select>
            </ion-item>
          </div>

          <!-- Continue Button -->
          <ion-button
            class="orange-button w-100"
            expand="block"
            router-link="/signup/5"
          >
            Continue
            <ion-icon slot="end" :icon="arrowForwardOutline"></ion-icon>
          </ion-button>

          <!-- Social Login -->
          <div class="social-login mt-3 d-flex justify-content-center">
            <h3 class="me-3">Log in with</h3>
            <div class="social-buttons d-flex justify-content-center gap-2">
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

          <!-- Login Link -->
          <div class="signup-link mt-3">
            <p>
              Have an account? <router-link to="/login">Log in</router-link>
            </p>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from "vue";
import {
  IonPage,
  IonContent,
  IonButton,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonIcon,
} from "@ionic/vue";
import { logoGoogle, logoFacebook, arrowForwardOutline } from "ionicons/icons";

const gender = ref("");
</script>

<style scoped>
body {
  background-color: #ffffff;
}

.signup-page {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  max-width: 400px;
  width: 100%;
}

.logo {
  width: 250px;
  height: auto;
  margin-bottom: 20px;
}

/* Input Container */
.input-container {
  width: 100%;
  margin-bottom: 20px;
}

.custom-item {
  --background: #f0f0f0;
  --border-radius: 12px;
  --padding-start: 16px;
  --padding-end: 16px;
  --inner-padding-end: 0;
  margin-top: 8px;
}

.custom-input {
  --color: #333333;
  --placeholder-color: #999999;
  --placeholder-opacity: 1;
}

/* Continue Button */
.orange-button {
  --background: #ff5919;
  --color: white;
  --border-radius: 12px;
  --padding-top: 16px;
  --padding-bottom: 16px;
  font-weight: bold;
  transition: background 0.3s ease;
}

/* Social Login Section */
.social-login {
  text-align: center;
}

.google-button,
.facebook-button {
  --border-radius: 12px;
  width: 48px;
  height: 48px;
}

.google-button {
  --background: #db4437;
  --color: white;
}

.facebook-button {
  --background: #1877f2;
  --color: white;
}

/* Sign Up Link */
.signup-link {
  color: #555555;
}

.signup-link a {
  color: #ff5919;
  text-decoration: none;
  font-weight: bold;
}

.signup-link a:hover {
  text-decoration: underline;
}
</style>
