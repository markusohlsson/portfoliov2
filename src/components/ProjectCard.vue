<template>
    <div class="projectcard">
        <img class="projectcard-image" src="../assets/wip.svg" alt="">
        <h4 class="projectcard-title">{{title}}</h4>
        <p class="projectcard-description">{{description}}</p>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String,
        image: String,
        description: String,
    })
</script>
