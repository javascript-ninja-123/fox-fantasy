'use strict';

var Just = require('../just/just');
var Nothing = require('../nothing/nothing');
var Curry = require('../curry/curry');

var _safe = function _safe(predicate, val) {
  return predicate(val) ? Just(val) : Nothing();
};

var safe = Curry(_safe);

module.exports = safe;