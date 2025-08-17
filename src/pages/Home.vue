<script setup>
import ProjectCard from '../components/ProjectCard.vue';
import TechStack from '../components/TechStack.vue';
import whlogoBlack from '../assets/icons/wh.svg';
import whlogoWhite from '../assets/icons/wh_white.svg';
import EducationCard from '../components/EducationCard.vue';
import ExperienceCard from '../components/ExperienceCard.vue';
import Hero from '../components/Hero.vue';
import { projects } from '../data/projects';
    
    const experiences = [
    {
        workplace: 'Webhallen Sverige AB',
        position: 'Fullstack Developer Consultant',
        imageLight: whlogoWhite,
        imageDark: whlogoBlack,
        description: 'Enhanced the company webshop as part of an agile team, collaborating with UX designers and departments to deliver user-focused, business-driven solutions. Built and maintained features using Laravel, Vue.js, MySQL, and SCSS, with JIRA for agile task management.',
        skills: ['Laravel', 'JavaScript', 'Vue.js', 'MySQL', 'SCSS', 'Git', 'JIRA'],
        year: 'May 2024 - Current'
    },
    {
        workplace: 'Webhallen Sverige AB',
        position: 'Fullstack Developer Internship',
        imageLight: whlogoWhite,
        imageDark: whlogoBlack,
        description: 'Gained full-stack experience in an agile team, contributing to webshop development with Laravel, Vue.js, and MySQL. Later transitioned into a consultant role.',
        skills: ['Laravel', 'Vue.js', 'PHP', 'JavaScript', 'MySQL', 'Git'],
        year: 'Oct 2023 - May 2024'
    },
    {
        workplace: 'Webhallen Sverige AB',
        position: 'Customer Service Agent',
        imageLight: whlogoWhite,
        imageDark: whlogoBlack,
        description: 'Provided support via chat, email, phone, and forums. Responsible for troubleshooting, resolving order and delivery issues, and ensuring a positive customer experience.',
        skills: ['Customer Support', 'Troubleshooting', 'Communication'],
        year: 'Sep 2020 - Sep 2022'
    },
    ];
</script>

<template>
  <div class="home">
    <Hero />
    <div class="home-container">
      <TechStack />
      <div
        ref="projectSection"
        class="home-projects-container"
      >
        <h3 class="home-projects-title">
          Featured Projects
        </h3>
        <div class="home-projects">
          <template
            v-for="project in projects.filter(p => p.featured)"
            :key="project.id"
          >
            <ProjectCard :project="project" />
          </template>
        </div>
        <router-link
          to="/projects"
          class="link-button medium secondary"
          data-aos="fade-up"
        >
          All projects
        </router-link>
      </div>
      <div
        ref="experienceSection"
        class="experience"
      >
        <h4 class="experience-title">
          Work Experience
        </h4>
        <ExperienceCard
          v-for="(exp, index) in experiences" 
          :key="exp"
          :exp="exp"
          :index="index"
        />
      </div>
      <div
        ref="educationSection"
        class="education"
      >
        <h5 class="education-title">
          Education
        </h5>
        <EducationCard />
      </div>
      <div
        ref="contactSection"
        class="contact-cta"
        data-aos="fade-up"
      >
        <p
          class="contact-cta-text"
          data-aos="fade-left"
        >
          Want to collaborate or just say hi?
        </p>
        <router-link
          to="/contact"
          class="link-button medium secondary"
          data-aos="fade-right"
        >
          Contact me
        </router-link>
      </div>
    </div>
  </div>
</template>