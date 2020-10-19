/* eslint-disable */
import {App as Application,  Component } from 'vue';
// export const use = (plugin: any) => {
    
//     if (typeof window !== 'undefined' && window?.Vue) {
//         window?.Vue?.use(plugin)
//     }
// }

export const registerComponent = (instance: Application, component: any) => {
    instance.component(component.name, component)
}

export const registerComponentProgrammatic = (instance: Application, property: string, component : Component) => {
    if (!instance.config.globalProperties.$test) instance.config.globalProperties.$test = {}
    instance.config.globalProperties.$test[property] = component
}
