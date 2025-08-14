<template>
  <div
    class="project"
    data-aos="fade-up"
    :data-aos-delay="index * 100"
  >
    <div class="project-row">
      <span @click="goToProject(project.id)">{{ project.title }}</span>
    </div>
    <div class="project-row">
      <div class="project-image-container"> 
        <img
          :src="project.image"
          :alt="project.title + ' screenshot'"
          class="project-image"
          data-aos="fade-up-right"
        >
      </div>
      <div
        class="project-text"
        data-aos="fade-up-left"
      >
        <span data-aos="fade-left">{{ project.shortDescription }}</span>
        <router-link :to="'/projects/' +project.id">
          Read more...
        </router-link>
      </div>
      <div class="project-buttons">
        <a
          class="link-button small"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-right"
        >Live Demo</a>
        <a
          class="link-button small secondary"
          :href="project.repo"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-left"
        >Repository</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import router from '../router';
defineProps({
    project: {
      type: Object,
      default: () => ({
      id: '',
      title: '',
      shortDescription: '',
      longDescription: '',
      image: '',
      demo: '',
      repo: '',
      frontendTech: [],
      backendTech:[],
      features: [],
      featured: false,
    }),
    },

    index: {
      type: Number,
      default: 0,
    }
})


function goToProject(id) {
    router.push({ path: `/projects/${id}` })
}
</script>
