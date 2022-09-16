<template>
  <Heading v-html="headingData[radioOptions].text" :max="headingData[radioOptions].size" margin="0 0 48px" />
  <RadioBoxGroup
    name="workTime"
    v-model="onboardingStore.work"
    :options="optionsData[radioOptions]"
  />
  <ValidationBanner v-if="showValidationBanner" ref="validationBanner" margin="24px 0 0" />
  <Button @click="buttonHandler" width="100%" max="320px" margin="40px 0 0" />
</template>

<script setup>
import { ref, computed } from "vue";
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

const headingData = [
  {
    text: 'Do you see this idea being a full-time gig for you?',
    size: '400px'
  },
  {
    text: 'Is this going to be <span style="white-space: nowrap">a full-time</span> gig for you?',
    size: '350px'
  },
  {
    text: 'Is this a full-time gig for you?',
    size: '300px'
  },
  {
    text: 'Has this been a full-time occupation for you?',
    size: '400px'
  },
]

const optionsData =
  [{
    fullTime: {
      header: 'Yes, it would be full-time',
      content: 'I would want to dedicate all of my working hours to this business.',
    },
    partTime: {
      header: 'No, it would be part-time',
      content: 'I would split my working hours between this business and something else.',
    },
    notSure: {
      header: 'I’m not sure yet',
      content: 'The idea is in the early stages, and I’m still not sure how big I want it to be.',
    },
  },
  {
    fullTime: {
      header: 'Yes, it would be full-time',
      content: 'All of my working hours will be dedicated to this business.',
    },
    partTime: {
      header: 'No, it would be part-time',
      content: 'I will split my working hours between this business and something else.',
    },
    notSure: {
      header: 'I’m a silent partner',
      content: 'I’m an owner but I will not be involved in the day-to-day business operations.',
    },
  },
  {
    fullTime: {
      header: 'Yes, it’s full-time',
      content: 'All of my working hours are dedicated to this business.',
    },
    partTime: {
      header: 'No, it’s part-time',
      content: 'I split my working hours between this business and something else.',
    },
    notSure: {
      header: 'I’m a silent partner',
      content: 'I’m an owner but I am not involved in the day-to-day business operations.',
    },
  },
  {
    fullTime: {
      header: 'Yes, it’s full-time',
      content: 'All of my working hours are dedicated to this business.',
    },
    partTime: {
      header: 'No, it’s part-time',
      content: 'I split my working hours between this business and something else.',
    },
    notSure: {
      header: 'I’m a silent partner',
      content: 'I’m an owner but I am not involved in the day-to-day business operations.',
    },
  }]


const buttonHandler = () => {
  if (!onboardingStore.work) {
    showValidationBanner.value = true;
    return;
  } 

  router.push({ name: "BusinessPlace" });
};

const radioOptions = computed(() => {
  switch(onboardingStore.stage) {
    case 'readyToLaunch': {
      return 1;
    };
    case 'alreadyOpen': {
      return 2;
    };
    case 'closingBusiness': {
      return 3;
    };
    default: {
      return 0;
    };
  }
});
</script>
