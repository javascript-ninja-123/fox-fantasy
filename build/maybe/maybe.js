'use strict';

var Just = require('../just/just');
var Nothing = require('../nothing/nothing');

var maybe = {
  Just: Just,
  Nothing: Nothing
};

module.exports = maybe;