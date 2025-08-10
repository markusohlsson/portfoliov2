<template>
  <div class="techstack-wrapper">
    <h3 class="techstack-title">Tech Stack</h3>
    <div class="techstack-container">
      <div
        v-for="(techstack, index) in techstacks"
        :key="index"
        class="techstack"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
      >
        <img
          class="techstack-icon"
          :src="techstack.image"
          :alt="techstack.name"
        />
        <span class="techstack-name">
          {{ techstack.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>

import vueLogo from '../assets/icons/vue.svg'
import laravelLogo from '../assets/icons/laravel.svg'
import mysqlLogo from '../assets/icons/mysql.svg'
import jsLogo from '../assets/icons/javascript.svg'
import cssLogo from '../assets/icons/css3.svg'
import scssLogo from '../assets/icons/scss.svg'
import phpLogo from '../assets/icons/php.svg'

const techstacks = [
  { name: 'Vue', image: vueLogo },
  { name: 'Laravel', image: laravelLogo },
  { name: 'MySQL', image: mysqlLogo },
  { name: 'JavaScript', image: jsLogo },
  { name: 'CSS', image: cssLogo },
  { name: 'SCSS', image: scssLogo },
  { name: 'PHP', image: phpLogo }
]

</script>

