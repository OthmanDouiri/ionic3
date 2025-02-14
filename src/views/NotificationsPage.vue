<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Notificatione</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="container">
        <ion-list v-if="notifications.length">
          <ion-item v-for="(notification, index) in notifications" :key="index">
            <ion-label>
              <h2>{{ notification.title }}</h2>
              <p>{{ notification.message }}</p>
            </ion-label>
            <ion-button fill="clear" @click="removeNotification(index)">
              <ion-icon :icon="closeOutline"></ion-icon>
            </ion-button>
          </ion-item>
        </ion-list>

        <ion-card v-else>
          <ion-card-header>
            <ion-card-title color="dark">
              <div class="ion-text-center">
                <h3>There are no notifications yet</h3>
              </div>
            </ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <div class="ion-text-center">
                <p>Come back later to see new notifications!</p>
            </div>
          </ion-card-content>
        </ion-card>

        <ion-button expand="full" @click="clearNotifications" v-if="notifications.length" class="notif-button">
          Mark all as read
        </ion-button>
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
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/vue";
import { ref } from "vue";
import { closeOutline } from "ionicons/icons";

const notifications = ref([
  {title: "Number confirmed", message: "Your Number has been confirmed"},
  {title: "Welcome OTHMAN!", message: "Your account has been created successfully." },
  
]);

const removeNotification = (index: number) => {
  notifications.value.splice(index, 1);
};

const clearNotifications = () => {
  notifications.value = [];
};
</script>

<style scoped>
.container {
  padding: 16px;
}



.notif-button {
  --background: #585454; /* Set custom background color */
  --color: white;        /* Set text color */
}
</style>
