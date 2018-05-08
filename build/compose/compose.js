'use strict';

var Curry = require('../curry/curry');

var compose = function compose() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (value) {
    return fns.reduceRight(function (acc, fn) {
      return fn(acc);
    }, value);
  };
};

module.exports = Curry(compose);