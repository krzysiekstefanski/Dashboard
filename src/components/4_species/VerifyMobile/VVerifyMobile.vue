<template>
  <Heading margin="0 0 8px">Check your mobile number</Heading>
  <Text>
    You should receive a verification code from us at:
    <Text as="span" size="textLgSemibold">{{ createAccStore.mobileNumber }}</Text
    >.
  </Text>
  <Text margin="0 0 32px">Please enter it below.</Text>
  <Box as="form" column @submit.prevent>
    <InputBox
      ref="codeInput"
      v-model="code"
      type="code"
      placeholder="Enter code"
      margin="0 0 12px"
      v-maska="'####'"
    />
    <Button margin="0 0 24px" @mousedown.prevent @click="handleSubmit" />
  </Box>
  <BannerAlert margin="8px 0 0">
    <Text size="textSmSemibold">Can’t find your code?</Text>
    <Text size="textSmRegular" margin="0 0 12px"
      >Resend code again to your mobile.</Text
    >
    <Link
      page="CreateAccountMobile"
      size="textSmSemibold"
      color="primary700"
      hover="primary600"
      >Resend code</Link
    >
  </BannerAlert>
  <BannerAlert margin="8px 0 32px">
    <Text size="textSmSemibold" margin="0 0 12px"
      >Still having troubles?</Text
    >
    <Link
      page="CreateAccount"
      size="textSmSemibold"
      color="primary700"
      hover="primary600"
      >Try with your email once again</Link
    >
  </BannerAlert>
  <Text size="textSmRegular" color="gray600">
    Need help? Contact us at:
    <Link
      size="textSmSemibold"
      href="mailto:support@bizee.com"
      color="primary700"
      hover="primary600"
      >support@bizee.com</Link
    >
  </Text>
</template>
  
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCreateAccountStore } from "../../../stores/createAccount";
import Heading from "../../0_atoms/Heading/VHeading.vue";
import Text from "../../0_atoms/Text/VText.vue";
import Link from "../../0_atoms/Link/VLink.vue";
import Button from "../../0_atoms/Button/VButton.vue";
import BannerAlert from "../../0_atoms/BannerAlert/VBannerAlert.vue";
import InputBox from "../../1_molecules/InputBox/VInputBox.vue";
import Box from "../../0_atoms/Box/VBox.vue";
  
const router = useRouter();
const codeInput = ref(null);
const code = ref(null);
const createAccStore = useCreateAccountStore();

const handleSubmit = () => {
  if (!codeInput.value?.handleValidation(code.value)) {
    codeInput.value?.changeErrorVisibility(true);
    return;
  }
  
  router.push({ name: "CreateWorkspace" });
};
</script>
