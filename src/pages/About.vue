<script setup>
import { reactive } from 'vue';
import { techs, comfortableTech } from '../data/techs'

const allTechArray = Object.values(techs)

// Filter out comfortable techs from allTechArray
const otherTech = allTechArray.filter(
  t => !comfortableTech.some(ct => ct.name === t.name)
)

const experienceHighlights = [
  { year: '2024', text: 'Fullstack Developer Consultant at Webhallen' },
  { year: '2023', text: 'Internship at Webhallen focused on frontend & backend' },
  { year: '2020', text: 'Customer Service Agent with focus on communication' }
]

const personalInterests = [
  'Gaming',
  'Learning new tech',
  'Keyboards',
  'Golf',
  'Football',
  'Ice Hockey'
]
const awards = reactive([
  {
    year: 2018,
    title: 'Rookie Of The Year',
    company: 'Webhelp',
    original: 'Stabil, självständig, flexibel och kvalitativ. Väldigt snabb på att komma in i arbetet likaväl som teamet. Har på kort tid blivit en person att lita på, tar ansvar för sitt eget arbete och genomför det på ett tillfredställande sätt.',
    translation: 'Stable, independent, flexible and qualitative. Very quick to get into the work as well as the team. Has in a short time become a person to trust, takes responsibility for his own work and carries it out in a satisfactory manner.',
    showOriginal: false,
  },
  {
    year: 2018,
    title: 'Star Award Of The Month',
    company: 'Webhelp',
    original: 'This person hasnt worked with us for long, and during this very short time, he has shown his skills with a lot of surprises. Hes extremely good in both assignments and delivers exceptionally well. I am extremely grateful that this person is in my team.',
    translation: '',
    showOriginal: false,
  },
  {
    year: 2017,
    title: 'Employee Of The Month',
    company: 'McDonalds',
    original: 'Markus Ohlsson är en härlig och trevlig kille som alltid gör ett 100%igt jobb på sina stationer i produktionen. Uppmanar och leder andra medarbetare till ett bättre arbete. Coachar och hjälper andra. Markus styrka är sin höga arbetsmoral att sträva efter att alltid utföra rätt operationella rutiner samt leverera hög KSR i sitt område. En bra förebild för andra medarbetare!',
    translation: 'Markus Ohlsson is a lovely and nice guy who always does a 100% job at his stations in production. Encourages and leads other employees to do better work. Coaches and helps others. Markus strength is his high work ethic to strive to always carry out the right operational routines and deliver high KSR in his area. A good role model for other employees!',
    showOriginal: false,
  }
])
</script>

<template>
  <section class="about-wrapper">
    <div class="intro-section">
      <div class="intro-text-container">
        <h1
          class="intro-text-title"
          data-aos="fade-left"
        >
          Hi, I’m Markus
        </h1>
        <h2
          class="intro-text-subtitle"
          data-aos="fade-right"
        >
          Turning ideas into fast, beautiful, and functional digital products
        </h2>
        <p
          class="intro-text-paragraph"
          data-aos="fade-up"
        >
          My journey into development started with a curiosity for how things work
          on the web—and turned into a passion for building solutions that make
          people’s lives easier. I love tackling complex problems, crafting clean
          code, and seeing projects come to life from concept to launch. Outside of
          coding, I’m always exploring new tools and keeping up with modern
          technologies to bring fresh ideas to every project.
        </p>
      </div>
    </div>

    <section
      ref="skillsSection"
      class="skills-section"
    >
      <h3
        class="skills-title"
        data-aos="fade-right"
      >
        Comfortable Tech
      </h3>
      <ul class="skills-list">
        <li
          v-for="(tech, index) in comfortableTech"
          :key="tech"
          class="skill"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <img
            :src="tech.icon"
            :alt="tech.name"
            class="skill-icon"
          >
          <span class="skill-name">{{ tech.name }}</span>
        </li>
      </ul>
      <h3 class="skills-title">
        Also familiar With
      </h3>
      <ul class="skills-list">
        <li
          v-for="(tech, index) in otherTech"
          :key="tech"
          class="skill"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <img
            :src="tech.icon"
            :alt="tech.name"
            class="skill-icon"
          >
          <span class="skill-name">{{ tech.name }}</span>
        </li>
      </ul>
    </section>


    <section
      ref="experienceSection"
      class="experience-section"
    >
      <h3
        class="experience-title"
        data-aos="fade-right"
      >
        Experience Highlights
      </h3>
      <ul class="experience-list">
        <li
          v-for="exp in experienceHighlights"
          :key="exp.year"
          class="experience-row"
        >
          <span
            class="experience-year"
            data-aos="fade-right"
          >{{ exp.year }}</span>
          <span
            class="experience-desc"
            data-aos="fade-left"
          >{{ exp.text }}</span>
        </li>
      </ul>
    </section>

    <section
      ref="philosophySection"
      class="philosophy-section"
    >
      <h3
        class="philosophy-title"
        data-aos="fade-right"
      >
        Work Philosophy
      </h3>
      <p
        class="philosophy-text"
        data-aos="fade-up-left"
      >
        I believe in clean, maintainable code, open communication, and
        continuous learning. I’m a team player who loves collaborating and
        sharing knowledge.
      </p>
    </section>

    <section
      ref="interestSection"
      class="interests-section"
    >
      <h3
        class="interests-title"
        data-aos="fade-right"
      >
        Personal Interests
      </h3>
      <ul class="interests-list">
        <li
          v-for="(interest, index) in personalInterests"
          :key="interest"
          class="interest"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          {{ interest }}
        </li>
      </ul>
    </section>

    <section class="awards-section">
      <h3
        class="awards-title"
        data-aos="fade-right"
      >
        Awards and Honors
      </h3>

      <ul class="awards-list">
        <li
          v-for="(award, index) in awards"
          :key="index"
          class="award-item"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="award-content">
            <h4
              class="award-heading"
              data-aos="fade-right"
            >
              {{ award.title }}
            </h4>
            <div class="award-meta">
              <div data-aos="fade-right">
                {{ award.company }}
              </div>
              <div>-</div>
              <div data-aos="fade-left">
                {{ award.year }}
              </div>
            </div>

            <div
              v-if="award.original"
              class="award-text-block"
              data-aos="fade-up"
            >
              <p
                v-if="!award.showOriginal"
                class="award-description"
              >
                {{ award.translation || award.original }}
              </p>
              <p
                v-else
                class="award-original"
              >
                {{ award.original }}
              </p>

              <button
                v-if="award.translation"
                class="award-toggle-btn"
                data-aos="fade-up-right"
                @click="award.showOriginal = !award.showOriginal"
              >
                {{ award.showOriginal ? 'Show translation' : 'Show original' }}
              </button>
            </div>

            <p
              v-else
              class="award-description"
            >
              {{ award.translation }}
            </p>
          </div>
        </li>
      </ul>
    </section>


    <section
      ref="contactSection"
      class="cta-section"
      data-aos="fade-up"
    >
      <p
        class="cta-section-text"
        data-aos="fade-left"
      >
        Want to know more or collaborate? Feel free to get in touch!
      </p>
      <router-link
        class="link-button medium"
        to="/contact"
        data-aos="fade-right"
      >
        Contact Me
      </router-link>
    </section>
  </section>
</template>
