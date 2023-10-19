// 以一个函数作为参数
const _ = require('lodash');

const maxVal = _.max([1, 2, 3, 4, 5]);

console.log(maxVal);

var people = [
  { name: 'Fred', age: 65 },
  { name: 'Lucy', age: 36 },
];

const maxAgePeople = _.max(people, function (p) {
  return p.age;
});

console.log(maxAgePeople);

// function finder 查找函数
function finder(valueFn, bestFn, coll) {
  return coll.reduce(function (best, current) {
    var bestValue = valueFn(best);
    var currentVal = valueFn(current);
    return bestValue === bestFn(bestValue, currentVal) ? best : current;
  });
}

function best(fun, coll) {
  return coll.reduce(function (x, y) {
    return fun(x, y) ? x : y;
  });
}

console.log(finder(_.identity, Math.max, [1, 3, 2, 4, 5, 9]));
console.log(
  best(
    function (x, y) {
      return x > y;
    },
    [1, 2, 3, 4, 9, 232],
  ),
);

// repeat 函数
function repeat(times, value) {
  return _.map(_.range(times), function () {
    return value;
  });
}

console.log(repeat(10, 'Major'));

// 生成唯一字符串的函数
function uniqueString(len) {
  return Math.random().toString(36).substring(2, len);
}

console.log(uniqueString(10));

function makeUniqueStringFunction(start) {
  var counter = start;
  return function (prefix) {
    return [prefix, counter++].join('');
  };
}

var uniqueStringFn = makeUniqueStringFunction(0);

console.log(uniqueStringFn('wuchao'));

console.log(uniqueStringFn('wuchao'));

console.log(uniqueStringFn('wuchao'));

// 防止不存在的函数： fnull

var nums = [1, 2, 3, null, 5];
var res = nums.reduce(function (total, n) {
  return total * n;
});
console.log(res);

console.log(Array.prototype.slice.call([1, 3, 4, 5, 6], 1));

function fnull(fun) {
  var defaults = Array.prototype.slice.call(arguments, 1);
  return function () {
    var args = _.map(arguments, function (e, i) {
      return e != null ? e : defaults[i];
    });

    return fun.apply(null, args);
  };
}

var safeMult = fnull(
  function (total, n) {
    return total * n;
  },
  1,
  1,
);

console.log(_.reduce(nums, safeMult));
