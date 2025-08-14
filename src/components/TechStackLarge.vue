<template>
  <li
    class="projectdetails-tech-item"
    :data-aos="aos"
  >
    <div class="projectdetails-tech-card">
      <div
        class="projectdetails-tech-header"
        :data-aos="aos"
      >
        <img
          class="projectdetails-tech-icon"
          :src="tech.icon"
          :alt="tech.name"
        >
        <span class="projectdetails-tech-name">{{ tech.name }}</span>
      </div>
      <p
        class="projectdetails-tech-description"
        :data-aos="aos"
      >
        {{ tech.description }}
      </p>
    </div>
  </li>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    tech: {
      type: Object,
      default: () => ({
        name: '',
        description: '',
        icon: ''
      })
    },
    aos: {
      type: String,
      default: '',
    }
})
</script>