// 第K大元素
var findKthLargest = function(nums, k) {
    return nums.sort((a,b) => b-a)[k - 1];
};

// 利用冒泡排序每次冒泡后最右边是第K的元素
var findKthLargest = function(nums, k) {
    let len = nums.length - 1;
    for(let i= len, tmp; i > len - k; i--) {
        for(let j=0; j < i; j++) {
            
            if(nums[j+1] < nums[j]) {
                tmp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = tmp;
            }
        }
    }
    return nums[len-(k-1)]
};

// 最佳答案
var swap = function(nums,i,j) {
    var temp = nums[i];
    nums[i] = nums[j]
    nums[j] = temp;
}
var findKthLargest = function(nums, k) {
    var idx = k - 1;
    var findIndex = function(nums, l, r) {
        var rand = Math.floor(Math.random() * (r - l + 1) + l);
        swap(nums, l, rand);
        var v = nums[l],
            j = l;
        for(var i = l + 1; i <= r; i++) {
            if(nums[i] > v) {
                swap(nums, j + 1, i);
                j++
            }
        }
        swap(nums, j,l);
        return j;
    }
    var sort = function(nums, l, r) {
        if(l >= r) {
            return nums[r]
        }
        var p = findIndex(nums,l,r);
        if(p === idx) {
            return nums[p];
        } else if(p < idx) {
            return sort(nums, p + 1, r)
        } else {
            return sort(nums, l, p -1)
        }
        // sort(nums, l, p - 1)
        // sort(nums, p + 1, r)
    }
    return sort(nums, 0, nums.length - 1)
};

// 递归分治的思路
var findKthLargest = function(nums, k) {
    let rank = 1
    let num = nums[0]
    const bigger = []
    const less = []
    nums.shift()
    while(nums.length > 0) {
        const value = nums.pop()
        if (num < value) {
            bigger.push(value)
            rank++
        } else if (num >= value){
            less.push(value)
        }
    }
    if (rank === k) return num
    if (rank > k) {
        return findKthLargest(bigger, k)
    }
    else if (rank < k) {
        return findKthLargest(less, k - rank)         
    }
};