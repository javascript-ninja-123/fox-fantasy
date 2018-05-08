'use strict';

var Maybe = require('./maybe');
var Safe = require('../safe/safe');
var Prop = require('../prop/prop');

test('test 1 success case', function () {
  var mockData = {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
  };
  var isNum = function isNum(num) {
    return typeof num === 'number';
  };
  var idIsNumSafe = Safe(isNum, mockData.id);
  var result = idIsNumSafe.map(function (id) {
    return id.toString();
  }).option('id not found');

  expect(result).toBe('1');
});

test('test 2 fail case', function () {
  var mockData = {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
  };
  var isNum = function isNum(num) {
    return typeof num === 'string';
  };
  var idIsNumSafe = Safe(isNum, mockData.id);
  var result = idIsNumSafe.map(function (id) {
    return Number(id);
  }).option('id not found');

  expect(result).toBe('id not found');
});