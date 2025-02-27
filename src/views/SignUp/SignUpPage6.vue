<template>
  <ion-page>
    <ion-content>
      <div
        class="container d-flex justify-content-center align-items-center vh-100 mt-5"
      >
        <div class="signup-page text-center">
          <img src="/img/logo.png" alt="Logo" class="logo" />
          <h2 class="b-semi">Enter Confirmation Code</h2>

          <p>Enter the 6-digit code we sent to</p>
          <p class="email-highlight">{{ maskedEmail }}</p>

          <!-- Input Código de Confirmación -->
          <ion-col>
            <!-- ------- -->
            <div class="input-container">
              <ion-item
                class="custom-item"
                :class="{ 'error-border': isInvalid }"
              >
                <ion-input
                  ref="codeInput"
                  type="tel"
                  maxlength="6"
                  fill="outline"
                  placeholder="Enter code"
                  v-model="code"
                  @input="validateCode"
                ></ion-input>
              </ion-item>
            </div>
            <!-- ----------- -->

            <p v-if="isInvalid" class="error-message">
              Invalid code. Must be 6 digits.
            </p>
          </ion-col>

          <!-- Botón de Continuar -->
          <ion-button
            class="orange-button w-100"
            expand="block"
            :disabled="isInvalid || code.length !== 6"
            @click="submitCode"
          >
            Finish
            <ion-icon slot="end" :icon="arrowForwardOutline"></ion-icon>
          </ion-button>

          <!-- Social Login -->
          <div class="social-login mt-3 d-flex justify-content-center">
            <h3 class="me-3">Log in with</h3>
            <div class="social-buttons d-flex justify-content-center gap-2">
              <ion-button class="google-button" expand="block">
                <ion-icon slot="icon-only" :icon="logoGoogle"></ion-icon>
              </ion-button>
              <ion-button class="facebook-button" expand="block">
                <ion-icon slot="icon-only" :icon="logoFacebook"></ion-icon>
              </ion-button>
            </div>
          </div>

          <!-- Enlace para iniciar sesión -->
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
import { ref, computed } from "vue";
import {
  IonPage,
  IonContent,
  IonButton,
  IonItem,
  IonInput,
  IonCol,
  IonIcon,
} from "@ionic/vue";
import { logoGoogle, logoFacebook, arrowForwardOutline } from "ionicons/icons";
import router from "@/router";

// Variables de estado
const code = ref("");
const isInvalid = ref(false);
const maskedEmail = computed(() =>
  "Othman@example.com".replace(/(.{2})(.*)(@.*)/, "$1****$3")
);

// Validación del código
const validateCode = () => {
  isInvalid.value = !/^\d{6}$/.test(code.value);
};

// Acción al enviar código
const submitCode = () => {
  if (!isInvalid.value && code.value.length === 6) {
    console.log("Code submitted:", code.value);
    router.push("/welcome");
  }
};
</script>

<style scoped>
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

.email-highlight {
  font-weight: bold;
  color: #ff5919;
}

.error-message {
  color: #ff0000;
  font-size: 14px;
  margin-top: 5px;
}

/* Botón de continuar */
.orange-button {
  --background: #ff5919;
  --color: white;
  --border-radius: 12px;
  --padding-top: 16px;
  --padding-bottom: 16px;
  font-weight: bold;
  transition: background 0.3s ease;
}

.orange-button:disabled {
  --background: #cccccc;
  cursor: not-allowed;
}

/* Social Login */
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

/* Enlace de login */
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
