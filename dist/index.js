"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./classes/Carro"));
var carro = new Carro_1.default("Fusca", 2);
carro.acelerar();
console.log("carro", carro.toString());
//# sourceMappingURL=index.js.map