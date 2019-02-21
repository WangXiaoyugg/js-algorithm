// 最大值冒泡到右侧
const bubbleSort = (arr) => {
    // 最外层控制遍历次数
    for(let i=arr.length - 1; i>0; i--) {
        // 内层两两比较大小
        for(let j=0;j<i;j++) {
            if(arr[j+1] < arr[j]) {
                let tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([1,9,4,3]))

 