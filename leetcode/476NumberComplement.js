/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let bin = num.toString(2)
    let len = bin.length

    let ones = ''
    while (len) {
        ones += '1'
        len--
    }

    return num ^ parseInt(ones, 2)
};
