'use strict';

var Compose = require('./compose');

test('test compose', function () {
  var addNum = function addNum(x) {
    return x + 2;
  };
  var multiplyNum = function multiplyNum(x) {
    return x * 2;
  };

  expect(Compose(addNum, multiplyNum)(2)).toBe(6);
});