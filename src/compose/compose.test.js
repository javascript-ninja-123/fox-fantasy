const Compose = require('./compose');



test('test compose', () => {
  const addNum = x => x + 2;
  const multiplyNum = x => x * 2;

  expect(
    Compose(
      addNum,
      multiplyNum
    )(2)
  ).toBe(6)

})
