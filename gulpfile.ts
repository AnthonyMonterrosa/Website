const { series, parallel } = require('gulp');
const execute = require('child_process').exec;

const defaultStreams = callback => {
  return (stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    callback();
  }
}

const bundle = async callback => {
  await execute('npx webpack --config webpack.config.js', defaultStreams(callback));
}

const run = async callback => {
  await execute('node distribution/bundle.js', defaultStreams(callback));
}

const build = series(bundle);

exports.build = build;
exports.default = series(build, run);