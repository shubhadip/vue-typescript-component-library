import { App as Application} from 'vue'
import AppButton from './AppButton.vue'

import { registerComponent } from '../../utils/plugins'

const Plugin = {
  install (App:  Application) {
    registerComponent(App, AppButton)
  }
}

// use(Plugin)

export default Plugin

export {
  AppButton
}
