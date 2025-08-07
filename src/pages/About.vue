<script setup>
import { ref, onMounted } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
const skills = [
  'Vue.js', 'Laravel', 'JavaScript', 'CSS/SCSS', 'PHP', 'MySQL', 'Git', 'REST APIs'
]

const experienceHighlights = [
  { year: '2024', text: 'Fullstack Developer Consultant at Webhallen' },
  { year: '2023', text: 'Internship at Webhallen focused on frontend & backend' },
  { year: '2020', text: 'Customer Service Agent with focus on communication' }
]

const personalInterests = [
  'Gaming',
  'Learning new tech',
  'Keyboards',
  'Golf',
  'Football',
  'Ice Hockey'
]
const showSkills = ref(false);
const showExperience = ref(false);
const showPhilosophy = ref(false);
const showInterests = ref(false);
const showContact = ref(false);

const skillsSection = ref(null);
const experienceSection = ref(null);
const philosophySection = ref(null);
const interestSection = ref(null);
const contactSection = ref(null);

useIntersectionObserver(skillsSection, ([{isIntersecting}]) => {
    if(isIntersecting) showSkills.value = true
}, {threshold: 0.1})

useIntersectionObserver(experienceSection, ([{isIntersecting}]) => {
    if(isIntersecting) showExperience.value = true
}, {threshold: 0.1 })

useIntersectionObserver(philosophySection, ([{isIntersecting}]) => {
    if(isIntersecting) showPhilosophy.value = true
}, {threshold: 0.1})

useIntersectionObserver(interestSection, ([{isIntersecting}]) => {
    if(isIntersecting) showInterests.value = true
}, {threshold: 0.1})

useIntersectionObserver(contactSection, ([{isIntersecting}]) => {
    if(isIntersecting) showContact.value = true
}, {threshold: 0.1})

</script>

<template>
  <section class="about-wrapper">
    <div class="intro-section">
      <div class="intro-photo-container">
        <img class="intro-photo" src="../assets/img/profile.png" alt="Markus Ohlsson" />
      </div>
      <div class="intro-text-container">
        <h1 class="intro-text-title">Hi, I’m Markus</h1>
        <h2 class="intro-text-subtitle">Full-Stack Developer passionate about creating web applications</h2>
        <p class="intro-text-paragraph">
          I build efficient, scalable web apps with a focus on clean code and
          great user experience. I’m driven by solving complex problems and
          learning new technologies.
        </p>
      </div>
    </div>

    <section class="skills-section fade-section" ref="skillsSection" :class="{'fade-in': showSkills}">
      <h3 class="skills-title">My Skills</h3>
      <ul class="skills-list">
        <li v-for="skill in skills" :key="skill" class="skill">{{ skill }}</li>
      </ul>
    </section>

    <section class="experience-section fade-section" ref="experienceSection" :class="{'fade-in': showExperience}">
      <h3 class="experience-title">Experience Highlights</h3>
      <ul class="experience-list">
        <li v-for="exp in experienceHighlights" :key="exp.year" class="experience-row">
          <span class="experience-year">{{ exp.year }}</span>
          <span class="experience-desc">{{ exp.text }}</span>
        </li>
      </ul>
    </section>

    <section class="philosophy-section fade-section" ref="philosophySection" :class="{'fade-in': showPhilosophy}">
      <h3 class="philosophy-title">Work Philosophy</h3>
      <p class="philosophy-text">
        I believe in clean, maintainable code, open communication, and
        continuous learning. I’m a team player who loves collaborating and
        sharing knowledge.
      </p>
    </section>

    <section class="interests-section fade-section" ref="interestSection" :class="{'fade-in': showInterests}">
      <h3 class="interests-title">Personal Interests</h3>
      <ul class="interests-list">
        <li v-for="interest in personalInterests" :key="interest" class="interest">{{ interest }}</li>
      </ul>
    </section>

    <section class="cta-section fade-section" ref="contactSection" :class="{'fade-in': showContact}">
      <p class="cta-section-text">Want to know more or collaborate? Feel free to get in touch!</p>
      <router-link class="link-button" to="/contact">Contact Me</router-link>
    </section>
  </section>
</template>
