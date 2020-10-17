<template>
<div :class="[$props.customClass]">
    <VueDatePicker v-model="localValue"/>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as DatePicker from '@mathieustan/vue-datepicker'

const { VueDatePicker } = DatePicker

export default Vue.component('AppDatePicker', {
  name: 'AppSlider',
  components: {
    VueDatePicker
  },
  data () {
    return {
      localValue: new Date()
    }
  },
  props: {
    customClass: {
      type: String
    }
  }
})

</script>
<style src="@mathieustan/vue-datepicker/dist/vue-datepicker.min.css" lang="css"></style>
<style lang="postcss" scoped>
@import '@css/_app-partials.css';
</style>
