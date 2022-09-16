<template>
  <Box column align="center" width="100%">
    <Input
      ref="input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @keydown.tab="onTab"
      @blur="onBlur"
      @focus="changeErrorVisibility(false)"
      :type="inputType"
      :placeholder="placeholder"
    />
    <InputAlert ref="inputAlert">{{ inputError ? inputError : "" }}</InputAlert>
  </Box>
</template>

<script setup>
import { ref } from "vue";
import { computed } from "vue";

import Box from "../../0_atoms/Box/VBox.vue";
import Input from "../../0_atoms/Input/Input";
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
    // Custom type cases..
    default:
      return "text";
  }
});

const handleValidation = (data) => {
  if (props.required && !data) {
    inputError.value = `Please provide your ${props.type}`;
    return false;
  }

  if (
    props.type === "email" &&
    //!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(data)
    !/^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/.test(
      data
    )
  ) {
    inputError.value = "This email address is not in the proper format";
    return false;
  }

  if (props.type === "code" && data?.length !== 4) {
    inputError.value = "Please check the code, it seems to be incorrect";
    return false;
  }

  if (props.type === "mobile number" && data?.length !== 14) {
    inputError.value = "This mobile number is not in the proper format";
    return false;
  }

  inputError.value = null;
  return true;
};

const changeErrorVisibility = (visible) => {
  if (!input.value || !inputAlert.value) {
    return;
  }

  if (!visible) {
    input.value.$el.classList.remove("error");
    inputAlert.value.$el.style.display = "none";
  } else {
    input.value.$el.classList.add("error");
    inputAlert.value.$el.style.display = "flex";
  }
};

const onTab = (e) => {
  if (!handleValidation(e.target.value)) {
    changeErrorVisibility(true);

    return;
  }

  changeErrorVisibility(false);
  return;
};

const onBlur = (e) => {
  if (handleValidation(e.target.value)) {
    // staging
    if (!inputError.value) {
      changeErrorVisibility(false);
      return;
    }

    return;
  }
    
  changeErrorVisibility(true);
  return;
};

defineExpose({
  handleValidation,
  changeErrorVisibility,
});
</script>
