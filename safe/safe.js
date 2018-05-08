const Just  = require('../just/just');
const Nothing = require('../nothing/nothing');
const Curry = require('../curry/curry');

const _safe = (predicate,val) =>
predicate(val) ? Just(val) : Nothing();

const safe = Curry(_safe);

module.exports = safe;
