import { defineStore } from 'pinia';

export const useCookieStore = defineStore("cookie", {
  state: () => ({
    consentGiven: null,
  }),
  actions: {
    accept() {
      this.consentGiven = true;
    },
    reject() {
      this.consentGiven = false;
    },
    showBanner() {
        this.consentGiven = null;
    }
  },
  persist: true
});
