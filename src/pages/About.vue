<script setup>
import { ref, onMounted } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
// You can import images, icons or components if you want
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
  <section class="about-page container">
    <!-- Hero / Intro -->
    <div class="intro-section">
      <div class="intro-photo">
        <img src="../assets/profile.png" alt="Markus Ohlsson" />
      </div>
      <div class="intro-text">
        <h1>Hi, I’m Markus</h1>
        <h2>Full-Stack Developer passionate about creating web applications</h2>
        <p>
          I build efficient, scalable web apps with a focus on clean code and
          great user experience. I’m driven by solving complex problems and
          learning new technologies.
        </p>
      </div>
    </div>

    <!-- Skills -->
    <section class="skills-section fade-section" ref="skillsSection" :class="{'fade-in': showSkills}">
      <h3>My Skills</h3>
      <ul class="skills-list">
        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>
    </section>

    <!-- Experience Highlights -->
    <section class="experience-section fade-section" ref="experienceSection" :class="{'fade-in': showExperience}">
      <h3>Experience Highlights</h3>
      <ul class="experience-list">
        <li v-for="exp in experienceHighlights" :key="exp.year">
          <span class="year">{{ exp.year }}</span>
          <span class="desc">{{ exp.text }}</span>
        </li>
      </ul>
    </section>

    <!-- Work Philosophy -->
    <section class="philosophy-section fade-section" ref="philosophySection" :class="{'fade-in': showPhilosophy}">
      <h3>Work Philosophy</h3>
      <p>
        I believe in clean, maintainable code, open communication, and
        continuous learning. I’m a team player who loves collaborating and
        sharing knowledge.
      </p>
    </section>

    <!-- Personal Interests -->
    <section class="interests-section fade-section" ref="interestSection" :class="{'fade-in': showInterests}">
      <h3>Personal Interests</h3>
      <ul class="interests-list">
        <li v-for="interest in personalInterests" :key="interest">{{ interest }}</li>
      </ul>
    </section>

    <!-- Call to Action -->
    <section class="cta-section fade-section" ref="contactSection" :class="{'fade-in': showContact}">
      <p>Want to know more or collaborate? Feel free to get in touch!</p>
      <router-link class="cta-button" to="/contact">Contact Me</router-link>
    </section>
  </section>
</template>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #5d3136;
}

.intro-section {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.intro-photo img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #5d3136;
}

.intro-text h1 {
  margin: 0 0 0.3rem 0;
  font-size: 2.5rem;
  font-weight: 700;
  color: #8a4b4e;
}

.intro-text h2 {
  margin: 0 0 1rem 0;
  font-weight: 600;
  font-size: 1.3rem;
  color: #3e1f22;
}

.intro-text p {
  max-width: 600px;
  line-height: 1.5;
  font-size: 1.05rem;
  color: #4b2a2d;
}

.skills-section,
.experience-section,
.philosophy-section,
.interests-section,
.cta-section {
  margin-bottom: 2.5rem;
}

h3 {
  font-size: 1.6rem;
  color: #7a474c;
  margin-bottom: 1rem;
  border-bottom: 2px solid #5d3136;
  padding-bottom: 0.25rem;
  max-width: fit-content;
}

.skills-list,
.experience-list,
.interests-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skills-list li {
  background-color: #5d3136;
  color: #f9ecdf;
  padding: 6px 14px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
}

.experience-list li {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.7rem;
  font-weight: 500;
}

.experience-list .year {
  min-width: 70px;
  color: #8a4b4e;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.1px;
}

.philosophy-section p {
  max-width: 600px;
  font-size: 1rem;
  line-height: 1.6;
  color: #4b2a2d;
}

.interests-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.interests-list li {
  background-color: #7a474c;
  color: #f9ecdf;
  padding: 6px 14px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
}

.cta-section {
  text-align: center;
}

.cta-button {
  display: inline-block;
  background-color: #5d3136;
  color: #f9ecdf;
  padding: 12px 28px;
  border-radius: 30px;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #7a474c;
}

@media (max-width: 700px) {
  .intro-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .intro-text h1 {
    font-size: 2rem;
  }

  .intro-text h2 {
    font-size: 1.1rem;
  }
}
</style>
