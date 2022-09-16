<template>
  <Heading max="512px" margin="0 0 48px"
    >Where are you in your entrepreneurial journey?</Heading
  >
  <RadioBoxGroup
    name="stageSelection"
    v-model="onboardingStore.stage"
    :options="optionsData"
  />
  <ValidationBanner v-if="showValidationBanner" ref="validationBanner" margin="24px 0 0" />
  <Button @click="buttonHandler" width="100%" max="320px" margin="40px 0 0" />
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useOnboardingStore } from "../../../stores/onboarding";

import Heading from "../../0_atoms/Heading/VHeading.vue";
import Button from "../../0_atoms/Button/VButton.vue";
import ValidationBanner from "../../1_molecules/ValidationBanner/VValidationBanner.vue";
import RadioBoxGroup from "../../2_cells/RadioBoxGroup/VRadioBoxGroup.vue";

const router = useRouter();
const onboardingStore = useOnboardingStore();
const showValidationBanner = ref(false);
const validationBanner = ref(null);

const optionsData = {
  newIdea: {
    header: "I’m building an idea",
    content: "I have an idea, but I’m still in the research phase and I’m\
      not quite ready to turn it into a business yet."
  },
  readyToLaunch: {
    header: "I’m getting ready to launch",
    content: "I’m ready to launch my business and I want to understand my options.",
  },
  alreadyOpen: {
    header: "My business is already open",
    content: "I’m looking to become more efficient, grow my market, and make\
      everyday tasks easier to manage",
  },
  closingBusiness: {
    header: "My business is closing",
    content: "I need to dissolve my business and I want to understand my options.",
  },
};

const buttonHandler = () => {
  if (!onboardingStore.stage) {
    showValidationBanner.value = true;
    return;
  }

  router.push({ name: "IndustrySearch" });
};
</script>
