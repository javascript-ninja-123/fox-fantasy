'use strict';

var Safe = require('../safe/safe');
var Compose = require('../compose/compose');

var _require = require('ramda'),
    not = _require.not,
    isNil = _require.isNil;

var prop = function prop(propName, obj) {
  var isNotNil = Compose(not, isNil);
  return Safe(isNotNil, obj[propName]);
};

module.exports = prop;