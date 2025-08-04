<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue';
import TechStack from '../components/TechStack.vue';

    const projects = [
        {name: 'Project 1', image: '', description: 'lorem lorem lorem lorem lorem'},
        {name: 'Project 2', image: '', description: 'ipsum ipsum ipsum ipsum ipsum'}
    ]
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
        </div>
    </div>
</template>

<style>
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