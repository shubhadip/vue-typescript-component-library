import Text1 from './Text1.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install (Vue: any) {
    registerComponent(Vue, Text1)
  }
}

use(Plugin)

export default Plugin

export {
  Text1
}
