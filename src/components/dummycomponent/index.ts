import { App as Application } from 'vue';
import DummyComponent from './DummyComponent.vue'

import { registerComponent } from '../../utils/plugins'

const Plugin = {
  install (vue: Application) {
    registerComponent(vue, DummyComponent)
  }
}

// use(Plugin)

export default Plugin

export {
  DummyComponent
}
