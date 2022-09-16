import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'

export const useCreateAccountStore = defineStore("createAccount", {
  state: () => ({
    path: useStorage("path", "email"),
    email: useStorage("email", null),
    mobileNumber: useStorage("mobileNumber", null),
    firstname: useStorage("firstname", null),
    lastname: useStorage("lastname", null),
  }),

  getters: {},

  actions: {},
});
