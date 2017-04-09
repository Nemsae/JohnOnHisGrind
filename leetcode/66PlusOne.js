// Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
//
// You may assume the integer do not contain any leading zero, except the number 0 itself.
//
// The digits are stored such that the most significant digit is at the head of the list.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits[0] === 0) {
        return [1]
    }

    let carry = 0
    let arr = []

    for (let i = digits.length - 1; i>=0; i--) {
        let digit = digits[i]
        if (i === digits.length - 1) {
            if (digit + 1 > 9) {
                carry = 1
                arr.unshift(0)
            } else {
                arr.unshift(digit + 1)
            }
        } else if (carry) {
            if (digit + carry > 9) {
                carry = 1
                arr.unshift(0)
            } else {
                arr.unshift(digit + carry)
                carry = 0
            }
        } else {
            arr.unshift(digit)
        }
    }

    if (carry) {
        arr.unshift(1)
    }

    return arr
};
