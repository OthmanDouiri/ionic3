<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="content-bg">
      <div class="discover-section mt-4">
        <img src="/public/img/logo.png" alt="Logo" class="logo" />
        <h2 class="center-title">Discover Morocco</h2>
        <ion-searchbar
          class="searchBar"
          placeholder="Search..."
        ></ion-searchbar>
      </div>

      <!-- Places to Go Section -->
      <div class="container">
        <div class="places-section mt-5 mb-5">
          <h1 class="mar-tp-0">Places to go</h1>
          <ion-buttons slot="end">
            <ion-button class="custom-button" router-link="/places-to-go"
              >View All</ion-button
            >
          </ion-buttons>
        </div>
      </div>

      <!-- Swiper Section -->
      <section class="placesToGoCard">
        <swiper
          :modules="[Navigation, Pagination]"
          :slides-per-view="slidesPerView"
          :space-between="20"
          :navigation="true"
          :pagination="{ clickable: true }"
        >
          <swiper-slide v-for="(card, index) in cards" :key="index">
            <ion-card>
              <img id="img-card" :alt="card.alt" :src="card.img" />
              <ion-card-header>
                <ion-card-title>{{ card.title }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                {{ card.content }}
              </ion-card-content>
            </ion-card>
          </swiper-slide>
        </swiper>
      </section>

      <!-- Popular Section -->
      <div class="container mt-5 mb-5">
        <div class="places-section">
          <h1 class="mar-tp-0">Popular</h1>
          <ion-buttons slot="end">
            <ion-button router-link="/popular" class="custom-button"
              >View All</ion-button
            >
          </ion-buttons>
        </div>
      </div>
      <PopularComponent />
      <FooterComponent />
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
  IonButtons,
  IonButton,
} from "@ionic/vue";

import { ref, onMounted, onUnmounted } from "vue";
import {
  IonSearchbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PopularComponent from "@/components/PopularComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

const cards = ref([
  {
    title: "Marrakech",
    img: "https://media.istockphoto.com/id/1294321554/es/foto/mezquita-de-koutoubia-por-la-ma%C3%B1ana-marrakech-marruecos.jpg?s=612x612&w=0&k=20&c=TTPROjywvBe9gaA2aWdPwPBuLTzCWRg9wwyCbOxe0rU=",
    content: "The red city",
    alt: "Image 1",
  },
  {
    title: "Chefchaouen",
    img: "https://media.istockphoto.com/id/1303042679/es/foto/chefchaouen-una-ciudad-con-casas-pintadas-de-azul-y-calles-estrechas-hermosas-y-azules.jpg?s=612x612&w=0&k=20&c=pIxvKEKBz8j7SFb_FMHm44kpD7a4b1pUT3Z_lldEH5w=",
    content: "The blue diamond",
    alt: "Image 2",
  },
  {
    title: "Merzouga",
    img: "https://images.unsplash.com/photo-1526994387180-9557a434b046?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyem91Z2F8ZW58MHx8MHx8fDA%3D",
    content: "Economic Powerhouse",
    alt: "Image 3",
  },
  {
    title: "Beni Mellal",
    img: "https://static.lematin.ma/files/lematin/images/articles/2015/02/LInstitut-francais.jpg",
    content: "Natural Beauty",
    alt: "Image 4",
  },
  {
    title: "Rabat",
    img: "https://media.istockphoto.com/id/530467687/fr/photo/la-tour-hassan-de-rabat-maroc.jpg?s=612x612&w=0&k=20&c=K1yxeYlaZ8Eo-AzX3XHC7I675uWfHZOjaT2FU8Vk7MM=",
    content: "A modern capital",
    alt: "Image 5",
  },
  {
    title: "Card 6",
    img: "https://ionicframework.com/docs/img/demos/card-media.png",
    content: "Description 6",
    alt: "Image 6",
  },
  {
    title: "Card 7",
    img: "https://ionicframework.com/docs/img/demos/card-media.png",
    content: "Description 7",
    alt: "Image 7",
  },
  {
    title: "Card 8",
    img: "https://ionicframework.com/docs/img/demos/card-media.png",
    content: "Description 8",
    alt: "Image 8",
  },
]);

const slidesPerView = ref(3);

const updateSlidesPerView = () => {
  slidesPerView.value = window.innerWidth <= 768 ? 2 : 5;
};

onMounted(() => {
  updateSlidesPerView();
  window.addEventListener("resize", updateSlidesPerView);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateSlidesPerView);
});
</script>

<style scoped>
.example-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* Global Styles */
.content-bg {
  --background: #fbf5d5;
}

/* Header */
.orange {
  --background: rgba(240, 90, 34, 1);
}

.center-nav1 {
  text-align: center;
  color: white;
}

/* Discover Section */
.discover-section {
  text-align: center;
}

.logo {
  display: block;
  margin: auto;
  width: 200px;
}

.center-title {
  color: white;
  text-align: center;
  font-size: 2rem;
  padding: 10px;
  text-shadow: 2px 2px 5px black, -1px -1px 5px black, 1px -1px 5px black,
    -1px 1px 5px black, 1px 1px 5px black;
}

.searchBar {
  width: 50%;
  margin: 10px auto;
}

/* Places Section */
.places-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}

/* Swiper */
.placesToGoCard {
  width: 100%;
  padding: 80px 0px;
  background-image: url("public/img/bg-placetogo.png");
}

swiper {
  width: 100%;
}

#img-card {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 0 0; /* Optional: Adds rounded corners to the images */
}

ion-card {
  width: 100%;
  border-radius: 15px; /* Optional: Adds rounded corners to the card */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: Adds shadow to the cards */
  margin: 50px;
  height: auto;
}

ion-card-title,
ion-card-content {
  text-align: center;
}

/* Mobile View Adjustments */
@media (max-width: 768px) {
  ion-card-title {
    font-size: 1rem; /* Smaller size for mobile */
  }
}

.mar-tp-0 {
  margin-top: 0px !important;
  color: rgb(0, 0, 0);
  font-size: 2rem;
}

.custom-button {
  --background: #ff5733; /* Cambia el color de fondo */
  --color: white; /* Cambia el color del texto */
  --border-radius: 8px; /* Establece un borde redondeado */
  padding: 10px;
}
</style>
