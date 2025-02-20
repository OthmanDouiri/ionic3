<template>
    <ion-page>
      <ion-content>
        <div class="signup-page">
          <img src="/assets/img/logo.png" alt="Logo" class="logo">
          <h1>Enter Confirmation Code</h1>
  
          <!-- name Input -->
          <p>Enter the 6-digit code we sent to </p>
          <p>Othman@example.com</p>
          <ion-item>
            <ion-input label="6-digit" label-placement="floating" fill="outline" placeholder="Enter text"></ion-input>
           

          </ion-item>
        



    
          <!-- Button -->
          <ion-button class="orange-button" expand="block" router-link="/Welcome">
            Finish
          </ion-button>
  
           <!-- Social Login -->
        <div class="social-login">
          <div class="social-buttons">
            <h3>Log in with</h3>
            <ion-button class="google-button" expand="block" href="/auth/google">
              <ion-icon slot="icon-only" :icon="logoGoogle"></ion-icon>
            </ion-button>
            <ion-button class="facebook-button" expand="block">
              <ion-icon slot="icon-only" :icon="logoFacebook"></ion-icon>
            </ion-button>
          </div>
        </div>
  
          <div class="signup-link">
            <p>Have an account?  <a href="/login"> Log in</a></p>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { IonPage, IonContent, IonButton, IonIcon, IonItem, IonInput } from '@ionic/vue';
  import { logoGoogle, logoFacebook } from 'ionicons/icons';


  </script>
  
  <style scoped>

.social-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
}

.signup-link {
  margin-top: 20px;
}


.google-button{
  --background: #ff0000;
  --color: white;
}
  body {
    background-color: #fbfbd3;
  }
  
  .signup-page {
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
  
 
  ion-label {
    font-size: 14px;
  }
  .text-start {
    text-align: start;
    width: 100%;
    max-width: 400px;
    margin-left: 2rem;
  }
  </style>
  