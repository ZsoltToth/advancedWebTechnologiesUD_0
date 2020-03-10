/*
Lets create a simple counter which can be increased or reset.
 */
const counter = require('./counter');
const counter2 = require('./counter');


console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());

console.log(counter2.increase());
console.log(counter2.increase());
console.log(counter2.increase());
