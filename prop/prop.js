const Safe  = require('../safe/safe');
const Compose = require('../compose/compose')
const {not,isNil} = require('ramda');

const prop = (propName,obj) => {
  const isNotNil = Compose(not, isNil);
  return Safe(isNotNil,obj[propName]);
}


module.exports = prop
