var promise = new Promise((resolve)=>{
    console.log("In the promise");
    resolve();
});

console.log("Hello");
promise.then(()=>{console.log("promise is done")});
console.log("Bye bye");
