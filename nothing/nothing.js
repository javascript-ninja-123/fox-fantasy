//it works like either function
//will be included in Maybe
const Nothing = () => ({
  map:fn => Nothing(),
  chain:fn => Nothing(),
  compose:(...fns) => fns.reduceRight((acc,fn) => acc.map(fn), Nothing()),
  pipe:(...fns) => fns.reduce((acc,fn) => acc.map(fn), Nothing()),
  inspect:() => `Nothing()`,
  fold:(l,r) => l(x),
  option:(r) => r
})


module.exports = Nothing;
