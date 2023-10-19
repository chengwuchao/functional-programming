// 闭包例子
const _ = require('lodash');

function whatWasTheLocal() {
  var captured = 'Oh hai';

  return function () {
    return 'The local was: ' + captured;
  };
}

var reportLocal = whatWasTheLocal();

console.log(reportLocal());

// 捕获函数
function createScaleFunction(factor) {
  return function (v) {
    return _.map(v, function (n) {
      return n * factor;
    });
  };
}

var scale10 = createScaleFunction(10);

console.log(scale10([1, 2, 3]));

// makeAdder
function makeAdder(factor) {
  return function (free) {
    return free + factor;
  };
}

const add10 = makeAdder(10);

console.log(add10(100));

// 捕获函数
function averageDamp(Fun) {
  return function (n) {
    return Math.max(n, Fun(n));
  };
}

var averageSq = averageDamp(function (n) {
  return n * n;
});
console.log(averageSq(10));

// 谓词反转
function complement(pred) {
  return function () {
    return !pred.apply(null, _.toArray(arguments));
  };
}
function isEven(n) {
  return n % 2 === 0;
}

var isOdd = complement(isEven);
logFn(isOdd, [2]);
logFn(isOdd, [413]);

// 把捕获的数据作为私有数据，块级作用域
var pingpong = (function () {
  var privateVal = 0;

  return {
    inc: function (n) {
      return (privateVal += n);
    },
    dec: function (n) {
      return (privateVal -= n);
    },
  };
})();

console.log('pingpong.inc(10) => ', pingpong.inc(10));
console.log('pingpong.dec(7) => ', pingpong.dec(7));
