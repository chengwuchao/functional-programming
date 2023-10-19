// this的引用值，就像a的绑定，也由调用者确定
function globalThis() {
  return this;
}

console.log(globalThis.call('chengwuchao'));
