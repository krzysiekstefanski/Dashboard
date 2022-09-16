<template>
  <Heading margin="0 0 8px">Get started for free</Heading>
  <Text>
    Incorporate, grow and learn more about being a successful entrepreneur.
  </Text>
  <Text margin="0 0 32px"> No credit card required.</Text>
  <Box as="form" column @submit.prevent>
    <InputBox
      v-model="createAccStore.email"
      type="email"
      ref="emailInput"
      placeholder="Enter your email to begin"
      margin="0 0 12px"
    />
    <Button margin="0 0 32px" @mousedown.prevent @click="handleSubmit" />
  </Box>
  <Text color="gray600" size="textSmRegular"
    >By clicking “Next,” you agree to Bizee’s
    <Link page="Terms" underline="true">Terms</Link> and
    <Link page="Privacy" underline="true">Global Privacy Statement</Link
    >.</Text
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
const emailInput = ref(null);
const createAccStore = useCreateAccountStore();

const handleSubmit = () => {
  if (!emailInput.value?.handleValidation(createAccStore.email)) {
    emailInput.value?.changeErrorVisibility(true);
    return;
  }

  router.push({ name: "Verify" });
};

onMounted(() => {
  createAccStore.path = "email";
  createAccStore.mobileNumber = null;
});
</script>
