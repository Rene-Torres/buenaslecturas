const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.DATABASE,
  },
  default: {
    SECRET: 'SECRETVALUE',
    DATABASE: process.env.DATABASE,
  },
};

exports.get = function get(env) {
  return config[env] || config.default;
};
