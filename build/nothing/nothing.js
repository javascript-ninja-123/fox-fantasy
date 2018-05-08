"use strict";

//it works like either function
//will be included in Maybe
var Nothing = function Nothing() {
  return {
    map: function map(fn) {
      return Nothing();
    },
    chain: function chain(fn) {
      return Nothing();
    },
    compose: function compose() {
      for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
        fns[_key] = arguments[_key];
      }

      return fns.reduceRight(function (acc, fn) {
        return acc.map(fn);
      }, Nothing());
    },
    pipe: function pipe() {
      for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        fns[_key2] = arguments[_key2];
      }

      return fns.reduce(function (acc, fn) {
        return acc.map(fn);
      }, Nothing());
    },
    inspect: function inspect() {
      return "Nothing()";
    },
    fold: function fold(l, r) {
      return l(x);
    },
    option: function option(r) {
      return r;
    }
  };
};

module.exports = Nothing;