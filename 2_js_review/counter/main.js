/*
Lets create a simple counter which can be increased or reset.
 */
const counter = require('./counter');

var counter_closure1 = counter.closure();
var counter_closure2 = counter.closure();

console.log(counter_closure1());
console.log(counter_closure1());
console.log(counter_closure1());

console.log(counter_closure2());
console.log(counter_closure2());
console.log(counter_closure2());
