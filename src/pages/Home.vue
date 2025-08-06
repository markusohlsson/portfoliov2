<script setup>
import { ref, onMounted} from 'vue';
import ProjectCard from '../components/ProjectCard.vue';
import TechStack from '../components/TechStack.vue';
import whlogo from '../assets/wh.svg';
import EducationCard from '../components/EducationCard.vue';
import ExperienceCard from '../components/ExperienceCard.vue';
import { useIntersectionObserver } from '@vueuse/core'

    const projects = [
        {name: 'Placeholder', image: '', description: 'Work in progress, coming soon'},
        {name: 'Placeholder', image: '', description: 'Work in progress, coming soon'}
    ];

    
    const experiences = [
    {
        workplace: 'Webhallen Sverige AB',
        position: 'Fullstack Developer Consultant',
        image: whlogo,
        description: 'Worked as part of an agile team to enhance the webshop. Collaborated with UX designers and departments to align technical solutions with user and business needs.',
        skills: ['Laravel', 'JavaScript', 'Vue.js', 'MySQL', 'SCSS', 'Git', 'JIRA'],
        year: 'May 2024 - Current'
    },
    {
        workplace: 'Webhallen Sverige AB',
        position: 'Fullstack Developer Internship',
        image: whlogo,
        description: 'Completed an internship during studies focusing on both frontend and backend development. Gained experience working in an agile team and was later hired as a consultant.',
        skills: ['Laravel', 'Vue.js', 'PHP', 'JavaScript', 'MySQL', 'Git'],
        year: 'Oct 2023 - May 2024'
    },
    {
        workplace: 'Webhallen Sverige AB',
        position: 'Customer Service Agent',
        image: whlogo,
        description: 'Handled customer inquiries via chat, email, phone, and forums. Responsible for troubleshooting and managing delivery and order issues.',
        skills: ['Customer Support', 'Troubleshooting', 'Communication'],
        year: 'Sep 2020 - Sep 2022'
    },
    ];

const showProjects = ref(false)
const showExperience = ref(false)
const showEducation = ref(false)
const showContact = ref(false)

const projectSection = ref(null)
const experienceSection = ref(null)
const educationSection = ref(null)
const contactSection = ref(null)
const experienceRefs = ref([]) 
const showExperienceCards = ref(experiences.map(() => false))

function setExperienceRef(el, index) {
  experienceRefs.value[index] = el
}

useIntersectionObserver(projectSection, ([{ isIntersecting }]) => {
  if (isIntersecting) showProjects.value = true
}, { threshold: 0.1 })

useIntersectionObserver(experienceSection, ([{ isIntersecting }]) => {
  if (isIntersecting) showExperience.value = true
}, { threshold: 0.1 })

useIntersectionObserver(educationSection, ([{ isIntersecting }]) => {
  if (isIntersecting) showEducation.value = true
}, { threshold: 0.1 })

useIntersectionObserver(contactSection, ([{ isIntersecting }]) => {
  if (isIntersecting) showContact.value = true
}, { threshold: 0.1 })


onMounted(() => {
  experienceRefs.value.forEach((el, index) => {
    if (!el) return
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) showExperienceCards.value[index] = true
    }, { threshold: 0.1 })
  })
})
</script>

<template>
    <div class="home">
        <div class="home-middle">
            <div class="home-middle-info">
                <h1 class="info-title">Markus Ohlsson</h1>
                <h3 class="info-subtitle">Full-Stack Developer </h3>
                <p class="info-text"> Building web applications with modern technologies</p>
                <span class="home-middle-button"><router-link to="/About">Read more about me</router-link></span>
            </div>
        </div>
        <div class="home-left">
            <TechStack/>
            <div class="home-projects-container fade-section" ref="projectSection" :class="{ 'fade-in': showProjects }">
                <h4>Featured Projects</h4>
                <div class="home-projects">
                    <template v-for="project in projects">
                        <ProjectCard :title="project.name" :image="project.image" :description="project.description" />
                    </template>
                </div>
                <span class="home-middle-button"><router-link to="/Projects">See all projects</router-link></span>
            </div>
            <div class="experience fade-section" ref="experienceSection" :class="{ 'fade-in': showExperience }">
                <h4>Work Experience</h4>
                <ExperienceCard v-for="(exp, index) in experiences" 
                    :exp="exp" :index="index" :isLast="index === experiences.length -1"
                    :class="{ 'fade-in': showExperienceCards[index] }"
                    :ref="el => setExperienceRef(el, index)"
                />
            </div>
            <div ref="educationSection" class="fade-section" :class="{ 'fade-in': showEducation }">
                <h4>Education</h4>
                <EducationCard/>
            </div>
            <div class="contact-cta fade-section" ref="contactSection" :class="{ 'fade-in': showContact }">
                <p>Want to collaborate or just say hi?</p>
                <span class="home-middle-button"><router-link to="/contact">Contact me here</router-link></span>
            </div>
        </div>
    </div>
</template>

<style>
.fade-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
  pointer-events: none; /* Optional: prevent interaction before fade-in */
}

.fade-in {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.contact-cta {
  margin-top: 40px;
  font-size: 1.1rem;
  color: #5d3136;
  text-align: center;
}

.contact-cta a {
  color: #8a4b4e;
  font-weight: 600;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.contact-cta a:hover {
  color: #5d3136;
}

.full-width {
    width: 100%;
}


.whlogo {
  width: 40px;
  height: auto;
  margin-bottom: 0.5rem;
}
.home-projects-container {
  display: flex;
  flex-direction: column;
  .home-middle-button {
    width: fit-content;
  }
}
.home-projects {
    max-width: 80vw;
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}
.home-middle {
    background-image: url('../assets/hero.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: right;
}
.home-hero {
    height:250px;
    z-index: -5;
}
.home-middle-button {
    background-color: #5d3136;
    color:#f9ecdf;
    border-radius: 2.5rem;
    padding:10px;
    a {
        color:inherit;
        text-decoration: none;
    }
}

.home-middle-button:hover {
      background-color: #7a474c;
}
.home-left {
    width: 90vw;
    margin: 0 auto;
}

.info-title {
    font-weight: 800;
    font-size: 2rem;
    color: #3e1f22;
}
.info-subtitle {
    font-weight: 700;
    font-size: 1rem;
    color: #8a4b4e;
    font-style: italic;
}
.info-text {
    width:40%;
    font-size: 0.95rem;
    line-height: 1.5;
    color: #4b2a2d;
}
</style>