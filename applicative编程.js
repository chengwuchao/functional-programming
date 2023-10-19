const _ = require('lodash');

var nums = [1, 2, 3, 4, 5];

function doubleAll(arr) {
  return arr.map((n) => n * 2);
}

// console.log(doubleAll(nums));

// find
var val = _.find(['a', 'b', 3, 'd'], _.isNumber);

console.log(val);

// reject
var valReject = _.reject(['a', 'b', 3, 'd'], _.isNumber);
console.log(valReject);

// 自定义 Applicative 函数
var val = _.keys({ title: 'Chthon', author: 'Anthony' });
console.log(val);

var val = _.values({ title: 'Chthon', author: 'Anthony' });
console.log(val);

// _.pickBy
var val = _.pickBy({ title: 'Chthon', name: '武超' }, (val, key) => val === 'Chthon');
console.log(val);

// omit
var val = _.omit({ a: 1, b: 2, c: 3 }, ['c']);
console.log(val);

var pickVal = _.pick({ a: 1, b: 2, c: 3 }, ['a', 'b']);
console.log(pickVal);
