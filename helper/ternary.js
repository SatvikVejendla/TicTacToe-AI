function ternary(str) {
  let reg = /X/g;
  str = str.replace(reg, 1);

  reg = /O/g;
  str = str.replace(reg, 2);

  reg = /-/g;
  str = str.replace(reg, 0);

  return str;
}

module.exports = ternary;
