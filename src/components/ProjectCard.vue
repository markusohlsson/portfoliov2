<template>
    <div class="projectcard" data-aos="fade-up">
        <img class="projectcard-image" data-aos="zoom-in" src="../assets/svg/under_construction.svg" alt="">
        <h4 class="projectcard-title" data-aos="fade-up">{{title}}</h4>
        <p class="projectcard-description" data-aos="fade-up">{{description}}</p>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String,
        image: String,
        description: String,
    })
</script>
