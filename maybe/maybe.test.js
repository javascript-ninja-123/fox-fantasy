const Maybe = require('./maybe');
const Safe = require('../safe/safe');
const Prop = require('../prop/prop');




test('test 1 success case', () => {
  const mockData = {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    }
  const isNum = num => typeof num === 'number';
  const idIsNumSafe = Safe(isNum,mockData.id)
  const result = idIsNumSafe
  .map(id => id.toString())
  .option('id not found')

  expect(result).toBe('1')
})

test('test 2 fail case', () => {
  const mockData = {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    }
  const isNum = num => typeof num === 'string';
  const idIsNumSafe = Safe(isNum,mockData.id)
  const result = idIsNumSafe
  .map(id => Number(id))
  .option('id not found')

  expect(result).toBe('id not found')
})
