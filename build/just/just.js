"use strict";

//it works like either function
//will be included in Maybe
var Just = function Just(x) {
  return {
    map: function map(fn) {
      return Just(fn(x));
    },
    chain: function chain(fn) {
      return fn(x);
    },
    compose: function compose() {
      for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
        fns[_key] = arguments[_key];
      }

      return fns.reduceRight(function (acc, fn) {
        return acc.map(fn);
      }, Just(x));
    },
    pipe: function pipe() {
      for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        fns[_key2] = arguments[_key2];
      }

      return fns.reduce(function (acc, fn) {
        return acc.map(fn);
      }, Just(x));
    },
    inspect: function inspect() {
      return "Just(" + x + ")";
    },
    fold: function fold(l, r) {
      return r(x);
    },
    option: function option(r) {
      return x;
    }
  };
};

module.exports = Just;