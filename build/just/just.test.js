'use strict';

var Just = require('./just');

test('Just map', function () {
  expect(Just(2).map(function (value) {
    return value + 2;
  }).option('nothing')).toBe(4);
});

test('Just expect', function () {
  expect(Just(2).inspect()).toBe('Just(' + 2 + ')');
});

test('Just compose', function () {
  var dbl = function dbl(num) {
    return num * 2;
  };
  var inc = function inc(num) {
    return num + 1;
  };
  expect(Just(3).compose(inc, dbl).option([])).toBe(7);
});

test('Jest chain', function () {
  expect(Just(3).chain(function (x) {
    return x + 2;
  })).toBe(5);
});