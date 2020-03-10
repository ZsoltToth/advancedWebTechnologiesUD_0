var counter_closure = (function () {
    var count = 0;
    return function(){ count++; return count;};
});

class Counter {
    constructor(){
        this.count =  0;
    }

    increase(){
        this.count++
    }

    decrease(){
        this.count--;
    }

}

module.exports  = {
    closure : counter_closure,
    cls : Counter
};
