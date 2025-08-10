<script setup>
import { ref, onMounted } from 'vue';
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
</script>

<template>
  <section class="about-wrapper">
    <div class="intro-section">
      <div class="intro-text-container">
        <h1 class="intro-text-title" data-aos="fade-left">
          Hi, I’m Markus
        </h1>
        <h2 class="intro-text-subtitle" data-aos="fade-right">
          Turning ideas into fast, beautiful, and functional digital products
        </h2>
        <p class="intro-text-paragraph" data-aos="fade-up">
          My journey into development started with a curiosity for how things work
          on the web—and turned into a passion for building solutions that make
          people’s lives easier. I love tackling complex problems, crafting clean
          code, and seeing projects come to life from concept to launch. Outside of
          coding, I’m always exploring new tools and keeping up with modern
          technologies to bring fresh ideas to every project.
        </p>
      </div>
    </div>

    <section class="skills-section" ref="skillsSection" >
      <h3 class="skills-title" data-aos="fade-right">My Skills</h3>
      <ul class="skills-list">
        <li v-for="(skill, index) in skills" :key="skill" class="skill" data-aos="fade-up" :data-aos-delay="index * 100">{{ skill }}</li>
      </ul>
    </section>

    <section class="experience-section" ref="experienceSection">
      <h3 class="experience-title" data-aos="fade-right">Experience Highlights</h3>
      <ul class="experience-list">
        <li v-for="exp in experienceHighlights" :key="exp.year" class="experience-row">
          <span class="experience-year" data-aos="fade-right">{{ exp.year }}</span>
          <span class="experience-desc" data-aos="fade-left">{{ exp.text }}</span>
        </li>
      </ul>
    </section>

    <section class="philosophy-section" ref="philosophySection">
      <h3 class="philosophy-title" data-aos="fade-right">Work Philosophy</h3>
      <p class="philosophy-text" data-aos="fade-up-left">
        I believe in clean, maintainable code, open communication, and
        continuous learning. I’m a team player who loves collaborating and
        sharing knowledge.
      </p>
    </section>

    <section class="interests-section" ref="interestSection">
      <h3 class="interests-title" data-aos="fade-right">Personal Interests</h3>
      <ul class="interests-list">
        <li v-for="(interest, index) in personalInterests" :key="interest" class="interest" data-aos="fade-up" :data-aos-delay="index * 100">{{ interest }}</li>
      </ul>
    </section>

    <section class="cta-section" ref="contactSection" data-aos="fade-up">
      <p class="cta-section-text" data-aos="fade-left">Want to know more or collaborate? Feel free to get in touch!</p>
      <router-link class="link-button" to="/contact" data-aos="fade-right">Contact Me</router-link>
    </section>
  </section>
</template>
