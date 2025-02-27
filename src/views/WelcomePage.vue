<template>
  <ion-page>
    <ion-content>
      <div class="signup-page">
        <div class="container">
          <img src="/img/welcome.png" alt="Welcome Logo" class="logo" />
          <h1>Welcome aboard!</h1>
          <p class="description">
            Your account is now set up and ready to go. Let the adventure begin.
          </p>
          <!-- Button -->
          <ion-button class="orange-button" expand="block" router-link="/home">
            Finish
          </ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonButton } from "@ionic/vue";
</script>

<style scoped>
/* General layout */
.signup-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff914d, #ff5919);
  text-align: center;
  padding: 20px;
}

/* Container styling */
.container {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 450px;
  width: 100%;
  animation: fadeIn 0.8s ease-in-out;
}

/* Logo styling */
.logo {
  width: 180px;
  height: auto;
  margin-bottom: 15px;
}

/* Heading */
h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

/* Description */
.description {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 20px;
}

/* Button Styling */
.orange-button {
  --background: #ff5919;
  --color: white;
  --border-radius: 25px;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 14px;
  transition: transform 0.3s ease, background 0.3s ease;
  max-width: 300px;
  margin: 0 auto;
}

/* Hover Effect */
.orange-button:hover {
  transform: scale(1.05);
  --background: #e64a19;
}

/* Responsive Design */
@media (max-width: 480px) {
  .container {
    padding: 30px;
  }

  h1 {
    font-size: 2rem;
  }

  .description {
    font-size: 1rem;
  }

  .orange-button {
    font-size: 1rem;
    padding: 12px;
  }
}

/* Fade In Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
