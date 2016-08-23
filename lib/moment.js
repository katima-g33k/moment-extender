(function (root, factory) {
  'use strict';

  const r = root;

  if (typeof define === 'function' && define.amd) {
    define(['moment'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('moment'));
  } else {
    r.returnExports = factory(r.moment);
  }
}(this, (moment) => {
  'use strict';

  const m = moment;

  Object.keys(momentFunctions).forEach((key) => {
    m.fn[key] = momentFunctions[key];
  });

  return m;
}));
