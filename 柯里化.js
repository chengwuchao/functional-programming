// 柯里化函数为每一个逻辑参数返回一个新函数
// 柯里化的操作可以概况为：1：接受一个函数；2：返回一个只接收一个参数的函数

// 向左 currying
function leftCurryDiv(n) {
  return function (d) {
    return n / d;
  };
}

// 向右 currying
function rightCurryDiv(d) {
  return function (n) {
    return n / d;
  };
}

var divide10By = leftCurryDiv(10);
console.log(divide10By(2));
