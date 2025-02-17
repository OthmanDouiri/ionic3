<template>
  <ion-page>
    <ion-content>
      <PopularComponent />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import PopularComponent from "@/components/PopularComponent.vue";
import { IonContent, IonPage } from "@ionic/vue";
</script>

<style scoped>
.example-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
