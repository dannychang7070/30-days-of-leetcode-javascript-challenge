/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const returnObject = {};
    for(let i = 0; i < this.length; i++) {
        const key = fn(this[i]);
        if (key in returnObject){
            returnObject[key].push(this[i]);
        } else {
            returnObject[key] = [this[i]];
        }
    }
    return returnObject;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */