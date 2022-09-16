<template>
  <Button>
    <slot>{{ text }}</slot>
  </Button>
</template>

<script setup>
import Button from "./Button";

defineProps({
  text: {
    type: String,
    default: "Next",
  },
});
</script>
