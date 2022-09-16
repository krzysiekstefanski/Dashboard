<template>
  <Box :column="true">
    <Text
      transform="uppercase"
      margin="0 0 24px"
      size="textXsSemibold"
      spacing="1px"
      :color="color.gray400"
      align="center"
    >
      {{ name }}
    </Text>
    <Box gap="16px" wrap="wrap" justify="center">
      <template v-for="tag in tags" :key="tag.name">
        <Tag ref="internalTags" :name="tag.name" :icon="tag.icon" @tagSelected="onTagSelected" />
      </template>
    </Box>
  </Box>
</template>

<script setup>
import Box from '../../0_atoms/Box/Box';
import Tag from '../../1_molecules/Tag/VTag.vue';
import Text from "../../0_atoms/Text/VText.vue";
import { color } from "../../colors";
import { ref, onMounted } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "Most Popular",
  },
  tags: {
    type: Array,
    default: [],
  },
  dataModel: {
    type: Array,
    default: [],
  },
});
const emit = defineEmits( ['selectedTagsUpdated'] );

const internalTags = ref(null);

const onTagSelected = (tagName) => {
  if (props.dataModel.includes(tagName)) {
    const i = props.dataModel.indexOf(tagName);
    props.dataModel.splice(i, 1);
    emit(
      "selectedTagsUpdated",
      JSON.parse(JSON.stringify(props.dataModel)),
    );
    return;
  }

  props.dataModel.push(tagName);
  emit(
    "selectedTagsUpdated",
    JSON.parse(JSON.stringify(props.dataModel)),
  );
};

onMounted(() => {
  for (let selectedTag of props.dataModel) {
    for (let internalTag of internalTags.value) {
      if(internalTag.props.name === selectedTag) {
        internalTag.isSelected = true;
      }
    }
  };
});
</script>
