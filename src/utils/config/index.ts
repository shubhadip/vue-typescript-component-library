/* eslint-disable */
import Vue from 'vue';
let config = {}

export { config as default }

export const setOptions = (options: object): void => { config = options }

export const setVueInstance = (instance: typeof Vue) : void => { VueInstance = instance }

export let VueInstance : typeof Vue
