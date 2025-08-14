<script setup>
import { ref, onMounted} from 'vue';
import ProjectCard from '../components/ProjectCard.vue';
import TechStack from '../components/TechStack.vue';
import whlogo from '../assets/icons/wh.svg';
import EducationCard from '../components/EducationCard.vue';
import ExperienceCard from '../components/ExperienceCard.vue';
import Hero from '../components/Hero.vue';

/* Project Images */

import omdb from '../assets/img/projects/omdb.png'

import { projects } from '../data/projects';

    
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
        <Hero />
        <div class="home-container">
            <TechStack/>
            <div class="home-projects-container" ref="projectSection">
                <h3 class="home-projects-title">Featured Projects</h3>
                <div class="home-projects">
                    <template v-for="project in projects.filter(p => p.featured)" :key="project.id">
                        <ProjectCard :project="project"/>
                    </template>
                </div>
                <router-link to="/projects" class="link-button medium secondary" data-aos="fade-up">All projects</router-link>
            </div>
            <div class="experience" ref="experienceSection">
                <h4 class="experience-title">Work Experience</h4>
                <ExperienceCard v-for="(exp, index) in experiences" 
                    :exp="exp" :index="index"
                />
            </div>
            <div ref="educationSection" class="education" >
                <h5 class="education-title">Education</h5>
                <EducationCard/>
            </div>
            <div class="contact-cta" ref="contactSection" data-aos="fade-up">
                <p class="contact-cta-text" data-aos="fade-left">Want to collaborate or just say hi?</p>
                <router-link to="/contact" class="link-button medium" data-aos="fade-right">Contact me</router-link>
            </div>
        </div>
    </div>
</template>

<style>

</style>