import { App as Application } from 'vue';
import AutoComplete from './AutoComplete.vue'

import { registerComponent } from '../../utils/plugins'

const Plugin = {
  install (Vue: Application) {
    registerComponent(Vue, AutoComplete)
  }
}

// use(Plugin)

export default Plugin

export {
  AutoComplete
}
