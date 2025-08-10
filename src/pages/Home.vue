<script setup>
import { ref, onMounted} from 'vue';
import ProjectCard from '../components/ProjectCard.vue';
import TechStack from '../components/TechStack.vue';
import whlogo from '../assets/icons/wh.svg';
import EducationCard from '../components/EducationCard.vue';
import ExperienceCard from '../components/ExperienceCard.vue';
import Hero from '../components/Hero.vue';

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


</script>

<template>
    <div class="home">
        <Hero />
        <div class="home-container">
            <TechStack/>
            <div class="home-projects-container" ref="projectSection">
                <h4 class="home-projects-title">Featured Projects</h4>
                <div class="home-projects">
                    <template v-for="project in projects">
                        <ProjectCard :title="project.name" :image="project.image" :description="project.description" />
                    </template>
                </div>
                <span class="link-button"><router-link to="/Projects">See all projects</router-link></span>
            </div>
            <div class="experience" ref="experienceSection">
                <h4 class="experience-title">Work Experience</h4>
                <ExperienceCard v-for="(exp, index) in experiences" 
                    :exp="exp" :index="index"
                />
            </div>
            <div ref="educationSection" class="education" >
                <h4 class="education-title">Education</h4>
                <EducationCard/>
            </div>
            <div class="contact-cta" ref="contactSection" data-aos="fade-up">
                <p class="contact-cta-text" data-aos="fade-left">Want to collaborate or just say hi?</p>
                <span class="link-button" data-aos="fade-right"><router-link to="/contact">Contact me here</router-link></span>
            </div>
        </div>
    </div>
</template>

<style>

</style>