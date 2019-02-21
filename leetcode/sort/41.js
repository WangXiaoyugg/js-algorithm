// 41. 缺失的第一个正数
// https://leetcode-cn.com/problems/first-missing-positive/submissions/
var firstMissingPositive = function(nums) {
    nums = nums.filter(item => item > 0)
    if(nums.length) {
        nums.sort((a,b) => a -b);
        if(nums[0] !== 1) {
            return 1;
        } else {
            
            for(let i = 0; i < nums.length; i++) {
                if(nums[i+1] - nums[i] > 1) {
                    return nums[i] + 1;
                    break;
                }
            }
            return nums[nums.length -1 ] + 1;
        }
    } else {
        return 1;
    }
};

// 最快解法
var firstMissingPositive = function(nums) {
    const array = []
    const maxSize = nums.length
    for(let i of nums) {
        if (i > 0 && i <= maxSize ) {
            array[i] = 1
        }
    }
    
    for(let i=1; i<maxSize + 1; i++) {
        if (!array[i]) {
            return i
        }
    }
    
    return array.length ? array.length : 1
};

// 第二快
var firstMissingPositive = function(nums) {
    let array = [];
       for (let i = 0; i < nums.length; i++) {
           if(nums[i] > 0 && nums[i] <= nums.length)
               array[nums[i] - 1] = nums[i];
       }
   
    let idx = array.findIndex((val, idx) => val - idx !== 1);
    return idx === -1 ? array.length + 1 : idx + 1;
  };