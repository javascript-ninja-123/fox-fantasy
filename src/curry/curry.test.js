const curry = require('./curry');



test('curry works', () => {
  const addNums = (a,b) => a + b
  expect(
    curry(addNums)(2)(3)
  ).toBe(5)
})


test('curry works 2', () => {
  const multipleNum = (a,b,c) => a * b * c;
  expect(
    curry(multipleNum)(2)(3,4)
  ).toBe(24)
})

//omit argument if the length of injected arugments are bigger than expected arguments
test('curry works 2', () => {
  const multipleNum = (a,b,c) => a * b * c;
  expect(
    curry(multipleNum)(2,3)(4,4)
  ).toBe(24)
})
