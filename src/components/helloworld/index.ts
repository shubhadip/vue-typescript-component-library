import { App as Application } from 'vue';
import HelloWorld from './HelloWorld.vue'

import { registerComponent } from '../../utils/plugins'

const Plugin = {
  install (Vue: Application) {
    registerComponent(Vue, HelloWorld)
  }
}

// use(Plugin)

export default Plugin

export {
  HelloWorld
}
