import { App as Application } from 'vue';
import AppStarRating from './AppStarRating.vue'

import { registerComponent } from '../../utils/plugins'

const Plugin = {
  install (Vue: Application) {
    registerComponent(Vue, AppStarRating)
  }
}

// use(Plugin)

export default Plugin

export {
  AppStarRating
}
