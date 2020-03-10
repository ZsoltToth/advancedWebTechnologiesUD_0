var count = 0;
var increase = function () {
    count = count + 1;
    console.log("increment to "+count);
}

module.exports  = {
    count : count,
    increase : increase
};
