<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <DummyComponent />
    <AppButton />
    <hello-world />
    <div class="test">
      <AppSlider />
    </div>
    <AppStarRating />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DummyComponent from './components/dummycomponent/DummyComponent.vue'
import AppButton from './components/appbutton/AppButton.vue'
import HelloWorld from './components/helloworld/HelloWorld.vue'
import AppSlider from './components/appslider/AppSlider.vue'
import AppStarRating from './components/appstarrating/AppStarRating.vue'

export default defineComponent({
  name: 'App',
  components: {
    DummyComponent,
    AppButton,
    HelloWorld,
    AppSlider,
    AppStarRating
  }
})

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.test{
  .vue-slider-rail{
    background-color: blue;
  }
}
</style>
