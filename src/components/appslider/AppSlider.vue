<template>
<div :class="[$props.customClass]">
     <vue-slider
          v-model="localValue"
          :min="0"
          :max="100"
          :interval="10"
          :adsorb="true"
          :enable-cross="false"
        >
        </vue-slider>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VueSlider from 'vue-slider-component'

export default defineComponent({
  name: 'AppSlider',
  components: {
    VueSlider
  },
  data () {
    return {
      localValue: 10
    }
  },
  props: {
    customClass: {
      type: String
    }
  }
})

</script>
<style lang="css">
  @import "node_modules/vue-slider-component/theme/antd"
</style>

<style lang="postcss" scoped>
  @import "../assets/styles/css/app-partials.css";
</style>
