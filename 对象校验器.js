const _ = require('underscore');

function always(val) {
  return function (v) {
    return val === v;
  };
}

function checker() {
  var validators = _.toArray(arguments);

  return function (obj) {
    return _.reduce(validators, function (errs, check) {
      if (check(obj)) {
        return errs;
      } else {
        return _.chain(errs).push(check.message).value();
      }
    });
  };
}

function validator(message, fun) {
  var f = function () {
    return fun.apply(fun, arguments);
  };

  f['message'] = message;

  return f;
}

var gonnaFail = checker(validator('ZOMG', always(false)));

console.log(gonnaFail(100));
