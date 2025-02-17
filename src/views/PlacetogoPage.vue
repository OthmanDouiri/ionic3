<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Places to Go</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="content-bg">
      <div class="places-container">
        <ion-card
          v-for="(place, index) in places"
          :key="index"
          class="place-card"
        >
          <img :src="place.img" :alt="place.title" class="place-img" />
          <ion-card-header>
            <ion-card-title>{{ place.title }}</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            {{ place.description }}
          </ion-card-content>
        </ion-card>
      </div>

      <FooterComponent />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import FooterComponent from "@/components/FooterComponent.vue";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/vue";
import { ref } from "vue";

const places = ref([
  {
    title: "Marrakech",
    img: "https://media.istockphoto.com/id/1294321554/es/foto/mezquita-de-koutoubia-por-la-ma%C3%B1ana-marrakech-marruecos.jpg?s=612x612&w=0&k=20&c=TTPROjywvBe9gaA2aWdPwPBuLTzCWRg9wwyCbOxe0rU=",
    description: "The red city, rich in culture and history.",
  },
  {
    title: "Chefchaouen",
    img: "https://media.istockphoto.com/id/1303042679/es/foto/chefchaouen-una-ciudad-con-casas-pintadas-de-azul-y-calles-estrechas-hermosas-y-azules.jpg?s=612x612&w=0&k=20&c=pIxvKEKBz8j7SFb_FMHm44kpD7a4b1pUT3Z_lldEH5w=",
    description: "The blue diamond of Morocco, a true paradise.",
  },
  {
    title: "Merzouga",
    img: "https://images.unsplash.com/photo-1526994387180-9557a434b046?fm=jpg&q=60&w=3000",
    description: "Golden dunes and breathtaking desert landscapes.",
  },
  {
    title: "Beni Mellal",
    img: "https://static.lematin.ma/files/lematin/images/articles/2015/02/LInstitut-francais.jpg",
    description: "A peaceful city surrounded by nature.",
  },
  {
    title: "Rabat",
    img: "https://media.istockphoto.com/id/530467687/fr/photo/la-tour-hassan-de-rabat-maroc.jpg?s=612x612&w=0&k=20&c=K1yxeYlaZ8Eo-AzX3XHC7I675uWfHZOjaT2FU8Vk7MM=",
    description: "The modern capital of Morocco with a rich heritage.",
  },
  {
    title: "Fes",
    img: "https://plus.unsplash.com/premium_photo-1697729887553-b0392581a691?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmV6fGVufDB8fDB8fHww",
    description: "The cultural heart of Morocco, famous for its Medina.",
  },
  {
    title: "Tangier",
    img: "https://img.freepik.com/free-photo/aerial-drone-view-tangier-morocco-strait-gibraltar-coastline-rocky-hills-with-residential_1268-23520.jpg",
    description: "A unique mix of African and European influences.",
  },
  {
    title: "Agadir",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/aa/27/6c/agadir-ville-situee-sur.jpg?w=1200&h=-1&s=1",
    description: "A coastal gem with beautiful beaches and resorts.",
  },
  {
    title: "Essaouira",
    img: "https://images.unsplash.com/photo-1613057157282-cc3cbe630b26?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXNzYW91aXJhfGVufDB8fDB8fHww",
    description: "The windy city, perfect for surfers and art lovers.",
  },
  {
    title: "Casablanca",
    img: "https://media.istockphoto.com/id/544676786/fr/photo/mosqu%C3%A9e-de-casablanca.jpg?s=612x612&w=0&k=20&c=Ghdq0SbzJ_uyVvi9NDrwgK6O6aeZMhoamW2S3aWNUkA=",
    description: "The economic capital with stunning architecture.",
  },
  {
    title: "Ifrane",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Neige_ifrane.jpg",
    description: "A little Switzerland in the heart of Morocco.",
  },
  {
    title: "Ouarzazate",
    img: "https://media.istockphoto.com/id/474422378/fr/photo/coucher-de-soleil-sur-la-rivi%C3%A8re-bleue.jpg?s=612x612&w=0&k=20&c=Q-bHC1266pYor1raAZLEGBhhCUFouBgUWfxVCKnbkr4=",
    description: "The gateway to the Sahara and Hollywood of Africa.",
  },
]);
</script>

<style scoped>
/* Fondo general */
.content-bg {
  --background: #f8f8f8;
  padding: 20px;
}

/* Contenedor de tarjetas en grid */
.places-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Fija 4 columnas */
  gap: 20px;
  padding: 20px;
}

/* Responsividad para pantallas más pequeñas */
@media (max-width: 1200px) {
  .places-container {
    grid-template-columns: repeat(
      3,
      1fr
    ); /* 3 columnas en pantallas medianas */
  }
}

@media (max-width: 900px) {
  .places-container {
    grid-template-columns: repeat(1, 1fr); /* 1 columna en móviles */
  }
}

@media (max-width: 600px) {
  .places-container {
    grid-template-columns: repeat(1, 1fr); /* 1 columna en móviles */
  }
}

/* Tarjetas */
.place-card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.place-card:hover {
  transform: scale(1.05);
}

/* Imágenes */
.place-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/* Títulos y contenido */
ion-card-title,
ion-card-content {
  text-align: center;
  font-size: 0.8rem;
}

/* Responsividad */
@media (max-width: 768px) {
  .places-container {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>
