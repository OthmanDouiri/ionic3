<template>
  <ion-page>
    <ion-content>
      <div class="container mt-5 login-page">
        <img src="/img/logo.png" alt="Logo" class="logo" />
        <h1 class="b-semi">Login</h1>

        <!-- Email Input -->
        <div class="input-container">
          <label class="text-start">Email</label>
          <ion-item class="custom-item">
            <ion-input
              class="custom-input"
              v-model="email"
              type="email"
              placeholder="Enter your email"
              required
            ></ion-input>
          </ion-item>
        </div>

        <!-- Password Input -->
        <div class="input-container">
          <label class="text-start">Password</label>
          <ion-item class="custom-item">
            <ion-input
              class="custom-input"
              v-model="password"
              type="password"
              placeholder="Enter your password"
              required
            ></ion-input>
          </ion-item>
        </div>

        <!-- Login Button -->
        <ion-button
          class="orange-button"
          expand="block"
          :router-link="true"
          router-direction="forward"
          to="/login"
        >
          Log In
          <ion-icon slot="end" :icon="arrowForwardOutline"></ion-icon>
        </ion-button>

        <!-- Social Login -->
        <div class="social-login">
          <div class="social-buttons">
            <h3>Login with</h3>
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
          <p>Don't have an account? <router-link to="/signup">Sign Up</router-link></p>        </div>
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
  background-color: #ffffff;
}

.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 30px;
}

.logo {
  width: 250px;
  height: auto;
  margin-bottom: 20px;
}

/* Input Container */
.input-container {
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
}

.custom-item {
  --background: #f0f0f0; /* Light background for input fields */
  --border-radius: 12px; /* Rounded corners */
  --padding-start: 16px;
  --padding-end: 16px;
  --inner-padding-end: 0;
  margin-top: 8px;
}

.custom-input {
  --color: #333333; /* Dark text for better readability */
  --placeholder-color: #999999; /* Placeholder text color */
  --placeholder-opacity: 1;
}

/* Login Button */
.orange-button {
  --background: #ff5919; /* Vibrant Orange */
  --color: white;
  --border-radius: 12px; /* Rounded corners */
  --padding-top: 16px;
  --padding-bottom: 16px;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
  font-weight: bold;
  transition: background 0.3s ease; /* Smooth hover effect */
}


/* Social Login Section */
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

.google-button {
  --background: #db4437; /* Google Red */
  --color: white;
  --border-radius: 12px; /* Rounded corners */
  width: 48px;
  height: 48px;
}

.facebook-button {
  --background: #1877f2; /* Facebook Blue */
  --color: white;
  --border-radius: 12px; /* Rounded corners */
  width: 48px;
  height: 48px;
}

/* Sign Up Link */
.signup-link {
  margin-top: 20px;
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
