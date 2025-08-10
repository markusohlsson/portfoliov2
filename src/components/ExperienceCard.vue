<template>
    <div class="work-experience">
        <div class="work-experience-left" data-aos="fade-right">
            <img class="work-experience-logo" :src="exp.image" :alt="exp.workplace">
            <div data-aos="fade-up-right">
                <div class="line" ></div>
            </div>
        </div>
        <div class="work-experience-right" data-aos="fade-left">
            <span class="work-experience-year" data-aos="fade-left">{{ exp.year }}</span>
            <span class="work-experience-position" data-aos="fade-left">{{ exp.position }}</span>
            <span class="work-experience-company" data-aos="fade-left">{{ exp.workplace }}</span>
            <span class="work-experience-description"data-aos="fade-left" >{{ exp.description }}</span>
            <div class="work-experience-skill-container" data-aos="fade-left">
                <template v-for="(skill, index) in exp.skills" >
                    <span class="work-experience-skill" data-aos="fade-up" :data-aos-delay="index * 100">{{ skill }}</span>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
 exp: {
    workplace: String,
    position: String,
    image: String,
    description: String,
    year: String,
    skills: Array,
},
index: Number,
})
</script>
