import AppButton from './AppButton.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install (Vue: any) {
    registerComponent(Vue, AppButton)
  }
}

use(Plugin)

export default Plugin

export {
  AppButton
}
