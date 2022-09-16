import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'

export const useOnboardingStore = defineStore("onboarding", {
  state: () => ({
    stage: useStorage("stage", null),
    naics: useStorage("naics", null),
    work: useStorage("work", null),
    place: useStorage("place", null),
    mostPopularTags: useStorage("mostPopularTags", []),
    recommendedTags: useStorage("recommendedTags", []),
  }),

  getters: {},

  actions: {},
});
