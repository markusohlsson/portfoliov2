import { defineStore } from "pinia"

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    darkmode: false,
  }),
  actions: {
    toggleDarkMode() {
      this.darkmode = !this.darkmode
      document.documentElement.classList.toggle("dark", this.darkmode)
    },
    init() {
      document.documentElement.classList.toggle("dark", this.darkmode)
    },
  },
  persist: true, 
})