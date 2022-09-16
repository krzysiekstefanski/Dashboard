<template>
  <Radio
    type="radio"
    :checked="checked"
  />
</template>

<script setup>
import Radio from "./Radio";

defineProps({ checked: { type: Boolean, default: false, } });
</script>