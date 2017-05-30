// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
//
// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let len = nums.length
    let a = b = 0

    for (let i = 0; i < len; i++) {
        let num = nums[i]
        if (i % 2 === 0) {
            a = Math.max(a+num, b)
        } else {
            b = Math.max(b+num, a)
        }
    }

    return Math.max(a, b)

};
