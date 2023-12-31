const _ = require('underscore');

function dispatch() {
  var funs = _.toArray(arguments);

  var size = funs.length;

  return function (target) {
    var ret = undefined;
    var args = _.rest(arguments);

    for (var funIndex = 0; funIndex < size; funIndex++) {
      var fun = funs[funIndex];
      ret = fun.apply(fun, [target].concat(args));
      if (ret != null) {
        return ret;
      }
    }

    return ret;
  };
}
