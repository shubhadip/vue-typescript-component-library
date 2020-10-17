import AppDatePicker from './AppDatePicker.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install (Vue: any) {
    registerComponent(Vue, AppDatePicker)
  }
}

use(Plugin)

export default Plugin

export {
  AppDatePicker
}
