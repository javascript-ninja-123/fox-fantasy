const Curry = require('../curry/curry')

const compose = (...fns) => value =>  fns.reduceRight((acc,fn) => fn(acc), value);


module.exports = Curry(compose);
