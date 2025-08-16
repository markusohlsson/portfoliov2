<template>
  <div
    v-if="project"
    class="projectdetails-container"
  >
    <h2
      class="projectdetails-title"
      data-aos="fade-left"
    >
      {{ project.title }}
    </h2>
        
    <div
      class="projectdetails-image-container"
      data-aos="fade-down"
    >
      <img
        class="projectdetails-image"
        :src="project.image"
        :alt="project.title + ' Screenshot'"
      >
    </div>

    <p
      class="projectdetails-description"
      data-aos="fade-right"
    >
      {{ project.longDescription }}
    </p>

    <div class="projectdetails-links">
      <a
        :href="project.demo"
        target="_blank"
        class="link-button medium"
        data-aos="fade-right"
      >Live Demo</a>
      <a
        :href="project.repo"
        target="_blank"
        class="link-button medium secondary"
        data-aos="fade-left"
      >Repository</a>
    </div>
        
    <div class="projectdetails-section">
      <h3 class="projectdetails-section-title">
        Features
      </h3>
      <ul class="projectdetails-feature-list">
        <li
          v-for="(feature, index) in project.features"
          :key="feature"
          class="projectdetails-feature-item"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          {{ feature }}
        </li>
      </ul>
    </div>

    <div class="projectdetails-tech-sections">
      <div class="projectdetails-section">
        <h3
          class="projectdetails-section-title"
          data-aos="fade-up-right"
        >
          Frontend
        </h3>
        <ul class="projectdetails-tech-list">
          <template
            v-for="ftech in project.frontendTech"
            :key="ftech.name"
          >
            <TechStackLarge
              :tech="ftech"
              :aos="'fade-right'"
            />
          </template>
        </ul>
      </div>

      <div class="projectdetails-section">
        <h3
          v-if="project.backendTech"
          class="projectdetails-section-title"
          data-aos="fade-up-left"
        >
          Backend
        </h3>
        <ul class="projectdetails-tech-list">
          <template
            v-for="btech in project.backendTech"
            :key="btech.name"
          >
            <TechStackLarge
              :tech="btech"
              :aos="'fade-left'"
            />
          </template>
        </ul>
      </div>
    </div>
    <div>
      <router-link
        to="/projects"
        class="link-button medium"
      >
        All projects
      </router-link>
    </div>
    <section
      ref="contactSection"
      class="cta-section"
      data-aos="fade-up"
    >
      <p
        class="cta-section-text"
        data-aos="fade-left"
      >
        Got any questions about the projects?
      </p>
      <router-link
        to="/contact"
        class="link-button medium secondary"
        data-aos="fade-right"
      >
        Let me know
      </router-link>
    </section>
  </div>

  <div
    v-else
    class="projectdetails-notfound"
  >
    <p>Project not found</p>
    <router-link to="/projects">
      Return to projects...
    </router-link>
  </div>
</template>


<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { projects } from '../data/projects.js'
import TechStackLarge from '../components/TechStackLarge.vue';

const route = useRoute();

const project = computed(() =>
  projects.find(p => p.id === route.params.id)
)
</script>
