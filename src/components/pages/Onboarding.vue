<template>
  <Box
    height="100vh"
    width="100%"
    borderColor="grey3"
    wrap="nowrap"
    overflow="auto"
    backgroundColor="gray50"
  >
    <Box
      display="block"
      width="100%"
      paddingXS="32px 0 0"
      padding="48px 0 0"
      paddingSMH="80px 0 0"
      paddingMDH="40px 0 0"
      paddingLGH="80px 0 0"
    >
      <Box
        position="relative"
        column
        align="center"
        width="100%"
        :max="interestArea ? 'auto' : '720px'"
        margin="0 auto"
        :padding="interestArea ? '0 0 32px calc(100vw - 100%)' : '0 0 65px'"
      >
        <Icon margin="0 0 3.75vh" />
        <StageSelection v-if="stageSelection" />
        <IndustrySearch v-if="industrySearch" />
        <WorkTime v-if="workTime" />
        <BusinessPlace v-if="businessPlace" />
        <InterestArea  v-if="interestArea" />
      </Box>
    </Box>
  </Box>
</template>
<script>
import Box from "../0_atoms/Box/VBox.vue";
import Icon from "../0_atoms/Icon/VIcon.vue";
import Image from "../0_atoms/Image/Image";
import StageSelection from "../4_species/StageSelection/StageSelection.vue";
import IndustrySearch from "../4_species/IndustrySearch/IndustrySearch.vue";
import WorkTime from "../4_species/WorkTime/WorkTime.vue";
import BusinessPlace from "../4_species/BusinessPlace/BusinessPlace.vue";
import InterestArea from "../4_species/InterestArea/VInterestArea.vue";

export default {
  components: {
    Box,
    Icon,
    Image,
    StageSelection,
    IndustrySearch,
    WorkTime,
    BusinessPlace,
    InterestArea,
  },
  props: {
    stageSelection: Boolean,
    industrySearch: Boolean,
    workTime: Boolean,
    businessPlace: Boolean,
    interestArea: Boolean,
  },
};
</script>