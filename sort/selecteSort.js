const selectSort = (arr) => {
    for(let i=0, len=arr.length; i < len; i++) {
        let min = arr[i];
        for(let j = i+1; j < len; j++) {
            if(arr[j] < min) {
                let c = min;
                min = arr[j];
                arr[j] = c;
            } 
        }
        arr[i] = min;
    }
    return arr;
}

console.log(selectSort([1,9,5,4]));