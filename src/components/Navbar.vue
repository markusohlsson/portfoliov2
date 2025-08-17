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
            <li class="settings">
              <Sun class="settings-icon" />
              <label class="switch">
                <input 
                  type="checkbox" 
                  :checked="settings.darkmode" 
                  @change="settings.toggleDarkMode" 
                >
                <span class="slider" />
              </label>
              <Moon class="settings-icon" />
            </li>
            <li class="settings">
              <Play
                class="settings-icon"
                aria-label="Animations enabled"
              />
              <label class="switch">
                <input 
                  type="checkbox" 
                  :checked="settings.reducedMotion" 
                  @change="settings.toggleReducedMotion" 
                >
                <span class="slider" />
              </label>
              <Pause
                class="settings-icon"
                aria-label="Animations disabled"
              />
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
        <li
          class="settings"
          :title="settings.darkmode ? 'Enable Light Theme' : 'Enable Dark Theme'"
        >
          <button
            class="darkmode-btn"
            :aria-label="settings.darkmode ? 'Enable Light Theme' : 'Enable Dark Theme'"
            @click="settings.toggleDarkMode"
          >
            <Sun v-if="settings.darkmode" />
            <Moon v-else />
          </button>
        </li>
        <li
          class="settings"
          :title="settings.reducedMotion ? 'Enable Animations' : 'Disable Animations'"
        >
          <button
            class="darkmode-btn"
            @click="settings.toggleReducedMotion"
          >
            <Play
              v-if="settings.reducedMotion"
              aria-label="Animations disabled"
            />
            <Pause
              v-else
              aria-label="Animations Enabled"
            />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { House, FolderKanban, User, Mail, Menu, X, Sun, Moon, Pause, Play } from 'lucide-vue-next'
import { useSettingsStore } from "../stores/settings"
import { ref } from 'vue'

const isOpen = ref(false)
const settings = useSettingsStore()
</script>