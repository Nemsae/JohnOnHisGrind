var singleNumber = function(nums) {
    let ans;
    let obj = {};

    nums.forEach(num => {
      if (obj[num]) {
        delete obj[num]
      } else {
        obj[num] = true;
      }
    });

    ans = Object.keys(obj)
    return Number(ans[0]);

};

num1 = [1,2,3,4]
singleNumber(num1)
