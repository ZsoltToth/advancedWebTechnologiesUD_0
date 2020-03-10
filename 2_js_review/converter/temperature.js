class TemperatureConverter{

    farenheit2celsius(farenheit){
        return (farenheit - 32.0) * (5.0/9.0)
    }

    celsius2farenheit(celsius){
        return celsius * (9.0/5.0) + 32.0;
    }
}

module.exports = new TemperatureConverter();
