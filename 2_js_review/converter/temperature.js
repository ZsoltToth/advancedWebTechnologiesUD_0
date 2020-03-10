class TemperatureConverter{

    farenheit2celsius(farenheit, callback){
        var celsius =  (farenheit - 32.0) * (5.0/9.0)
        callback(celsius);
    }

    celsius2farenheit(celsius, callback){
        var farenheit =  celsius * (9.0/5.0) + 32.0;
        callback(farenheit);
    }
}

module.exports = new TemperatureConverter();
