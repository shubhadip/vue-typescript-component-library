import AppSlider from './AppSlider.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install (Vue: any) {
    registerComponent(Vue, AppSlider)
  }
}

use(Plugin)

export default Plugin

export {
  AppSlider
}
