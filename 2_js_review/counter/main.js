/*
Lets create a simple counter which can be increased or reset.
 */

const counter = require('./counter');

console.log(counter.count);
counter.increase()
console.log(counter.count);
counter.increase()
console.log(counter.count);
counter.increase()
