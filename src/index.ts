/* eslint-disable */
import * as components from './components'

import  {setVueInstance } from './utils/config/'
import { use } from './utils/plugins/'

const vueslib = {
    install(instance : any) {
        setVueInstance(instance)
        for (let componentKey in components) {
            instance.use((components as any)[componentKey])
        }
    }
}

use(vueslib)

export default vueslib

export * from './components'