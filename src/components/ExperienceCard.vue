<template>
    <div class="work-experience">
        <div class="work-experience-left">
            <img class="work-experience-logo" :src="exp.image" :alt="exp.workplace">
            <div v-if="!isLast">
                <div class="line"></div>
            </div>
        </div>
        <div class="work-experience-right">
            <span class="work-experience-year">{{ exp.year }}</span>
            <span class="work-experience-position">{{ exp.position }}</span>
            <span class="work-experience-company">{{ exp.workplace }}</span>
            <span class="work-experience-description">{{ exp.description }}</span>
            <div class="work-experience-skill-container">
                <template v-for="skill in exp.skills" >
                    <span class="work-experience-skill">{{ skill }}</span>
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
isLast: Boolean,
})
</script>
