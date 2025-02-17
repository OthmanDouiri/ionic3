<template>
  <section class="popular-components mt-4">
    <div class="container">
      <div
        v-for="(item, index) in popularItems"
        :key="index"
        class="popular-card mt-4"
      >
        <div class="popular-card-content">
          <img :src="item.img" :alt="item.alt" class="popular-card-img" />
          <div class="popular-card-body">
            <h3 class="popular-card-title">{{ item.title }}</h3>
            <p class="popular-card-description">{{ item.description }}</p>
            <ion-button color="warning" class="">Detail</ion-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IonButton } from "@ionic/vue";

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
    title: "Golf in morocco: More than one hundred years of history…",
    img: "https://www.visitmorocco.com/golf/wp-content/uploads/2023/01/VM-story-golf-morocco1.png",
    description: "Golf in morocco: More than one hundred",
    alt: "Golf in morocco: More than one hundred",
  },
]);
</script>

<style scoped>
.popular-components {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #706666;
}

.popular-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.popular-card-content {
  display: flex;
  align-items: center;
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
  gap: 15px;
}

.popular-card-img {
  width: 40%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px 0px 0px;
  flex-shrink: 0;
}

.popular-card-body {
  flex: 1;
  padding: 10px 0;
}

.popular-card-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.popular-card-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
}

.popular-card-button {
  background-color: #ff5722;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.popular-card-button:hover {
  background-color: #e64a19;
}

.card-separator {
  border: none;
  border-top: 1px solid #ddd;
  margin: 20px 0;
}

template {
  font-family: "Poppins", sans-serif;
  padding: 0;
  box-sizing: border-box;
  background-color: #555;
}

/* Media Queries */
@media (max-width: 1024px) {
  .popular-card-img {
    width: inherit; /* Smaller image on medium screens */
  }

  .popular-card-body {
    padding: 10px;
    text-align: center;
  }

  .popular-card-button {
    display: block;
    margin: 0 auto; /* Center the button */
  }
}

@media (max-width: 768px) {
  .popular-card-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .popular-card-img {
    width: 100%;
    height: auto; /* Allow image to scale on small screens */
  }

  .popular-card-body {
    width: 100%;
  }

  .popular-card-title {
    font-size: 1.2rem; /* Adjust font size for smaller screens */
  }

  .popular-card-description {
    font-size: 0.95rem; /* Slightly smaller font for readability */
  }

  .popular-card-button {
    font-size: 0.9rem; /* Smaller buttons for better fit */
    padding: 8px 12px;
    display: block;
    margin: 0 auto; /* Center the button */
  }
}
</style>
