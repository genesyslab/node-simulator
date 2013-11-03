
module.exports = process.env.SIMULATOR_COV
  ? require('./lib-cov/simulator')
  : require('./lib/simulator');
