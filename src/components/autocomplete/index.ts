import AutoComplete from './AutoComplete.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install (Vue: any) {
    registerComponent(Vue, AutoComplete)
  }
}

use(Plugin)

export default Plugin

export {
  AutoComplete
}
