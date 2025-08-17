import { defineStore } from "pinia"
import aos from "aos"

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    darkmode: false,
    reducedMotion: false,
  }),
  actions: {
    toggleDarkMode() {
      this.darkmode = !this.darkmode
      document.documentElement.classList.toggle("dark", this.darkmode)
    },
    toggleReducedMotion() {
      this.reducedMotion = !this.reducedMotion
      document.documentElement.classList.toggle('reduced-motion', this.reducedMotion)
      if (!this.reducedMotion) {
        aos.init()
      }
    },
    init() {
      document.documentElement.classList.toggle("dark", this.darkmode);
      document.documentElement.classList.toggle("reduced-motion", this.reducedMotion)
    },
  },
  persist: true, 
})