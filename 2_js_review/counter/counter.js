var increase = (function () {
    var count = 0;
    return function(){ count++; return count;};
})();

module.exports  = {
    increase : increase
};
