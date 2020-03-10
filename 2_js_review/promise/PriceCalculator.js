class PriceCalculator{
    constructor(){
        this.vatRate = 27.0;
    }

    totalGrossPrice_BlockingImpl(products,callback){
        callback(products.reduce((total, current)=>{
            if(!current.isTaxable){
                return total + current.netPrice;

            }
            return total + current.netPrice * (100.0 + this.vatRate) / 100.0;
        },0));
    }
}

module.exports = new PriceCalculator();
