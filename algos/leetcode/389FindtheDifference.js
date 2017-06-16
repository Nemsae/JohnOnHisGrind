/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let diff = 0
    console.log(s.charCodeAt(3))
    console.log(s.charCodeAt(4))
    for (let i = 0; i < Math.max(s.length, t.length); i++) {
        diff ^= s.charCodeAt(i)
        diff ^= t.charCodeAt(i)
    }
    return String.fromCharCode(diff)
};

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

var findTheDifference = function(s, t) {
    let sSort = s.split('').sort()
    let tSort = t.split('').sort()
    let sLen = sSort.length
    let tLen = tSort.length
    let aLen = Math.max(sLen, tLen)
    let larger, smaller
    if (sLen < tLen) {
        larger = tSort
        smaller = sSort
    } else {
        larger = sSort
        smaller = tSort
    }

    for (let i = 0; i < aLen; i++) {
        let lEle = larger[i]
        let sEle = smaller[i]

        if (sEle !== lEle) {
            return lEle
        }
    }
};
