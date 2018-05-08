'use strict';

var Safe = require('./safe');

test('safe check => success (Just)', function () {
  var isNum = function isNum(num) {
    return typeof num === 'number';
  };
  var isNumSafe = Safe(isNum);
  expect(isNumSafe(2).map(function (num) {
    return num + 2;
  }).option(0)).toBe(4);
});

test('safe check => fail (Nothing)', function () {
  var isNum = function isNum(num) {
    return typeof num === 'number';
  };
  var isNumSafe = Safe(isNum);
  expect(isNumSafe('a').map(function (num) {
    return num + 2;
  }).option(0)).toBe(0);
});