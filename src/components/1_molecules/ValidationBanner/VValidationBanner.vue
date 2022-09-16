<template>
  <Box
    align="center"
    width="100%"
    backgroundColor="error50"
    borderWidth="1px"
    borderColor="error700"
    radius="8px"
    padding="12px 48px 12px 12px"
    :margin="margin"
  >
    <Icon icon="warning" color="error700" size="24px" margin="0 12px 0 0" />

    <Text size="textSmMedium" align="center" color="error700" margin="0 auto">
      <slot>You need to select one of the options to continue.</slot>
    </Text>
  </Box>
</template>

<script setup>
import Box from "../../0_atoms/Box/VBox.vue";
import Icon from "../../0_atoms/Icon/VIcon.vue";
import Text from "../../0_atoms/Text/VText.vue";

defineProps({
  margin: String,
});
</script>