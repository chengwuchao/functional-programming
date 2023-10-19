// myLength 递归的正确描述
// 如果数组是空的，那么它的长度是零
// 对数组的其余部分，添加一个结果到 myLength
const _ = require('underscore');

function myLength(arr) {
  if (_.isEmpty(arr)) {
    return 0;
  }

  return 1 + myLength(_.rest(arr));
}

console.log(myLength([1, 2, 3, 4]));

function cycle(times, arr) {
  if (times <= 0) {
    return [];
  } else {
    return arr.concat(cycle(times - 1, arr));
  }
}

console.log(cycle(2, [1, 2, 3]));

// 编写自递归函数时，规则如下
// 1、知道什么时候停止
// 2、决定怎么算一个步骤
// 3、把问题分解成一个步骤和一个较小的问题

var influences = [
  ['Lisp', 'Smalltalk'],
  ['Lisp', 'Scheme'],
  ['Smalltalk', 'Self'],
  ['Scheme', 'Lua'],
  ['Self', 'Lua'],
  ['Self', 'JavaScript'],
];

function nexts(graph, node) {
  if (_.isEmpty(graph)) return [];

  var pair = _.first(graph);
  var from = _.first(pair);
  var to = pair[1];
  var more = _.rest(graph);

  if (_.isEqual(node, from)) {
    return [to].concat(nexts(more, node));
  } else {
    return nexts(more, node);
  }
}

console.log(nexts(influences, 'Self'));
