var counter = (function () {
    var count = 0;
    return function(){ count++; return count;};
})

module.exports  = {
    closure : counter
};
