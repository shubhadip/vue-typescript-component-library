import AppStarRating from './AppStarRating.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install (Vue: any) {
    registerComponent(Vue, AppStarRating)
  }
}

use(Plugin)

export default Plugin

export {
  AppStarRating
}
