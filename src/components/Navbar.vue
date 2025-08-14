<template>
  <div class="navigation">
    <div class="navigation-logo"><router-link to="/">Ohlsson.dev</router-link></div>

    <!-- Right Side -->
    <div class="navigation-right">
      <div @click="isOpen = !isOpen" :class="['navigation-toggle', isOpen ? 'open' : '']">
        <template v-if="isOpen"><X class="navigation-icon" /></template>
        <template v-else><Menu class="navigation-icon" /></template>
      </div>

      <!-- Navigation List -->
        <Transition name="list-grow">
        <ul class="navigation-list" :class="{ open: isOpen, closed: !isOpen }">
            <li><router-link to="/" class="navigation-list-item"><House />Home</router-link></li>
            <li><router-link to="/projects" class="navigation-list-item"><FolderKanban />Projects</router-link></li>
            <li><router-link to="/about" class="navigation-list-item"><User />About</router-link></li>
            <li><router-link to="/contact" class="navigation-list-item"><Mail />Contact</router-link></li>
        </ul>
        </Transition>
    </div>
  </div>
</template>


<script setup>
    import { House, FolderKanban, User, Mail, Menu, X } from 'lucide-vue-next';
    import { ref } from 'vue'

    const isOpen = ref(false)
</script>
