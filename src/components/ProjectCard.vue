<template>
    <div class="projectcard" data-aos="fade-up">
        <div class="projectcard-image"><Cog /></div>
        <h4 class="projectcard-title" data-aos="fade-up">{{title}}</h4>
        <p class="projectcard-description" data-aos="fade-up">{{description}}</p>
    </div>
</template>

<script setup>
import { Cog } from 'lucide-vue-next';
    const props = defineProps({
        title: String,
        image: String,
        description: String,
    })
</script>

