<template>
<div>
    <p class="yellow" @click="test()"> I am Text Component2
      <span class="reda">Text Component 2</span>
      <!-- <VueDatePicker v-model="value"/> -->
      <vue-slider
          v-model="localValue"
          :min="1"
          :max="100"
          :adsorb="true"
        >
        </vue-slider>
    </p>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueSlider from 'vue-slider-component'

export default Vue.extend({
  name: 'Text2',
  components: {
    VueSlider
  },
  data () {
    return {
      value: new Date(),
      localValue: 10
    }
  },
  methods: {
    test () {
      console.log('called', 'test2')
    }
  }
})
</script>

<style lang="css" src="vue-slider-component/theme/antd.css"></style>
<style lang="postcss" scoped>
@import '@css/_app-partials.css';

.yellow {
    color: blue;

    .reda {
        color: $red;
    }
}

.red {
    color: green;
}
</style>
