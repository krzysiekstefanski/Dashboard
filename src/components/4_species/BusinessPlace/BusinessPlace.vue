<template>
  <Heading v-html="headingData[radioOptions].text" :max="headingData[radioOptions].size" margin="0 0 48px" />
  <RadioBoxGroup
    name="businessPlace"
    v-model="onboardingStore.place"
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
    text: "Where would you do business?",
    size: "300px"
  },
  {
    text: "Where are you going to do business?",
    size: "350px"
  },
  {
    text: "Where do you do business?",
    size: "250px"
  },
  {
    text: "Where do you do business?",
    size: "250px"
  },
]

const optionsData = [
  {
    physical: {
      header: "I would have a physical location only",
      content: "I would work out of my home or have another local address.",
    },
    online: {
      header: "My business would be online only",
      content: "I would not have a physical location for my business.",
    },
    hybrid: {
      header: "My business would be a hybrid",
      content: "My business would operate both online and out of a physical location.",
    },
    notSure: {
      header: "I’m not sure yet",
      content: "I still haven’t decided where my business would thrive best.",
    },
  },
  {
    physical: {
      header: "I will have a physical location only",
      content: "I will work out of my home or have another local address.",
    },
    online: {
      header: "My business will be online only",
      content: "I do not have a physical location for my business.",
    },
    hybrid: {
      header: "My business will be a hybrid",
      content: "My business will operate both online and out of a physical location.",
    },
  },
  {
    physical: {
      header: "I have a physical location only",
      content: "I work out of my home or have another local address.",
    },
    online: {
      header: "My business is online only",
      content: "I do not have a physical location for my business.",
    },
    hybrid: {
      header: "My business is a hybrid",
      content: "My business operates both online and out of a physical location.",
    },
  },
  {
    physical: {
      header: "I have a physical location only",
      content: "I work out of my home or have another local address.",
    },
    online: {
      header: "My business is online only",
      content: "I do not have a physical location for my business.",
    },
    hybrid: {
      header: "My business is a hybrid",
      content: "My business operates both online and out of a physical location.",
    },
  },
];

const buttonHandler = () => {
  if (!onboardingStore.place) {
    showValidationBanner.value = true;
    return;
  } 

  router.push({ name: "InterestArea" });
};

const radioOptions = computed(() => {
  switch(onboardingStore.stage) {
    case "readyToLaunch": {
      return 1;
    };
    case "alreadyOpen": {
      return 2;
    };
    case "closingBusiness": {
      return 3;
    };
    default: {
      return 0;
    };
  }
});

</script>
