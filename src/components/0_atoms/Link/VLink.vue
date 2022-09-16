<template>
  <Link
    @mousedown.prevent
    @click="$router.push({ name: page })"
    :size="getSize.size"
    :interline="getSize.interline"
    :weight="getSize.weight"
    :spacing="getSize.spacing"
    :color="getColor(color)"
    :hover="getColor(hover)"
    :underline="underline"
    ><slot>{{ text }}</slot></Link
  >
</template>

<script>
import { typography } from "../../typography";
import { checkColor } from "../../utils";
import Link from "./Link";

export default {
  components: { Link },
  props: {
    text: {
      type: String,
      default: "Link",
    },
    page: {
      type: String,
    },
    size: {
      type: String,
    },
    color: String,
    hover: String,
    underline: Boolean,
  },
  setup(props) {
    const getSize = () => {
      if (props.size) {
        return {
          size: typography[props.size].size,
          interline: typography[props.size].interline,
          weight: typography[props.size].weight,
          spacing: typography[props.size].spacing,
        };
      }
      return {
        size: "inherit",
        interline: "inherit",
        weight: "inherit",
        spacing: "inherit",
      };
    };

    const getColor = (color) => {
      if (color) {
        return checkColor(color);
      }
      return;
    };

    return { getSize: getSize(), getColor };
  },
};
</script>