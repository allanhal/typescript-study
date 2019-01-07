//ES5
var sum = function () {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
sum(1, 2, 3, 4, 5); // 15

///ES6+
function sum(...numbers) {
  let result = 0
  numbers.forEach((number) => {
    result += number
  })
  return result
}
sum(1, 2, 3, 4, 5) // 15