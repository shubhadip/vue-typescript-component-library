import Text2 from './Text2.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install (Vue: any) {
    registerComponent(Vue, Text2)
  }
}

use(Plugin)

export default Plugin

export {
  Text2
}
