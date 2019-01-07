//ES5
// escopo de função com var
function doSomething() {
  var a = 1;
  if (true) {
    var b = 2; // b é declarado dentro do if mas é visível fora
  }
  var c = a + b; // 3
}

//ES6+
//escopo de bloco com let
function doSomethingElse() {
  let a = 1
  if (true) {
    let b = 2 // b é declarado dentro do if e não é visível fora
  }
  let c = a + b // Uncaught ReferenceError: b is not defined
}

//ES5
for (var i = 0; i < 5; i++) { /* do something */ }
//ES6+
for (let j = 0; j < 5; j++) { /* do something else */ }

console.log(i); // 5
console.log(j); // Uncaught ReferenceError: j is not defined