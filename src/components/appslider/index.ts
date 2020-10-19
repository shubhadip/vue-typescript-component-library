import { App as Application } from 'vue';
import AppSlider from './AppSlider.vue'

import { registerComponent } from '../../utils/plugins'

const Plugin = {
  install (Vue: Application) {
    registerComponent(Vue, AppSlider)
  }
}

// use(Plugin)

export default Plugin

export {
  AppSlider
}
