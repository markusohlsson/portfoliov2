<template>
  <div class="hero-container" data-aos="fade-up">
    <div class="hero-overlay"></div>

    <div class="hero-content">
      <div class="hero-text-content">
        <p class="intro" data-aos="fade-right" data-aos-delay="100">
          Hi, my name is
        </p>

        <h1 class="hero-title" data-aos="fade-right" data-aos-delay="200">
          <span ref="typedEl"></span>
        </h1>

        <p class="subtitle" data-aos="fade-left" data-aos-delay="300">
          A full-stack developer
        </p>

        <p class="description" data-aos="fade-up" data-aos-delay="400">
          I build high-quality web and mobile applications with a focus on
          user experience and performance. Explore my portfolio to see some
          of my recent projects.
        </p>

        <div class="hero-button-container" data-aos="zoom-in" data-aos-delay="500">
          <span class="link-button">
            <router-link to="/About">Read more about me</router-link>
          </span>
          <span class="link-button secondary">
            <router-link to="/Projects">View my projects</router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Typed from 'typed.js'

const typedEl = ref(null)
let typedInstance = null

onMounted(() => {
  typedInstance = new Typed(typedEl.value, {
    strings: ['Markus Ohlsson.'],
    typeSpeed: 100,
    backSpeed: 50,
    showCursor: true,
    cursorChar: '|',
    loop: false,
    startDelay: 900,
  })
})

onBeforeUnmount(() => {
  if (typedInstance) {
    typedInstance.destroy()
  }
})
</script>

<style>
.hero-container {
  position: relative;
  padding: 4rem 2rem;
}

.hero-content {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.intro {
  font-size: 1rem;
}

.hero-title {
  font-size: 2.2rem;
  font-weight: bold;
  margin: 0.5rem 0;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.hero-button-container {
  display: flex;
  gap: 1rem;
}

</style>
