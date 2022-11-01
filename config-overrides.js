const path = require('path');

module.exports = function override(config, env) {
  //do stuff with the webpack config...

  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        '@app': path.join(__dirname, 'src'),
      },
    },
  };
};
