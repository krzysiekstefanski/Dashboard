<template>
  <BannerAlert>
    <slot />
  </BannerAlert>
</template>

<script>
import BannerAlert from "./BannerAlert";
export default {
  components: {
    BannerAlert,
  },
};
</script>
