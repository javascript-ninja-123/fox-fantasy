
# Install

```shell
$ npm install --save fox-fantasy
```

```javascript
//node.js env

const {maybe,pipe} = require('fox-fantasy');
```

```javascript
//es2015 module && front-end cli

import {maybe,pipe} from 'fox-fantasy';
```

# Usuage

```javascript
import {maybe} from 'fox-fantasy';

const {Just, Nothing} = maybe;

const isNumber = n => typeof n === 'number';
const isNumberMaybe = n => isNumber(n) ? Just(n) : Nothing();

const result = isNumberMaybe(5)
//use map or compose
.map(number => number + 5)
//option is to unfold Just or Nothing and return value
//it takes one arugment
//if it fails, it is gonna return this arugment
.option(0)

//result = 10
console.log(result)
```


```javascript
import {curry} from 'fox-fantasy'

const addNumbers = (a,b,c,d) => a + b + c + d;

const curryAddNumbers = curry(addNumbers);

//result = 10
console.log(
  curryAddNumbers(1)(2,3)(4)
)
```

```javascript
import {compose,pipe} from 'fox-fantasy'

const string = 'sung'
const toUpper = str => str.toUpperCase();
const scream = str => `${str}!`


//result = SUNG!
const result = compose(
  scream,
  toUpper //toUpper will trigger first
)(string)

//result = SUNG!
const result = pipe(
  scream, //scream will trigger first
  toUpper
)(string)

```


```javascript
//safe
//succes => Just()
//fail => Nothing()
const {safe} = 'fox-fantasy';

const isNum = n => typeof n === 'number';
const safeNumber = safe(isNum, 5)

//result 10
safeNumber
.map(x => x +5)
.option(0)

```

```javascript
const {prop} = 'fox-fantasy';
//prop  === safe(isnotUndefined, value)

const mockData = {
  user:'user1',
  age:70,
  job:'python developer'
}
//checking whether there is age or not
const propForMockData = prop('age', mockData)

const result = propForMockData.option('age is not a key')

//result = 70
console.log(
  result
)

//checking whether there is age or not
const propForMockData = prop('pet', mockData)

const result = propForMockData.option('pet is not a key')

//result = 'pet is not a key'
console.log(
  result
)


```
