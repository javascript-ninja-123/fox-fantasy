const Safe  = require('./safe');


test('safe check => success (Just)', () => {
    const isNum = num => typeof num === 'number';
    const isNumSafe = Safe(isNum)
    expect(
      isNumSafe(2)
      .map(num => num +2)
      .option(0)
    ).toBe(4)
})

test('safe check => fail (Nothing)', () => {
    const isNum = num => typeof num === 'number';
    const isNumSafe = Safe(isNum)
    expect(
      isNumSafe('a')
      .map(num => num +2)
      .option(0)
    ).toBe(0)
})
