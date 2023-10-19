// 函数是一等公民，因为它可以去任何它可以去的地方，就像值一样

// 函数与数字一样可以存储为变量
var fortytwo = function () {
  return 42;
};

// 函数可以与数字一样作为对象的成员变量
var fortytwos = [
  32,
  function () {
    return 42;
  },
];

// 函数与数字一样，可以作为对象的成员变量

var fortytwos = {
  number: 42,
  fun: function () {
    return 42;
  },
};

// 函数与数字一样可以在使用时直接创建出来
42 +
  (function () {
    return 42;
  })();

// 函数与数字一样可以被传递给另外一个函数
function weirAdd(n, f) {
  return n + f();
}

// 函数与数字一样可以被另外一个函数返回
return 42;
return function () {
  return 42;
};
