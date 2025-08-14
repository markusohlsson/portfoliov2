<template>
  <div class="techstack-wrapper">
    <h2 class="techstack-title">
      Core Skills
    </h2>
    <div class="techstack-container">
      <div
        v-for="(techstack, index) in comfortableTech"
        :key="index"
        class="techstack"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
      >
        <img
          class="techstack-icon"
          :src="techstack.icon"
          :alt="techstack.name"
        >
        <span class="techstack-name">
          {{ techstack.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { comfortableTech } from '../data/techs';
</script>

