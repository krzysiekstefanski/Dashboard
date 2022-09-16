<template>
  <Box gap="24px" justify="center" wrap="wrap" width="100%">
    <template v-for="(value, key) in options" :key="option">
      <RadioBox
        width="calc(50% - 12px)"
        :class="{
          checked: modelValue === key || selectedOption === key
        }"
        :checked="modelValue === key || selectedOption === key"
        :header="value.header"
        :content="value.content"
        :name="name"
        :value="key"
        :id="key"
        v-model="selectedOption"
        @input="$emit('update:modelValue', key)"
      />
    </template>
  </Box>
</template>


<script setup>
import { ref, onMounted} from "vue";

import Box from "../../0_atoms/Box/VBox.vue";
import RadioBox from '../../1_molecules/RadioBox/VRadioBox.vue';

const props = defineProps({
  name: String,
  options: Object,
  modelValue: String,
});

onMounted(() => {
  console.log(props.options)
})

const selectedOption = ref(null);
</script>
