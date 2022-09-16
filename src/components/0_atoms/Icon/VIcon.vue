<template>
  <Icon :size="size">
    <Logo v-if="icon === 'logo'" :color="color" :hoverColor="hoverColor" />
    <Warning
      v-if="icon === 'warning'"
      :color="color"
      :hoverColor="hoverColor"
    />
    <Building v-if="icon === 'building'"
      :color="color"
      :hoverColor="hoverColor"
    />
    <DocumentForward v-if="icon === 'documentForward'"
      :color="color"
      :hoverColor="hoverColor"
    />
    <Envelope v-if="icon === 'envelope'"
      :color="color"
      :hoverColor="hoverColor"
    />
    <ShieldSecurity v-if="icon === 'shieldSecurity'"
      :color="color"
      :hoverColor="hoverColor"
    />
    <Medal v-if="icon === 'medal'"
      :color="color"
      :hoverColor="hoverColor"
    />
    <DiscountCircle v-if="icon === 'discountCircle'"
      :color="color"
      :hoverColor="hoverColor"
    />
    <DollarCircle v-if="icon === 'dollarCircle'"
      :color="color"
      :hoverColor="hoverColor"
    />
    <Wallet v-if="icon === 'wallet'"
      :color="color"
      :hoverColor="hoverColor"
    />
    <Card v-if="icon === 'card'"
      :color="color"
      :hoverColor="hoverColor"
    />
    <MagicStar v-if="icon === 'magicStar'"
      :color="color"
      :hoverColor="hoverColor"
    />
    <DirectBox v-if="icon === 'directBox'"
      :color="color"
      :hoverColor="hoverColor"
    />
    <Trademark v-if="icon === 'trademark'"
      :color="color"
      :hoverColor="hoverColor"
    />
    <ChartSquare v-if="icon === 'chartSquare'"
      :color="color"
      :hoverColor="hoverColor"
    />
    <Receipt v-if="icon === 'receipt'"
      :color="color"
      :hoverColor="hoverColor"
    />
    <LocationTick v-if="icon === 'locationTick'"
      :color="color"
      :hoverColor="hoverColor"
    />
    <Monitor v-if="icon === 'monitor'"
      :color="color"
      :hoverColor="hoverColor"
    />
    <Search v-if="icon === 'search'"
      :color="color"
      :hoverColor="hoverColor"
    />
  </Icon>
</template>

<script>
import Icon from "./Icon";
import Logo from "./Icons/Logo.vue";
import Warning from "./Icons/Warning.vue";
import Building from "./Icons/Building.vue";
import DocumentForward from "./Icons/DocumentForward.vue";
import Envelope from "./Icons/Envelope.vue";
import ShieldSecurity from "./Icons/ShieldSecurity.vue";
import Medal from "./Icons/Medal.vue";
import DiscountCircle from "./Icons/DiscountCircle.vue";
import DollarCircle from "./Icons/DollarCircle.vue";
import Wallet from "./Icons/Wallet.vue";
import MagicStar from "./Icons/MagicStar.vue";
import DirectBox from "./Icons/DirectBox.vue";
import Trademark from "./Icons/Trademark.vue";
import ChartSquare from "./Icons/ChartSquare.vue";
import Receipt from "./Icons/Receipt.vue";
import LocationTick from "./Icons/LocationTick.vue";
import Monitor from "./Icons/Monitor.vue";
import Card from "./Icons/Card.vue";
import Search from "./Icons/Search.vue";

export default {
  name: "icon",
  components: {
    Icon,
    Logo,
    Warning,
    Building,
    DocumentForward,
    Envelope,
    ShieldSecurity,
    Medal,
    DiscountCircle,
    DollarCircle,
    Wallet,
    MagicStar,
    DirectBox,
    Trademark,
    ChartSquare,
    Receipt,
    LocationTick,
    Monitor,
    Card,
    Search,
},
  props: {
    icon: {
      type: String,
      default: `logo`,
    },
    size: {
      type: String,
      default: "64px",
    },
  },
};
</script>
