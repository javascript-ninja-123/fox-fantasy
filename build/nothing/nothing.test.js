'use strict';

var Nothing = require('./nothing');

test('Nothing map', function () {
  expect(Nothing(2).map(function (value) {
    return value + 2;
  }).option('nothing')).toBe('nothing');
});

test('Nothing expect', function () {
  expect(Nothing(2).inspect()).toBe('Nothing()');
});

test('Nothing compose', function () {
  var dbl = function dbl(num) {
    return num * 2;
  };
  var inc = function inc(num) {
    return num + 1;
  };
  expect(Nothing(3).compose(inc, dbl).option('nothing')).toBe('nothing');
});

test('Nothing chain', function () {
  expect(Nothing(3).chain(function (x) {
    return x + 2;
  }).option('nothing')).toBe('nothing');
});