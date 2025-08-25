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

// Pinia store
const cookieStore = useCookieStore();

// Get initAnalytics function from composable
const { initAnalytics } = useAnalytics();

// Watch for consent changes, including persisted state
watch(
  () => cookieStore.consentGiven,
  (newVal) => {
    if (newVal === true) {
      initAnalytics();
    }
  },
  { immediate: true } // ensures persisted consent triggers analytics on page load
);

// Accept / Reject handlers
const accept = () => cookieStore.accept();
const reject = () => cookieStore.reject();
</script>
