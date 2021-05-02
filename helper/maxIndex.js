const addStaticVariable = require("../custom_array/staticVar.js");

function maxIndex(arr) {
  return arr.reduce((acc, item) => (item > acc ? item : acc), arr[0]);
}
addStaticVariable("maxIndex", maxIndex);
