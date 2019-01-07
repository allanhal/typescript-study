// ES5
function Widget() {
    var button = document.getElementById('button');
    button.addEventListener('click', function () {
        this.doSomething(); // o 'this' não aponta para Widget como esperado e provocará um erro.
    });
}

// ES6+
function Widget() {
    const button = document.getElementById('button')
    button.addEventListener('click', () => {
        this.doSomething() // o 'this' aponta para Widget e não provocará nenhum erro.
    })
}