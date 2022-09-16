<template>
  <VueTelInput
    v-model="mobileNumber"
    mode="international"
    defaultCountry="US"
    :inputOptions="{
      maxlength: iso2Data[iso2].maxLength,
      placeholder: iso2Data[iso2].placeholder,
    }"
    @country-changed="onCountryChange"
  />
</template>

<script setup>
import { ref } from "vue";

import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

const mobileNumber = ref(null);
const iso2 = ref("US");

const iso2Data = {
  PL: {
    maxLength: 15,
    placeholder: "123 123 123",
  },
  US: {
    maxLength: 15,
    placeholder: "(201) 123 1234",
  },
  GB: {
    maxLength: 15,
    placeholder: "1234 123456"
  },
};

const onCountryChange = (countryObject) => {
  iso2.value = countryObject.iso2;
};
</script>
