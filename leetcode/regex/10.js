// 10 正则表达式匹配
// https://leetcode-cn.com/problems/regular-expression-matching/

// 筛选无模式和有模式
// 无模式mi 一一对比
// 有模式 s*, .*,[a-z]*,
// ([a-z.]\*)|([a-z]+(?=([a-z.]\*|$)))

// 最简单用js的正则表达式解决
var isMatch = (s,p) => {
    var reg = new RegExp(`^${p}$`)
    return reg.test(s)
}

console.log(isMatch('aa','.*'))
