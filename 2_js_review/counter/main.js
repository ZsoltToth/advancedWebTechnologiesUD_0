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

var counter_obj = new counter.cls();
console.log(counter_obj.count);
counter_obj.increase();
console.log(counter_obj.count);
counter_obj.increase();
console.log(counter_obj.count);
counter_obj.decrease();
console.log(counter_obj.count);
counter_obj.decrease();
console.log(counter_obj.count);
counter_obj.decrease();
console.log(counter_obj.count);
