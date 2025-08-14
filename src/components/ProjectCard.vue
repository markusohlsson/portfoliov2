<template>
    <div class="projectcard" data-aos="fade-up" @click="goToProject(project.id)">
        <div class="projectcard-image-container">
            <Cog v-if="!project.image"/>
            <img v-else class="projectcard-image" :src="project.image" alt="">
        </div>

        <h4 class="projectcard-title" data-aos="fade-up">{{project.title}}</h4>
        <p class="projectcard-description" data-aos="fade-up">{{project.shortDescription}}</p>
        <router-link class="link-button small" :to="'/projects/' + project.id" data-aos="fade-up-right">Details</router-link>
    </div>
</template>

<script setup>
import { Cog } from 'lucide-vue-next';
import router from '../router';
    const props = defineProps({
        project: Object
    })


function goToProject(id) {
    router.push({ path: `/projects/${id}` })
}
</script>

