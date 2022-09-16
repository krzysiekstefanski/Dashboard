<template>
  <Heading v-html="headingData[radioOptions].text" />
  <Heading v-html="headingData[radioOptions].text2" margin="0 0 48px" />
  <Box class="dropdown" column align="center" width="100%" max="480px" position="relative">
    <Box width="100%" position="relative">
      <Icon icon="search" size="20px" position="absolute" top="calc(50% - 10px)" left="12px"/>
      <Input v-model="searchInput" @keyup="keyup" @focus="showDropdownCheck" type="search" width="100%" padding="12px 16px 12px 44px" />
    </Box>
    <Box v-show="showDropdown && searchInput !== notSureText" column align="flex-start" width="100%" backgroundColor="white" borderWidth="1px" borderColor="gray200" radius="8px" position="absolute" top="66px">
      <Box column align="flex-start" width="100%" maxHeight="240px" overflow="auto">
        <Text v-for="(item, index) in naics" :key="item.id" @click="clickDropdownItem" size="textLgMedium" width="100%" hoverBackgroundColor="gray100" padding="12px" pointer>{{ item.description }}</Text>
      </Box>
      <Box v-if="naics?.length === 0" column align="flex-start" backgroundColor="gray100" padding="12px">
        <Text size="textLgSemibold" margin="0 0 12px">We can't find your industry. Don't worry! Try this:</Text>
        <Box as="ul" column align="flex-start" padding="0 0 0 24px">
          <Text as="li" size="textLgMedium" align="left" margin="0 0 8px">Use the name of the industry, then add more words</Text>
          <Text as="li" size="textLgMedium" align="left">
            Use fewer words: instead of "Lorem ipsum dolor sit amen," use "Lorem ipsum"
          </Text>
        </Box>
      </Box>
      <Separator v-if="searchInput && searchInput !== notSureText && customIndustry" margin="0" />
      <Text v-if="searchInput && searchInput !== notSureText && customIndustry" @click="clickContinue" ref="continueText" class="dropdown__continue-text" width="100%" hoverBackgroundColor="gray100"
      size="textLgMedium" padding="12px" pointer>Continue with: <Text ref="continueInputText" as="span" size="textLgBold" events="none">{{ searchInput }}</Text></Text>
      <Separator v-if="searchInput !== notSureText" margin="0" />
      <Text v-if="searchInput !== notSureText" @click="clickNotSure" size="textLgMedium" width="100%" hoverBackgroundColor="gray100"
       padding="12px" pointer>{{ notSureText }}</Text>
    </Box>
    <TextareaBox v-if="showTextarea" ref="textarea" v-model="textareaVal" margin="24px 0 0" />
  </Box>
  <ValidationBanner v-if="showValidationBanner" max="480px" ref="validationBanner" margin="24px 0 0">Enter your industry to continue.</ValidationBanner>
  <Button @click="buttonHandler" width="100%" max="320px" margin="40px 0 0" />
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useOnboardingStore } from "../../../stores/onboarding";

import Box from "../../0_atoms/Box/VBox.vue";
import Heading from "../../0_atoms/Heading/VHeading.vue";
import Icon from "../../0_atoms/Icon/VIcon.vue";
import Input from "../../0_atoms/Input/Input";
import Textarea from "../../0_atoms/Textarea/VTextarea.vue";
import Text from "../../0_atoms/Text/VText.vue";
import Link from "../../0_atoms/Link/VLink.vue";
import Separator from "../../0_atoms/Separator/Separator";
import Button from "../../0_atoms/Button/VButton.vue";
import InputBox from "../../1_molecules/InputBox/VInputBox.vue";
import TextareaBox from "../../1_molecules/TextareaBox/VTextareaBox.vue";
import ValidationBanner from "../../1_molecules/ValidationBanner/VValidationBanner.vue";
import Naics from "../../../assets/naics.json";

const router = useRouter();
const onboardingStore = useOnboardingStore();
const notSureText = "I’m not sure about my industry"
const validationBanner = ref(null);
const searchInput = ref('');
const lastClickedItem = ref(null);
const showDropdown = ref(false);
const showTextarea = ref(false);
const showValidationBanner = ref(false);
const customIndustry = ref(false);
const continueText = ref();
const continueInputText = ref();
const textarea = ref();
const textareaVal = ref('');
const naics = ref();

const headingData = [
  {
    text: "We’re here to help!",
    text2: "What industry are you looking at?"
  },
  {
    text: "Awesome!",
    text2: "What industry are you in?"
  },
  {
    text: "Awesome!",
    text2: "What industry are you in?"
  },
  {
    text: "We can help with that.",
    text2: "What industry are you in?"
  },
]

const radioOptions = computed(() => {
  switch(onboardingStore.stage) {
    case "readyToLaunch": {
      return 1;
    };
    case "alreadyOpen": {
      return 2;
    };
    case "closingBusiness": {
      return 3;
    };
    default: {
      return 0;
    };
  }
});

const showDropdownCheck = () => {
  searchInput.value?.length >= 3 
    ? showDropdown.value = true 
    : showDropdown.value = false
}

const clickDropdownItem = (e) => {
  searchInput.value = e.target.innerText;
  lastClickedItem.value = e.target.innerText;
  customIndustry.value = false;

  showTextarea.value = false;
  showDropdown.value = false;
  showValidationBanner.value = false;
}

const clickContinue = () => {
  searchInput.value = continueInputText.value.$el.innerText;
  customIndustry.value = true;

  showTextarea.value = true;
  showDropdown.value = false;
  showValidationBanner.value = false;
}

const clickNotSure = (e) => {
  searchInput.value = e.target.innerText;
  customIndustry.value = false;

  showTextarea.value = true;
  showDropdown.value = false;
  showValidationBanner.value = false;
}

const keyup = () => {
  let val = searchInput.value?.toLowerCase();
  if (val.length >= 3) {
    if (val.charAt(0) <= "9" && val.charAt(0) >= "0") {
      let arr = Naics.filter((b) => {
        let code = b.code.toString();
        return code.indexOf(val) > -1;
      });
      naics.value = arr.slice(0, 6);
    } else {
      let arr = Naics.filter((v) => {
        return v.description.toLowerCase().indexOf(val) > -1;
      });
      naics.value = arr.slice(0, 6);
    }
  }

  if (val.length >= 3) {
    showDropdown.value = true;
  } else {
    showDropdown.value = false;
    showTextarea.value = false;
  }


  if (searchInput.value === lastClickedItem.value || searchInput.value.length === 0) {
    customIndustry.value = false;
  } else {
    customIndustry.value = true;
  }

  showValidationBanner.value = false;
}

const buttonHandler = () => {
  if (searchInput.value.length <= 3) {
    showValidationBanner.value = true;
    return;
  }

  if (showTextarea.value && textareaVal.value.length < 50) {
    textarea.value?.changeErrorVisibility(true);
    return;
  }

  router.push({ name: "WorkTime" });
};

const clickOutside = (e) => {
  if (!e.target.closest(".dropdown")) {
    showDropdown.value = false;
    if (searchInput.value !== lastClickedItem.value && searchInput.value.length >= 3) {
      customIndustry.value = true;
      showTextarea.value = true;
    } else {
      customIndustry.value = false;
      showTextarea.value = false;
    }
  }
};

onMounted(() => {
  document.addEventListener("click", clickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", clickOutside);
})
</script>
