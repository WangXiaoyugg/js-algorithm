// 最大间距 https://leetcode-cn.com/problems/maximum-gap/submissions/
var maximumGap = function(nums) {
    let len = nums.length;
    if(len < 2) return 0
    nums.sort((a,b) => a -b);
    let max = 0;
    for(let i=0; i< len;i++) {
        let diff = nums[i+1] - nums[i]
        if(diff > max) {
            max = diff
        }
    }
    return max
    
};