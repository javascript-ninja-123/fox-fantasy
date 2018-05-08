'use strict';

var Pipe = require('./pipe');

test('test pipe', function () {
  var addNum = function addNum(x) {
    return x + 2;
  };
  var multiplyNum = function multiplyNum(x) {
    return x * 2;
  };

  expect(Pipe(addNum, multiplyNum)(2)).toBe(8);
});