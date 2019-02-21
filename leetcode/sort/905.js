// 905. 按奇偶排序数组
// https://leetcode-cn.com/problems/sort-array-by-parity/submissions/


var sortArrayByParity = function(A) {
    let evenArr = [], oddArr = [];
    for(let i = 0; i < A.length; i++) {
        if(A[i] % 2 == 0) {
            evenArr.push(A[i])
        } else {
            oddArr.push(A[i])
        }
    }
    
    return evenArr.concat(oddArr)
};

// 最佳速度
var sortArrayByParity = function(A) {
    var newArr = [];
    A.forEach(item => {
       if (item % 2) {
           newArr.push(item); // 奇数放在后面
       } else {
           newArr.unshift(item); //偶数添加到前面
       }
    });
    return newArr;
};

// 函数式写法
var sortArrayByParity = function(A) {
    var odd = A.filter(function(i){ return i%2!==0 });
    var even = A.filter(function(i){ return i%2===0 });
    return even.concat(odd);
};