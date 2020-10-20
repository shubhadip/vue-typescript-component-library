import DummyComponent from './DummyComponent.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install (Vue: any) {
    registerComponent(Vue, DummyComponent)
  }
}

use(Plugin)

export default Plugin

export {
  DummyComponent
}
