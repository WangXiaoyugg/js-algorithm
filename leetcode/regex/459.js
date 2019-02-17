// leet code 459重复的子字符串
// https://leetcode-cn.com/problems/repeated-substring-pattern/

/**
 * 常见的解决思路即尝试所有可能的子字符串
 * */

var repeatedSubstringPattern = (s) => {
    var reg = /^([a-z]+)\1+$/
    return reg.test(s)
}

/**
 * 是否能拆成n个重复的子串。那么既然能拆分成多个子串，
 * 那么每个子串的长度肯定不能大于原字符串长度的一半，那么我们可以从原字符串长度的一半遍历到1，
 * 如果当前长度能被总长度整除，
 * 说明可以分成若干个子字符串，我们将这些子字符串拼接起来看跟原字符串是否相等。
 * */
var repeatedSubstringPattern2 = (s) => {
    let len = s.length;
    let half = Math.floor(len / 2)
    for(i = half; i > 0; i--) {
        if(len % i === 0) {
            let count = len / i;
            let str = ''
            for(let j=0;j<count;j++) {
                str += s.slice(0,i)
            }
            if(str === s) return true
        }
    }
    return false;
}

var repeatedSubstringPattern3 = (s) => {
    return (s+s).slice(1,-1).indexOf(s) >= 0;    
}

console.log(repeatedSubstringPattern2('abab')) // True
console.log(repeatedSubstringPattern2('aba')) // False
console.log(repeatedSubstringPattern2('abcabcabcabc')) // True

