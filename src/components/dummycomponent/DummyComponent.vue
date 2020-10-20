<template>
<div>
    <p class="yellow" @click="test()"> I am Dummy Component
      <span class="reda">asdasdas</span>
    </p>
    <span class="red">asdasdas</span>
    <img :src="require('../../assets/img/icons/download.jpeg')" />
    <div class="imgtest">
    </div>
</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.component('DummyComponent', {
  data () {
    return {
      text1: 'I am Text Component'
    }
  },
  props: {
    isValid: {
      type: Boolean,
      default: false
    },
    msg: {
      type: Object as PropType<{foo: string; bar: string}>
    }
  },
  methods: {
    test (): void {
      console.log('test1', this.msg.foo)
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
