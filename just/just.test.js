const Just = require('./just');


test('Just map', () => {
  expect(Just(2).map(value => value +2).option('nothing')).toBe(4)
})


test('Just expect', () => {
  expect(Just(2).inspect()).toBe(`Just(${2})`)
})


test('Just compose', () => {
  const dbl = num => num * 2;
  const inc = num => num + 1;
  expect(
    Just(3)
    .compose(inc,dbl)
    .option([])
  )
  .toBe(7)
})

test('Jest chain', () => {
  expect(
    Just(3)
    .chain(x => x + 2)
  )
  .toBe(5)
})
