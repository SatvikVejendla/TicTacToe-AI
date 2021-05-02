function addFunction(name, func, extra_1, extra_2) {
  Object.defineProperty(Array.prototype, name, {
    value: function (extra_1, extra_2) {
      func(this, extra_1, extra_2);
    },
  });
}

module.exports = addFunction;
