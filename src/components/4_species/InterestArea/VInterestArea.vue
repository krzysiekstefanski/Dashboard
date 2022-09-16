<template>
  <Box position="absolute" top="303px" right="11px">
    <FewCategories />
  </Box>
  <Box :column="true" align="center" max="952px">
    <Heading max="512px" margin="0 0 48px">What are you interested in learning about right now?</Heading>
    <TagGroup margin="0 0 24px" :tags="mostPopularTags" :dataModel="onboardingStore.mostPopularTags" />
    <TagGroup name="Recommended" :tags="recommendedTags"
      :dataModel="onboardingStore.recommendedTags" />
    <ValidationBanner v-if="showValidationBanner" ref="validationBanner" margin="24px 0 0" max="712px">
      You need to select one or more of the options to continue.
    </ValidationBanner>
    <Button text="Take Me To My Workspace" @click="handleSubmit" margin="40px 0 0" />
  </Box>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useOnboardingStore } from "../../../stores/onboarding";

import Heading from "../../0_atoms/Heading/VHeading.vue";
import TagGroup from "../../2_cells/TagGroup/VTagGroup.vue";
import Button from "../../0_atoms/Button/VButton.vue";
import Box from "../../0_atoms/Box/Box";
import FewCategories from "../../0_atoms/Icon/Icons/FewCategories.vue";
import ValidationBanner from "../../1_molecules/ValidationBanner/VValidationBanner.vue";

import mostPopularTags from "./mostPopularTags";
import recommendedTags from "./recommendedTags";

const onboardingStore = useOnboardingStore();
const router = useRouter();
const showValidationBanner = ref(false);
const validationBanner = ref(null);

const handleSubmit = () => {
  if (
    onboardingStore.mostPopularTags?.length === 0 &&
    onboardingStore.recommendedTags?.length === 0
  ) {
    showValidationBanner.value = true;
    return;
  } 

  router.push({ name: "CreateAccount" });
};
</script>
