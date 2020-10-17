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
import Vue from 'vue'
import VueSlider from 'vue-slider-component'

export default Vue.component('AppSlider', {
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
<style src="vue-slider-component/theme/antd.css" lang="css"></style>
<style lang="postcss" scoped>
@import '@css/_app-partials.css';
</style>
