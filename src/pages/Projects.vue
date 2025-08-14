<template>
  <div class="project-wrapper">
    <template
      v-for="(project, index) in projects"
      :key="project.id"
    >
      <LargeProjectCard
        :project="project"
        :index="index"
      />
    </template>
  </div>
</template>

<script setup>
import { projects } from '../data/projects';
import LargeProjectCard from '../components/LargeProjectCard.vue';
</script>
