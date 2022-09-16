<template>
  <Heading margin="0 0 8px">Use your mobile number</Heading>
  <Text margin="0 0 32px">
    Enter your mobile number to receive a verification code.
  </Text>
  <Box as="form" column @submit.prevent>
    <InputBox
      v-model="createAccStore.mobileNumber"
      type="mobile number"
      ref="mobileNumberInput"
      placeholder="(201) 123-1234"
      v-maska="'(###) ###-####'"
      margin="0 0 12px"
    />
    <Button margin="0 0 32px" @mousedown.prevent @click="handleSubmit" />
  </Box>
  <Text color="gray600" size="textSmRegular"
    >By clicking “Next,” you agree to Bizee’s
    <Link page="Terms" underline="true">Terms</Link> and
    <Link page="Privacy" underline="true">Global Privacy Statement</Link>.</Text
  >
  <Separator />
  <Text color="gray600" size="textSmRegular"
    >Already have a workspace?
    <Link
      page="SignIn"
      size="textSmSemibold"
      color="primary700"
      hover="primary600"
      >Sign in</Link
    ></Text
  >
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCreateAccountStore } from "../../../stores/createAccount";

import Heading from "../../0_atoms/Heading/VHeading.vue";
import Text from "../../0_atoms/Text/VText.vue";
import Link from "../../0_atoms/Link/VLink.vue";
import Separator from "../../0_atoms/Separator/Separator";
import Button from "../../0_atoms/Button/VButton.vue";
import InputBox from "../../1_molecules/InputBox/VInputBox.vue";
import Box from "../../0_atoms/Box/VBox.vue";

const router = useRouter();
const createAccStore = useCreateAccountStore();
const mobileNumberInput = ref(null);

const handleSubmit = () => {
  if (!mobileNumberInput.value?.handleValidation(createAccStore.mobileNumber)) {
    mobileNumberInput.value?.changeErrorVisibility(true);
    return;
  }
  
  router.push({ name: "VerifyMobile" });
};

onMounted(() => {
  createAccStore.path = "mobile";
  createAccStore.email = null;
});
</script>
