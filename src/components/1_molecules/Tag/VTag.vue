<template>
  <Tag @click="onTagSelect" :selected="isSelected">
    <Box justify="space-between" gap="12px">
      <Icon :icon="icon" size="24px" :color="color.primary700" />
      {{ name }}
    </Box>
  </Tag>
</template>

<script setup>
import { ref } from "vue";
import Tag from './Tag';
import Icon from "../../0_atoms/Icon/VIcon.vue";
import { color } from "../../colors";
import Box from "../../0_atoms/Box/Box";

const props = defineProps({
  name: {
    type: String,
    default: "Tag"
  },
  icon: {
    type: String,
    default: "building",
  },
});

const emit = defineEmits([ "tagSelected", ] );

const isSelected = ref(false);

const onTagSelect = () => {
  isSelected.value ? isSelected.value = false : isSelected.value = true;
  emit("tagSelected", props.name);
};

defineExpose({ isSelected, props });
</script>
