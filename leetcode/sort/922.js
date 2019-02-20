// 922. 按奇偶排序数组 II
// https://leetcode-cn.com/problems/sort-array-by-parity-ii/submissions/

var sortArrayByParityII = function(A) {
    A.sort((a,b) => a -b)
    let odd = 1,even = 0, result=[];
    for(let i=0;i<A.length; i++) {
        if(A[i] % 2 == 0) {
            result[even] = A[i]
            even += 2
        } else {
            result[odd] = A[i]
            odd += 2
        }
    }
    
    return result;
};

// 声明两个数组保存奇偶数，一次O(n)遍历
var sortArrayByParityII = function(A) {
    var arr = [];
    var brr = [];
    var j = 0;
    var m= 0;
    for(var i = 0; i<A.length; i++){
        if(A[i] %2 == 0){
            arr[j] = A[i];
            j++;
        }else{
            brr[m]= A[i];
            m++;
        }
         
        
    }

    for(var k =1;k<=A.length/2;k++){
        A[2*k-2] = arr[k-1]; // A 中的偶数索引 对应 偶数数组
        A[2*k-1] = brr[k-1]; // A 中的技术索引 对应 奇数数组
    }
   return A;
};

console.log(sortArrayByParityII([4,2,5,7])) // [4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。