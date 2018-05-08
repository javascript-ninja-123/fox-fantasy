//it works like either function
//will be included in Maybe
const Just = x => ({
  map:fn => Just(fn(x)),
  chain:fn => fn(x),
  compose:(...fns) => fns.reduceRight((acc,fn) => acc.map(fn), Just(x)),
  pipe:(...fns) => fns.reduce((acc,fn) => acc.map(fn), Just(x)),
  inspect:() => `Just(${x})`,
  fold:(l,r) => r(x),
  option:(r) => x
})


module.exports = Just;
