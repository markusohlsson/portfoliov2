<template>
    <div>
        <img class="projectcard-image" src="../assets/hero.png" alt="">
        <h4>{{title}}</h4>
        <p>{{description}}</p>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String,
        image: String,
        description: String,
    })
</script>

<style>
    .projectcard-image {
        height:50%;
        width:75%;
    }
</style>