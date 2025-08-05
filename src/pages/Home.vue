<script setup lang="ts">
import { ref } from 'vue';
import ProjectCard from '../components/ProjectCard.vue';
import TechStack from '../components/TechStack.vue';
import whlogo from '../assets/wh.svg';
import EducationCard from '../components/EducationCard.vue';
import ExperienceCard from '../components/ExperienceCard.vue';

    const projects = [
        {name: 'Project 1', image: '', description: 'lorem lorem lorem lorem lorem'},
        {name: 'Project 2', image: '', description: 'ipsum ipsum ipsum ipsum ipsum'}
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

</script>

<template>
    <div class="home">
        <div class="home-middle">
            <div class="home-middle-info">
                <h1 class="info-title">Markus Ohlsson</h1>
                <h3 class="info-subtitle">Full-Stack Developer </h3>
                <p class="info-text"> Building web applications with modern technologies</p>
                <span class="home-middle-button"><router-link to="/Projects">See Projects</router-link></span>
            </div>
        </div>
        <div class="home-left">
            <TechStack/>
            <div class="home-projects-container">
                <h4>Featured Projects</h4>
                <div class="home-projects">
                    <template v-for="project in projects">
                        <ProjectCard :title="project.name" :image="project.image" :description="project.description" />
                    </template>
                </div>
            </div>
            <div class="experience">
                <h4>Work Experience</h4>
                <ExperienceCard v-for="(exp, index) in experiences" :exp="exp" :index="index" :isLast="index === experiences.length -1"/>
            </div>
            <div>
                <h4>Education</h4>
                <EducationCard/>
            </div>
            <div class="contact-cta">
                <p> Want to collaborate or just say hi?</p>
                <span class="home-middle-button"><router-link to="/contact">Contact me here</router-link></span>
            </div>
        </div>
    </div>
</template>

<style>
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
.home-middle-info {

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

}
.info-subtitle {
    
}
.info-text {
    width:40%;
}
</style>