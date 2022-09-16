<template>
  <Heading margin="0 0 8px">Create your workspace</Heading>
  <Text margin="0 0 32px">
    Add your information below to finish creating your workspace. Get ready for your business to flourish.
  </Text>
  <Box as="form" :column="true" @submit.prevent>
    <InputBox
      type="first name"
      ref="firstNameInput"
      placeholder="First Name"
      margin="0 0 12px"
      v-model="createAccStore.firstname"
    />
    <InputBox
      type="last name"
      ref="lastNameInput"
      placeholder="Last Name"
      margin="0 0 12px"
      v-model="createAccStore.lastname"
    />
    <InputBox
      ref="mobileNumberInput"
      type="mobile number"
      margin="0 0 12px"
      placeholder="(201) 123-1234"
      v-maska="'(###) ###-####'"
      v-model="createAccStore.mobileNumber"
      v-if="createAccStore.path === 'email'"
    />
    <InputBox
      ref="emailInput"
      type="email"
      margin="0 0 12px"
      placeholder="Email Address"
      v-model="createAccStore.email"
      v-if="createAccStore.path === 'mobile'"
    />
    <Button margin="0 0 32px" text="Customize My Workspace" @mousedown.prevent @click="handleSubmit" />
  </Box>
  <Text color="gray600" size="textSmRegular"
    >By clicking “Customize My Workspace,” you agree to Bizee’s
    <Link page="Terms" underline="true">Terms</Link> and
    <Link page="Privacy" underline="true">Global Privacy Statement</Link
    >.</Text
  >
</template>

<script setup>
import { ref } from "vue";

import Heading from "../../0_atoms/Heading/VHeading.vue";
import Text from "../../0_atoms/Text/VText.vue";
import Link from "../../0_atoms/Link/VLink.vue";
import Button from "../../0_atoms/Button/VButton.vue";
import InputBox from "../../1_molecules/InputBox/VInputBox.vue"; 
import Box from "../../0_atoms/Box/VBox.vue";

import { useRouter } from "vue-router";
import { useCreateAccountStore } from "../../../stores/createAccount";

const createAccStore = useCreateAccountStore();
const firstNameInput = ref(null);
const lastNameInput = ref(null);
const mobileNumberInput = ref(null);
const emailInput = ref(null);
const router = useRouter();

const inputValidationStatus = ref(true);

const handleSubmit = () => {
  inputValidationStatus.value = true;

  if (!firstNameInput.value?.handleValidation(createAccStore.firstname)) {
    firstNameInput.value?.changeErrorVisibility(true);
    inputValidationStatus.value = false;
  }

  if (!lastNameInput.value?.handleValidation(createAccStore.lastname)) {
    lastNameInput.value?.changeErrorVisibility(true);
    inputValidationStatus.value = false;
  }

  if(
    createAccStore.path === "email" &&
    !mobileNumberInput.value?.handleValidation(createAccStore.mobileNumber)
  ) {
    mobileNumberInput.value?.changeErrorVisibility(true);
    inputValidationStatus.value = false;
  }

  if(
    createAccStore.path === "mobile" &&
    !emailInput.value?.handleValidation(createAccStore.email)
  ) {
    emailInput.value?.changeErrorVisibility(true);
    inputValidationStatus.value = false;
  }
  
  if (!inputValidationStatus.value) {
    return;
  }

  router.push({ name: "StageSelection" });
};
</script>
