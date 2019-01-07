// ES5
var multiply = function (x, y) {
    y = y | 1;
    return x * y;
};

multiply(3, 2); // 6
multiply(3); // 3

// ES6+
const multiply = (x, y = 1) => {
    return x * y
}

multiply(3, 2) // 6
multiply(3) // 3