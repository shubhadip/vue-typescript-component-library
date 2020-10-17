/* eslint-disable */
import Vue, { Component } from 'vue';
export const use = (plugin: any) => {
    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(plugin)
    }
}

export const registerComponent = (instance: typeof Vue, component: any) => {
    instance.component(component.name, component)
}

export const registerComponentProgrammatic = (instance: typeof Vue, property: string, component : Component) => {
    if (!instance.prototype.$test) instance.prototype.$test = {}
    instance.prototype.$test[property] = component
}
