<template>
  <Box width="100%" direction="column" center="true">
    <Textarea ref="input" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
    <InputAlert ref="inputAlert">Your industry description needs to be between 50 and 200 characters.</InputAlert>
  </Box>
</template>

<script setup>
import { ref } from "vue";
import { computed } from "vue";

import Box from "../../0_atoms/Box/Box";
import Textarea from "../../0_atoms/Textarea/VTextarea.vue";
import InputAlert from "../../0_atoms/InputAlert/InputAlert";

const props = defineProps({
  type: String,
  placeholder: String,
  modelValue: String,
  required: {
    type: Boolean,
    default: true,
  },
});

const input = ref(null);
const inputAlert = ref(null);
const inputError = ref(null);

const inputType = computed(() => {
  switch (props.type) {
    // Custom type cases...
    default:
      return "text";
  }
});

const changeErrorVisibility = (visible) => {
  if (!visible) {
    input.value.$el.classList.remove("error");
    inputAlert.value.$el.style.display = "none";
  } else {
    input.value.$el.classList.add("error");
    inputAlert.value.$el.style.display = "flex";
  }
};

defineExpose({
  changeErrorVisibility,
});
</script>
