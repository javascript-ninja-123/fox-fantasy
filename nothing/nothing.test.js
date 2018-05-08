const Nothing = require('./nothing');


test('Nothing map', () => {
  expect(Nothing(2).map(value => value +2).option('nothing')).toBe('nothing')
})


test('Nothing expect', () => {
  expect(Nothing(2).inspect()).toBe(`Nothing()`)
})


test('Nothing compose', () => {
  const dbl = num => num * 2;
  const inc = num => num + 1;
  expect(
    Nothing(3)
    .compose(inc,dbl)
    .option('nothing')
  )
  .toBe('nothing')
})

test('Nothing chain', () => {
  expect(
    Nothing(3)
    .chain(x => x + 2)
    .option('nothing')
  )
  .toBe('nothing')
})
