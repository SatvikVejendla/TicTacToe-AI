function addStaticVariable(name, func) {
  Object.defineProperty(Array.prototype, name, {
    get() {
      return func(this);
    },
  });
}

module.exports = addStaticVariable;
