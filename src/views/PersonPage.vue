<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="center-text">Profile</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding center-content">
      <!-- Profile Photo Section -->
      <div class="profile-photo">
        <ion-avatar class="avatar">
          <img :src="profileImage" />
        </ion-avatar>
        <ion-button expand="full" @click="changePhoto">Change Photo</ion-button>
      </div>

      <!-- Profile Form Section -->
      <ion-list class="form-list">
        <!-- Full Name -->
        <ion-item>
          <ion-label position="stacked">Full Name</ion-label>
          <ion-input
            v-model="fullName"
            placeholder="Enter your full name"
          ></ion-input>
        </ion-item>

        <!-- Email -->
        <ion-item>
          <ion-label position="stacked">Email</ion-label>
          <ion-input
            v-model="email"
            type="email"
            placeholder="Enter your email"
          ></ion-input>
        </ion-item>

        <!-- Phone Number -->
        <ion-item>
          <ion-label position="stacked">Phone Number</ion-label>
          <ion-input
            v-model="phoneNumber"
            type="tel"
            placeholder="Enter your phone number"
          ></ion-input>
        </ion-item>

        <!-- Date of Birth -->
        <ion-item>
          <ion-label position="stacked">Date of Birth</ion-label>
          <ion-datetime
            v-model="dob"
            placeholder="Select your date of birth"
          ></ion-datetime>
        </ion-item>
      </ion-list>

      <!-- Save Changes Button -->
      <ion-button class="save-btn" expand="full" @click="saveChanges"
        >Save Changes</ion-button
      >
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonAvatar,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonDatetime,
} from "@ionic/vue";

const profileImage = ref("img/prof.png");
const fullName = ref("");
const email = ref("");
const phoneNumber = ref("");
const dob = ref("");

const changePhoto = () => {
  console.log("Changing profile photo...");
};

const saveChanges = () => {
  console.log("Saving changes...");
  console.log({
    fullName: fullName.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    dob: dob.value,
  });
};
</script>

<style scoped>
.center-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.center-text {
  text-align: center;
}

.profile-photo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.avatar {
  width: 120px;
  height: 120px;
  margin-bottom: 10px;
}

.form-list {
  width: 100%;
  max-width: 400px;
}

ion-button {
  --background: #585454;
  --color: white;
}
</style>
