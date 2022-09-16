<template>
  <Box
    :column="column"
    :backgroundColor="handleColor(backgroundColor)"
    :borderColor="handleColor(borderColor)"
    ><slot
  /></Box>
</template>

<script setup>
import Box from "./Box";
import { checkColor } from "../../utils";

const handleColor = (color) => {
  if (color) {
    return checkColor(color);
  }
  return;
};

const props = defineProps({
  column: Boolean,
  backgroundColor: String,
  borderColor: String,
});
</script>