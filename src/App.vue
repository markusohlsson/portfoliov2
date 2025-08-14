<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Navbar />
  <div class="content">
    <router-view />
  </div>
  <Footer />
</template>
