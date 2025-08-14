<template>
  <div
    class="hero-container"
    data-aos="fade-up"
  >
    <div class="hero-content">
      <div class="hero-text-content">
        <p
          class="intro"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          Hi, my name is
        </p>

        <h1
          class="hero-title"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <span ref="typedEl" />
        </h1>

        <p
          class="subtitle"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          A full-stack developer
        </p>

        <p
          class="description"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          I build high-quality web applications with a focus on user experience and performance. Explore my portfolio to see some of my recent projects.
        </p>

        <div
          class="hero-button-container"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <router-link
            to="/about"
            class="link-button large"
          >
            About me
          </router-link>
          <router-link
            to="/projects"
            class="link-button secondary large"
          >
            Projects
          </router-link>
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
