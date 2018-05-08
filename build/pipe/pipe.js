'use strict';

var Curry = require('../curry/curry');

var pipe = function pipe() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (value) {
    return fns.reduce(function (acc, fn) {
      return fn(acc);
    }, value);
  };
};

module.exports = Curry(pipe);