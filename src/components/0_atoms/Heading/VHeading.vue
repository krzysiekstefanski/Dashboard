<template>
  <Heading
    :size="getSize.size"
    :interline="getSize.interline"
    :weight="getSize.weight"
    :spacing="getSize.spacing"
    :color="getColor"
    ><slot>{{ text }}</slot></Heading
  >
</template>

<script>
import { typography } from "../../typography";
import { checkColor } from "../../utils";
import Heading from "./Heading";

export default {
  components: { Heading },
  props: {
    text: {
      type: String,
      default: "Heading",
    },
    size: {
      type: String,
      default: "displaySmSemibold",
    },
    color: String,
  },
  setup(props) {
    const getSize = () => {
      return {
        size: typography[props.size].size,
        interline: typography[props.size].interline,
        weight: typography[props.size].weight,
        spacing: typography[props.size].spacing,
      };
    };

    const getColor = () => {
      if (props.color) {
        return checkColor(props.color);
      }
      return;
    };

    return { getSize: getSize(), getColor: getColor() };
  },
};
</script>