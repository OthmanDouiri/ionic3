<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Security</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      
      <div class="container empty-stat">
        <h2 class="b-semi">Security Tips</h2>
        <ul>
          <li>Use strong, unique passwords for each of your accounts.</li>
          <li>Enable two-factor authentication wherever possible.</li>
          <li>Be cautious of phishing scams; don't click on unknown links.</li>
          <li>Regularly update your software to protect against vulnerabilities.</li>
          <li>Keep your personal information private.</li>
        </ul>
        <h2 class="b-semi">Resources</h2>
        
        <p>For more information, visit:</p>
        <ul>
          <li><a href="https://www.example.com/security-guide">Security Guide</a></li>
          <li><a href="https://www.example.com/report-issue">Report an Issue</a></li>
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
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}

.icon {
  font-size: 48px;
  color: var(--ion-color-danger);
}

h2 {
  margin-top: 20px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}
</style>
