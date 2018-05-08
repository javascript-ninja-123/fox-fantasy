"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var curry = function curry(fn) {
  var artisy = fn.length;
  return function f1() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length >= artisy) {
      return fn.apply(undefined, args);
    } else {
      return function f2() {
        for (var _len2 = arguments.length, moreArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          moreArgs[_key2] = arguments[_key2];
        }

        var newArgs = [].concat(args, moreArgs);
        return f1.apply(undefined, _toConsumableArray(newArgs));
      };
    }
  };
};

module.exports = curry;