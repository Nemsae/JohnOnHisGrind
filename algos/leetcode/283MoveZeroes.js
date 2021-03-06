// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
//
// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let max = nums.length
    let temp;
    let flag = false;

    for (let i = 0; i<max; i++) {
        if (flag) {
            i = temp;
            flag = false;
        }

        let num = nums[i]

        if (num === 0) {
            let x = nums.splice(i, 1)[0]
            nums.push(x)
            temp = i;
            flag = true;
            max--
        }

    }
};
