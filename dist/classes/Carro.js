"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    Carro.prototype.toString = function () {
        return "\n        modelo: " + this.modelo + "\n        numeroDePortas: " + this.numeroDePortas + "\n        velocidade: " + this.velocidade + "\n        ";
    };
    return Carro;
}());
exports.default = Carro;
//# sourceMappingURL=Carro.js.map