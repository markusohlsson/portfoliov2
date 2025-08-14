<template>
    <div class="project" data-aos="fade-up" :data-aos-delay="index * 100">
      <div class="project-row">
        <span>{{ project.title }}</span>
      </div>
      <div class="project-row">
        <div class="project-image-container"> 
          <img :src="project.image" :alt="project.title + ' screenshot'" class="project-image" data-aos="fade-up-right">
        </div>
        <div class="project-text" data-aos="fade-up-left">
          <span data-aos="fade-left">{{ project.shortDescription }}</span>
          <router-link :to="'/projects/' +project.id" >Read more...</router-link>
        </div>
        <div class="project-buttons">
            <a class="link-button" :href="project.demo" target="_blank" rel="noopener noreferrer" data-aos="fade-right">Live Demo</a>
            <a class="link-button secondary" :href="project.repo" target="_blank" rel="noopener noreferrer" data-aos="fade-left">Repository</a>
        </div>
      </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    project: Object,
    index: String
})
</script>

<style scoped>
/* Each project card */
.project {
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Row layouts */
.project-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.project-row:first-child {
  border-bottom: 1px solid #333;
  padding-bottom: 0.5rem;
  background-color: var(--primary-color);
  border-radius: 12px 12px 0 0;
  color: var(--secondary-color);
  margin: -1.5rem -1.5rem 1rem -1.5rem; /* match .project padding */
  padding: 1rem 1.5rem;
}
.project-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  a {
    text-align: end;
  }
}

/* Title */
.project-row:first-child span:first-child {
  font-size: 1.25rem;
  font-weight: bold;
}

/* Image */
.project-image-container {
  flex-shrink: 0;
  max-width: 300px;
}

.project-image {
    max-width: 100%;
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid var(--primary-color);
}

.project-buttons {
  display: flex;
  width: 50%;
  margin: 0 auto;
  gap: 15px;
}

@media (min-width: 768px) {

  .project-image-container {
    max-width: 300px;
  }
}

</style>