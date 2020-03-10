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

    totalGrossPrice_Promise(products){
        return new Promise((resolve)=>{
            resolve(products.reduce((total, current)=>{
                if(!current.isTaxable){
                    return total + current.netPrice;

                }
                return total + current.netPrice * (100.0 + this.vatRate) / 100.0;
            },0));
        });
    }

    totalGrossPrice_PromiseWithError(products){
        return new Promise((resolve, reject)=>{
            resolve(products.reduce((total, current)=>{
                if(current.netPrice <= 0.0){
                    reject("Negative Price!");
                }
                if(!current.isTaxable){
                    return total + current.netPrice;

                }
                return total + current.netPrice * (100.0 + this.vatRate) / 100.0;
            },0));
        });
    }
}

module.exports = new PriceCalculator();
