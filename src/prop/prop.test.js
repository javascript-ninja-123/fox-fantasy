const Prop = require('./prop');
const axios  = require('axios');

const fetchData = async (url) => {
  const {data} = await axios(url);
  return data
}

test('test prop', async () => {
  const post = await fetchData('https://jsonplaceholder.typicode.com/posts/1');
  const result = Prop('title',post).map(title => title.toLowerCase()).option('nothing')
  expect(result).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
})

test('test prop2', async () => {
  const post = await fetchData('https://jsonplaceholder.typicode.com/posts/1');
  const toUpper = str => str.toUpperCase()
  const firstString = str => str[0]
  const result = Prop('title',post).compose(firstString,toUpper).option('nothing')
  expect(result).toBe('S')
})
