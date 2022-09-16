<template>
  <RadioBox :for="id">
    <Box column>
      <Text size="textLgSemibold" margin="0 0 4px 0">
        {{ header }}
      </Text>
      <Text size="textSmRegular">
        {{ content }}
      </Text>
    </Box>
    <Radio
      ref="radio"
      :name="name"
      :id="id"
      :value="value"
      :checked="checked"
      pointerEvents="none"
    />
  </RadioBox>
</template>

<script setup>
import RadioBox from "./RadioBox";
import Box from "../../0_atoms/Box/VBox.vue";
import Radio from "../../0_atoms/Radio/VRadio.vue";
import Text from "../../0_atoms/Text/VText.vue";

const props = defineProps({
  name: {
    type: String,
    default: "Default",
  },
  id: {
    type: String,
    default: "Option 1",
  },
  value: {
    type: String,
    default: "Option 1",
  },
  checked: {
    type: Boolean,
    default: false,
  },
  header: {
    type: String,
    default: "Header",
  },
  content: {
    type: String,
    default: "Content",
  },
});
</script>
