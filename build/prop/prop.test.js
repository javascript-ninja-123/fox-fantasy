'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Prop = require('./prop');
var axios = require('axios');

var fetchData = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var _ref2, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios(url);

          case 2:
            _ref2 = _context.sent;
            data = _ref2.data;
            return _context.abrupt('return', data);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function fetchData(_x) {
    return _ref.apply(this, arguments);
  };
}();

test('test prop', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  var post, result;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetchData('https://jsonplaceholder.typicode.com/posts/1');

        case 2:
          post = _context2.sent;
          result = Prop('title', post).map(function (title) {
            return title.toLowerCase();
          }).option('nothing');

          expect(result).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');

        case 5:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, undefined);
})));

test('test prop2', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  var post, toUpper, firstString, result;
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return fetchData('https://jsonplaceholder.typicode.com/posts/1');

        case 2:
          post = _context3.sent;

          toUpper = function toUpper(str) {
            return str.toUpperCase();
          };

          firstString = function firstString(str) {
            return str[0];
          };

          result = Prop('title', post).compose(firstString, toUpper).option('nothing');

          expect(result).toBe('S');

        case 7:
        case 'end':
          return _context3.stop();
      }
    }
  }, _callee3, undefined);
})));