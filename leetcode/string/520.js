// 检测大写字母
// https://leetcode-cn.com/problems/detect-capital/submissions/

var detectCapitalUse = function(word) {
    return /^([A-Z]+)$|^([a-z]+)$|^[A-Z][a-z]+$/.test(word)
};

var detectCapitalUse = function(word) {
    
    if (word ==""){
        return true
    }
    
    var allUp = word.toUpperCase()
    var allLo = word.toLowerCase()
    var right = ""
    
    var firstLetter = word.slice(0,1).toUpperCase()
    var other = word.slice(1).toLowerCase()
    
    right = firstLetter + other
    
    if(word == allUp || word == allLo || word == right){
        return true
    } else {
        return false
    }
};

var detectCapitalUse = function(word) {
    var result = true
    var i = 0
    var currentCode = () => word.charCodeAt(i)
    var isUpperCase = (code) => (code>64 && code<91) ? true : false
    var isLowerCase = (code) => (code>96 && code<123) ? true : false
    if (isUpperCase(currentCode(i))) {
      i++
      if(isUpperCase(currentCode(i))){
        for( ; i<word.length; i++) {
          if(isUpperCase(currentCode(i))) {
            continue
          } else {
            result = false
            break
          }
        }
      } else {
        for( ; i<word.length; i++) {
          if(isLowerCase(currentCode(i))) {
            continue
          } else {
            result = false
            break
          }
        }
      }
    } else {
      i++
      for( ; i<word.length; i++){
        if(isLowerCase(currentCode(i))) {
          continue
        } else {
          result = false
          break
        }
      }
    }
    return result
};
