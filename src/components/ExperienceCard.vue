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

<style>


.work-experience {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    position: relative;
    .work-experience-left {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        .work-experience-logo {
            height: 100px;
            border-radius: 50%;
        }
        .line {
            height: 250px;
            width: 1px;
            background-color: #5d3136;
            margin-top:10px;
        }
    }

    .work-experience-right {
        display: flex;
        flex-direction: column;
        justify-content:center;
        gap:10px;
        .work-experience-company {
            font-weight: 700;
            font-size: 1rem;
            color: #8a4b4e;
            font-style: italic;
            margin-bottom: 6px;
        }
        .work-experience-position {
            font-weight: 600;
            font-size: 1.2rem;
            color: #3e1f22;
        }
        .work-experience-year {
            font-weight: 700;
            font-size: 1rem;
            color: #5d3136;
            text-transform: uppercase;
            letter-spacing: 1.2px;
        }
        .work-experience-description {
            font-size: 0.95rem;
            line-height: 1.5;
            color: #4b2a2d;
            max-width: 600px;
        }
        .work-experience-skill-container {
            display: flex;
            flex-wrap: wrap;
            gap:5px;
            .work-experience-skill {
                border:1px solid #5d3136;
                background-color: #5d3136;
                color:#f9ecdf;
                width: fit-content;
                max-width: fit-content;
                padding:5px;
                border-radius: 12px;
            }
        }
    }
}
</style>