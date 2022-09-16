<template>
  <Box
    justify="space-between"
    height="100vh"
    width="100%"
    borderColor="grey3"
    wrap="nowrap"
    overflow="auto"
  >
    <Box
      display="block"
      width="66.66%"
      backgroundColor="white"
      paddingXS="32px 0 0"
      padding="48px 0 0"
      paddingSMH="80px 0 0"
      paddingMDH="40px 0 0"
      paddingLGH="80px 0 0"
    >
      <Box column width="100%" max="320px" margin="0 auto" padding="0 0 72px">
        <Icon 
        marginXS="0 0 32px"
        margin="0 0 48px"
        marginSMH="0 0 80px"
        marginMDH="0 0 40px"
        marginLGH="0 0 80px"/>
        <!-- <Box class="content-wrapper" column width="100%"> -->
        <CreateAccount v-if="gettingStarted" />
        <CreateAccountMobile v-if="gettingStartedMobile" />
        <Verify v-if="confirmEmail" />
        <VerifyMobile v-if="confirmMobile" />
        <MoreInfo v-if="createWorkspace" />
        <!-- </Box> -->
      </Box>
    </Box>
    <Box class="side-image" width="33.34%" position="sticky" top="0">
      <Image src="src/assets/images/placeholder.png" width="100%" />
    </Box>
  </Box>
</template>
<script setup>
import Box from "../0_atoms/Box/VBox.vue";
import Icon from "../0_atoms/Icon/VIcon.vue";
import Image from "../0_atoms/Image/Image";
import CreateAccount from "../4_species/CreateAccount/VCreateAccount.vue";
import CreateAccountMobile from "../4_species/CreateAccountMobile/CreateAccountMobile.vue";
import Verify from "../4_species/Verify/VVerify.vue";
import VerifyMobile from "../4_species/VerifyMobile/VVerifyMobile.vue";
import MoreInfo from "../4_species/MoreInfo/VMoreInfo.vue";

defineProps({
  gettingStarted: Boolean,
  gettingStartedMobile: Boolean,
  confirmEmail: Boolean,
  confirmMobile: Boolean,
  createWorkspace: Boolean,
});
</script>
