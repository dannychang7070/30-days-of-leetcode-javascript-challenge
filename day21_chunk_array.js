/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let cur_size = 0;
    const res = [];
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
        cur_size++;
        temp.push(arr[i]);
        if (cur_size === size) {
            res.push(temp);
            temp.length = 0;
            cur_size = 0;
        }
    }
    if (cur_size !== 0 && temp.length !== 0) {
        res.push(temp);
    }
    return res;
};