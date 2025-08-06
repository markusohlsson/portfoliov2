<template>
  <div>
    <h3>Tech Stack</h3>
    <div class="techstack-container">
      <div
        v-for="(techstack, index) in techstacks"
        :key="index"
        class="techstack"
        @mouseenter="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
      >
        <img
          class="techstack-icon"
          :class="{ hovered: hoveredIndex === index }"
          :src="techstack.image"
          :alt="techstack.name"
        />
        <span class="techstack-name" :class="{ visible: hoveredIndex === index }">
          {{ techstack.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import vueLogo from '../assets/vue.svg'
import laravelLogo from '../assets/laravel.svg'
import mysqlLogo from '../assets/mysql.svg'
import jsLogo from '../assets/javascript.svg'
import cssLogo from '../assets/css3.svg'
import scssLogo from '../assets/scss.svg'
import phpLogo from '../assets/php.svg'

const hoveredIndex = ref(null)

const techstacks = [
  { name: 'Vue', image: vueLogo },
  { name: 'Laravel', image: laravelLogo },
  { name: 'MySQL', image: mysqlLogo },
  { name: 'JavaScript', image: jsLogo },
  { name: 'CSS', image: cssLogo },
  { name: 'SCSS', image: scssLogo },
  { name: 'PHP', image: phpLogo }
]

onMounted(() => {
  hoveredIndex.value = 0;
  setInterval(() => {
    hoveredIndex.value = (hoveredIndex.value + 1) % techstacks.length;
  }, 1500)
})
</script>

<style scoped>
.techstack-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
}

.techstack {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  position: relative;
  transition: transform 0.3s ease;
}

.techstack-icon {
  max-height: 50px;
  transition: transform 0.3s ease;
}
.techstack-icon.hovered {
  transform: scale(1.2);
}

.techstack-name {
  font-size: 12px;
  margin-top: 5px;
  opacity: 0;
  transform: translateY(5px);
  transition: all 0.3s ease;
}
.techstack-name.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
