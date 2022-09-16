<template>
  <Text
    :size="getSize.size"
    :interline="getSize.interline"
    :weight="getSize.weight"
    :spacing="getSize.spacing"
    :color="handleColor(color)"
    :pointer="pointer"
    :hoverBackgroundColor="handleColor(hoverBackgroundColor)"
    ><slot>{{ text }}</slot></Text
  >
</template>

<script setup>
import { computed } from "vue";

import Text from "./Text";
import { typography } from "../../typography";
import { checkColor } from "../../utils";

const props = defineProps({
  text: {
    type: String,
    default: "Text",
  },
  size: {
    type: String,
    default: "textLgRegular",
  },
  color: String,
  hoverBackgroundColor: String,
  pointer: Boolean,
});

const getSize = computed(() => {
  return {
    size: typography[props.size].size,
    interline: typography[props.size].interline,
    weight: typography[props.size].weight,
    spacing: typography[props.size].spacing,
  };
});

const handleColor = (color) => {
  if (color) {
    return checkColor(color);
  }
  return;
}
</script>
