const Curry = require('../curry/curry')

const pipe = (...fns) => value =>  fns.reduce((acc,fn) => fn(acc), value);


module.exports = Curry(pipe);
