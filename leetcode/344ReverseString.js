/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    return s.split('').map((letter, i, arr) => {
        return arr[s.length- i-1]
    }).join('')
};

s1 = 'hello'

reverseString(s1)
