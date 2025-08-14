<template>
  <div class="navigation">
    <div class="navigation-logo">
      <router-link to="/">
        Ohlsson.dev
      </router-link>
    </div>

    <div class="navigation-right">
      <div 
        :class="['navigation-toggle', isOpen ? 'open' : '']" 
        @click="isOpen = !isOpen"
      >
        <template v-if="isOpen">
          <X class="navigation-icon" />
        </template>
        <template v-else>
          <Menu class="navigation-icon" />
        </template>
      </div>

      <Transition name="menu-grow">
        <div 
          v-if="isOpen" 
          class="navigation-menu-wrapper mobile-only"
        >
          <ul class="navigation-list">
            <li>
              <router-link
                to="/"
                class="navigation-list-item"
              >
                <House />Home
              </router-link>
            </li>
            <li>
              <router-link
                to="/projects"
                class="navigation-list-item"
              >
                <FolderKanban />Projects
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                class="navigation-list-item"
              >
                <User />About
              </router-link>
            </li>
            <li>
              <router-link
                to="/contact"
                class="navigation-list-item"
              >
                <Mail />Contact
              </router-link>
            </li>
          </ul>
        </div>
      </Transition>

      <ul class="navigation-list desktop-only">
        <li>
          <router-link
            to="/"
            class="navigation-list-item"
          >
            <House />Home
          </router-link>
        </li>
        <li>
          <router-link
            to="/projects"
            class="navigation-list-item"
          >
            <FolderKanban />Projects
          </router-link>
        </li>
        <li>
          <router-link
            to="/about"
            class="navigation-list-item"
          >
            <User />About
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            class="navigation-list-item"
          >
            <Mail />Contact
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { House, FolderKanban, User, Mail, Menu, X } from 'lucide-vue-next'
import { ref } from 'vue'

const isOpen = ref(false)
</script>