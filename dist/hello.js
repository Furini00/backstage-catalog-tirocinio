"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHello = sayHello;
function sayHello(name) {
    return "Ciao, ".concat(name, "! Benvenuto in Backstage!");
}
var greeting = sayHello("Mario");
console.log(greeting);
