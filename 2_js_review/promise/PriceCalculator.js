class PriceCalculator{
    constructor(){
        this.vatRate = 27.0;
    }

    totalGrossPrice_BlockingImpl(products,callback){
        callback("Implement Me!");
    }
}

module.exports = new PriceCalculator();
