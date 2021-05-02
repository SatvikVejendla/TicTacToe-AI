const addFunction = require("../custom_array/function.js");

function remove(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      arr.splice(i, 1);
      return;
    }
  }
}

addFunction("remove", remove);
