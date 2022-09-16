<template>
  <Textarea :size="getSize.size" :interline="getSize.interline" :weight="getSize.weight" :spacing="getSize.spacing" :maxlength="maxLength" :rows="rows" :placeholder="placeholder"
    
    ><slot>{{ text }}</slot></Textarea
  >
</template>

<script setup>
import { computed } from "vue";
import Textarea from "./Textarea";
import { typography } from "../../typography";
// import { checkColor } from "../../utils";

const props = defineProps({
    text: {
        type: String,
        default: "",
    },
    size: {
        type: String,
        default: "textLgMedium",
    },
    placeholder: {
        type: String,
        default: "Please share with us a short descirption of your business. ",
    },
     rows: {
         type: Number,
         default: 5
     },
     maxLength: {
         type: Number,
         default: 200
     }
});

const getSize = computed(() => {
  return {
    size: typography[props.size].size,
    interline: typography[props.size].interline,
    weight: typography[props.size].weight,
    spacing: typography[props.size].spacing,
  };
});

// const getColor = computed(() => {
//   if (props.color) {
//     return checkColor(props.color);
//   }

//   return;
// });
</script>
