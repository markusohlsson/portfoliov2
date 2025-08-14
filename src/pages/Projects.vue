<template>
  <div class="project-wrapper">
    <template v-for="(project, index) in projects" :key="project.id">
      <LargeProjectCard :project="project" :index="index" />
    </template>
  </div>
</template>

<script setup>
import { projects } from '../data/projects';
import LargeProjectCard from '../components/LargeProjectCard.vue';
</script>

<style scoped>
/* Wrapper */
.project-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Responsive layout */
@media (max-width: 768px) {
  .project-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .project-image-container {
    max-width: 100%;
  }
}
</style>
