var promise = new Promise((resolve)=>{
    console.log("In the promise");
    resolve();
});

console.log("Hello");
promise.then(()=>{console.log("promise is done")});
console.log("Bye bye");

const priceCalculator = require('./PriceCalculator');

var products = [
    {
        name : "Apple",
        netPrice : 5,
        isTaxable : true
    },
    {
        name : "Banana",
        netPrice : 7,
        isTaxable : true
    },
    {
        name : "Chocolate",
        netPrice : 10,
        isTaxable : false
    },
    {
        name : "Dakr Chocolate",
        netPrice : -10,
        isTaxable : false
    }

];


priceCalculator.totalGrossPrice_Promise(products)
    .then((totalGrossPrice)=>{
    console.log("%f <------ Promise",totalGrossPrice)
});
priceCalculator.totalGrossPrice_BlockingImpl(products, (totalGrossPrice)=>{
    console.log("%f <------ Callback",totalGrossPrice)
});

priceCalculator.totalGrossPrice_PromiseWithError(products)
    .then((totalGrossPrice)=>{
        console.log("%f <------ Promise With Error Handling",totalGrossPrice)
    })
    .catch((reason)=>{
       console.log("Error: %s", reason);
    });
