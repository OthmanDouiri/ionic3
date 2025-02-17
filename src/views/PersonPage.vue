<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Search</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- Profile Photo Section -->
      <div class="profile-photo">
        <ion-avatar>
          <img :src="profileImage" />
        </ion-avatar>
        <ion-button expand="full" @click="changePhoto">Change Photo</ion-button>
      </div>

      <!-- Profile Form Section -->
      <ion-list>
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
import { ref } from "vue";

// Data binding
const profileImage = ref("img/prof.png"); // Placeholder image
const fullName = ref("");
const email = ref("");
const phoneNumber = ref("");
const dob = ref("");

// Method to handle profile photo change
const changePhoto = () => {
  console.log("Changing profile photo...");
  // Logic to upload a new photo
};

// Method to save changes
const saveChanges = () => {
  console.log("Saving changes...");
  console.log({
    fullName: fullName.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    dob: dob.value,
  });
  // Logic to save changes
};
</script>

<style scoped>
.profile-photo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

ion-avatar {
  width: 120px;
  height: 120px;
  margin-bottom: 10px;
}

ion-button {
  --background: #585454; /* Set custom background color */
  --color: white; /* Set text color */
}
</style>
