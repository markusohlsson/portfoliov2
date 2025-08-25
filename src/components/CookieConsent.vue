<template>
  <div
    v-if="cookieStore.consentGiven === null"
    class="cookie-banner"
  >
    <p>
      This website uses cookies for anonymous analytics via Google Analytics 4 to improve the website. No personal data is collected for marketing.
      <a href="/privacy-policy">Learn more</a>
    </p>
    <div class="cookie-btn-container">
      <button
        class="link-button small secondary"
        @click="accept"
      >
        Accept
      </button>
      <button
        class="link-button small light"
        @click="reject"
      >
        Reject
      </button>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import { useCookieStore } from '../stores/cookie';
import { useAnalytics } from '../composables/useAnalytics';

const cookieStore = useCookieStore();

const { initAnalytics, removeAnalytics } = useAnalytics();

watch(
  () => cookieStore.consentGiven,
  (newVal) => {
    if (newVal === true) {
      initAnalytics();
    } else if (newVal === false) {
      removeAnalytics();
    }
  },
  { immediate: true }
);

const accept = () => cookieStore.accept();
const reject = () => cookieStore.reject();
</script>
