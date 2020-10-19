import Vue from 'vue';

declare function install(vue: typeof Vue, options?: any): void;

declare const _default: {
  install: typeof install;
};

export default _default;

export interface AppButton {
  isValid: boolean
}

export interface AppStarRating {
  maxRating: Number
  showCounter: Boolean
  value: Number
  size: String
  readOnly: Boolean
}