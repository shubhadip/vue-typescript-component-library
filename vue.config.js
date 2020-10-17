const path = require('path');
module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('postcss').oneOf(type)))
  }
};
// Add postcss partials styles automatically to
// vue components
const addStyleResource = (rule) => {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      // keep single directory here
      patterns: path.resolve(__dirname, './src/assets/styles/css/_app-partials.css'),
    });
};
