import Vue from 'vue';

declare function install(vue: typeof Vue, options?: any): void;

declare const _default: {
  install: typeof install;
};

export declare type AppButton =  {
  isValid: boolean
}

export declare type AppStarRating =  {
  maxRating: Number
  showCounter: Boolean
  value: Number
  size: String
  readOnly: Boolean
}

export default _default;
