<template>
  <li
    class="projectdetails-tech-item"
    :data-aos="aos"
  >
    <div class="projectdetails-tech-card">
      <div
        class="projectdetails-tech-header"
        :data-aos="aos"
      >
        <img
          class="projectdetails-tech-icon"
          :src="tech.icon"
          :alt="tech.name"
        >
        <span class="projectdetails-tech-name">{{ tech.name }}</span>
      </div>
      <p
        class="projectdetails-tech-description"
        :data-aos="aos"
      >
        {{ tech.description }}p
      </p>
    </div>
  </li>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    tech: {
      type: Object,
      default: () => ({
        name: '',
        description: '',
        icon: ''
      })
    },
    aos: {
      type: String,
      default: '',
    }
})
</script>

<style>
.projectdetails-tech-item {
}


.projectdetails-tech-card {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    width: 320px;
    padding: var(--space-sm);
    border-radius: var(--radius-md);
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
    border: 1px solid rgba(0,0,0,0.05);
}
.projectdetails-tech-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--secondary-color);
    padding: var(--space-sm);
    color: var(--primary-color);
    border-radius: var(--radius-sm);
    height: 125px;
    width: 100px;
}

.projectdetails-tech-icon {
    height:100px;
    width: 75px;
    padding:var(--space-xs);
}

.projectdetails-tech-name {
}

.projectdetails-tech-description {
    padding-inline:var(--space-md);
}

@media screen and (min-width: 768px) {
    .projectdetails-tech-card {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    width: 500px;
    padding: var(--space-sm);
    border-radius: var(--radius-md);

}
	.cta-section {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
}
</style>