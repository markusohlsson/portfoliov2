<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSettingsStore } from './stores/settings';

const settings = useSettingsStore()
settings.init()

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const lsSettings = JSON.parse(localStorage.getItem("settings") || "{}")

onMounted(() => {
  if (typeof lsSettings.reducedMotion === "boolean") {
    settings.reducedMotion = lsSettings.reducedMotion
  } else {
    settings.reducedMotion = prefersReducedMotion
  }

  if (!settings.reducedMotion) {
    AOS.init({
      duration: 800,
      offset: 90,
      once: false,
      mirror: true,
    })
  }
})


</script>

<template>
  <Navbar />
  <div class="content">
    <router-view />
  </div>
  <Footer />
</template>
