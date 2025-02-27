<template>
  <section class="popular-components mt-5">
    <div class="container">
      <div
        v-for="(item, index) in popularItems"
        :key="index"
        class="popular-card mb-3 mt-3"
      >
        <div class="popular-card-content">
          <img :src="item.img" :alt="item.alt" class="popular-card-img" />
          <div class="popular-card-body">
            <h3 class="popular-card-title">{{ item.title }}</h3>
            <p class="popular-card-description">{{ item.description }}</p>
            <ion-button class="detail-button" @click="goToDetail(item.title)"
              >Detail</ion-button
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IonButton } from "@ionic/vue";
import router from "@/router";

// Lista de artículos populares
const popularItems = ref([
  {
    title: "Morocco's 2030 World Cup Preparations Committee Meets in Fes",
    img: "https://barlamantoday.com/wp-content/smush-webp/2024/03/Copie-de-Copie-de-Copie-de-WEB-SITE-PIC200-1024x568.png.webp",
    description:
      "Morocco joins hands with Spain and Portugal for a historic World Cup.",
    alt: "World Cup 2030 banner",
  },
  {
    title: "Moroccan Tourism Records Unprecedented 39% Growth in October 2023",
    img: "https://www.moroccoworldnews.com/wp-content/uploads/2023/11/moroccan-tourism-records-unprecedented-39-growth-in-october-2023-800x532.jpeg",
    description:
      "Morocco’s tourism success in September, initially considered a record-breaking month with 960,000 tourists, has pointed for some to a sustained growth trajectory.",
    alt: "Morocco’s tourism",
  },
  {
    title: "Golf in Morocco: More than One Hundred Years of History…",
    img: "https://www.visitmorocco.com/golf/wp-content/uploads/2023/01/VM-story-golf-morocco1.png",
    description: "Discover the rich history of golf in Morocco.",
    alt: "Golf in Morocco",
  },
]);

// Función para redirigir a la página de detalles
const goToDetail = (title: string) => {
  router.push({ name: "DetailsPage", params: { title } });
};
</script>

<style scoped>
/* Estilos generales */
.popular-components {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 20px;
  background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
}

/* Tarjetas */
.popular-card {
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 25px;
}

.popular-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

/* Contenido de la tarjeta */
.popular-card-content {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
}

/* Imagen */
.popular-card-img {
  width: 35%;
  height: auto;
  object-fit: cover;
}

/* Cuerpo del contenido */
.popular-card-body {
  flex: 1;
  text-align: left;
  padding: 10px;
}

/* Título */
.popular-card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

/* Descripción */
.popular-card-description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 15px;
}

/* Botón */
.detail-button {
  --background: #ff5919;
  --color: white;
  --border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 20px;
  transition: transform 0.3s ease, background 0.3s ease;
}

.detail-button:hover {
  transform: scale(1.05);
  --background: #e64a19;
}

/* Diseño Responsivo */
@media (max-width: 1024px) {
  .popular-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .popular-card-img {
    width: 100%;
  }

  .popular-card-body {
    text-align: center;
  }

  .detail-button {
    display: block;
    margin: 0 auto;
  }
}
</style>
