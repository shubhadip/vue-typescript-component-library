<template>
<div>
    <button @click="test()">Button</button>
    <div v-if="showMe">
      You Clicked Me
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import format from 'date-fns/format'

interface RData {
  text1: string;
  showMe: boolean;
}
export default defineComponent({
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
      console.log(format(new Date(), 'yyyy-mm-dd'))
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
