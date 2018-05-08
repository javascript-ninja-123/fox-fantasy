const Pipe = require('./pipe');



test('test pipe', () => {
  const addNum = x => x + 2;
  const multiplyNum = x => x * 2;

  expect(
    Pipe(
      addNum,
      multiplyNum
    )(2)
  ).toBe(8)

})
