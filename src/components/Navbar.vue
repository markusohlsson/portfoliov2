<template>
  <div class="navigation">
    <div class="navigation-logo">Markus.dev</div>

    <!-- Right Side -->
    <div class="navigation-right">
      <div @click="isOpen = !isOpen" :class="['navigation-toggle', isOpen ? 'open' : '']">
        <template v-if="isOpen"><X class="navigation-icon" /></template>
        <template v-else><Menu class="navigation-icon" /></template>
      </div>

      <!-- Navigation List -->
        <Transition name="list-grow">
        <ul v-if="isOpen" class="navigation-list">
            <li><router-link to="/" class="navigation-list-item"><House />Home</router-link></li>
            <li><router-link to="/Projects" class="navigation-list-item"><FolderKanban />Projects</router-link></li>
            <li><router-link to="/About" class="navigation-list-item"><User />About</router-link></li>
            <li><router-link to="/Contact" class="navigation-list-item"><Mail />Contact</router-link></li>
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

<style>
.navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navigation-logo {
  font-family: 'Clash Display', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  letter-spacing: -0.03em;
}
.navigation-right {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.navigation-toggle {
  z-index: 2;
  background-color: #5d3136;
  color:#f9ecdf;
  border-radius:50%;
  height: 25px;
  padding:5px;
  margin-bottom: -4px;
  transition: border-radius 0.15s ease;
}

.navigation-toggle.open {
  border-radius: 50% 50% 0 0; /* Top-rounded when open */
}

.navigation-list {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  position: absolute;
  top: 110%; /* Slightly below icon */
  right: 0;
  background-color: #5d3136;
  border-radius: 8px 0 8px 8px;
  overflow: hidden;
  min-width: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.navigation-list.closed {
  opacity: 0;
  pointer-events: none;
  transform: translateY(-10px);
}

.navigation-list.open {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.navigation-list-item {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 15px;
  text-decoration: none;
  color: #f9ecdf;
  transition: background 0.2s;
}
.navigation-list-item:hover {
  background-color: #7a474c;
}

.list-grow-enter-active,
.list-grow-leave-active {
  transform-origin: top right;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.list-grow-enter-from,
.list-grow-leave-to {
  transform: scale(0);
  opacity: 0;
}

.list-grow-enter-to,
.list-grow-leave-from {
  transform: scale(1);
  opacity: 1;
}

</style>