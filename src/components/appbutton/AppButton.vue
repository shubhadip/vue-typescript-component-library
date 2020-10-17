<template>
<div>
    <button @click="test()">Button</button>
    <div v-if="showMe">
      You Clicked Me
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

interface RData {
  text1: string;
  showMe: boolean;
}
export default Vue.component('AppButton', {
  name: 'Button',
  data (): RData {
    return {
      text1: 'I am Button Component2',
      showMe: false
    }
  },
  props: {
    isValid: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    test (): void {
      this.showMe = !this.showMe
    }
  }
})
</script>

<style lang="postcss" scoped>
@import '@css/_app-partials.css';

.yellow {
    color: red;

    .reda {
        color: $black;
    }
}

.red {
    color: green;
}

.imgtest {
    background-image: url('../../assets/img/icons/star-half.svg');
    background-size: 100%;
    width: 100px;
    height: 100px;
}
</style>
