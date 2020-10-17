<template>
<div>
    <p class="yellow" @click="test()"> I am Text Component
      <span class="reda">asdasdas</span>
    </p>
    <span class="red">asdasdas</span>
    <img :src="require('../../assets/img/icons/download.jpeg')" />
    <div class="imgtest">
    </div>
</div>
</template>

<script lang="ts">

export default {
  name: 'Text1',
  data () {
    return {
      text1: 'I am Text Component'
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
      console.log('test1')
    }
  }
}
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
