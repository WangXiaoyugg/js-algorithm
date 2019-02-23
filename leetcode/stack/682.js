//https://leetcode-cn.com/problems/baseball-game/submissions/
// 628 棒球比赛

var callPoints = function(ops) {
    let s = [];
    let sum = 0;
    for(let i = 0; i <ops.length; i++) {
        let str = ops[i]
        let score = 0;
        if(str === 'C') {
            sum -= s.pop();
        } else {
            if(str === '+') { 
                score = s[s.length - 1] + s[s.length -2]
            } else if (str === 'D') {
                score = s[s.length -1 ] * 2;
            } else {
                score = str  - 0; // 转换成数字
            }
            s.push(score)
            sum += score;
        }
    }
    return sum;
}

console.log(callPoints(["5","2","C","D","+"])); // 30