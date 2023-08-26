/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/
function solution(str) {
    return (str.match(/..?/g)||[]).map(i=>i.length==1?i+'_':i)
}

console.log(solution("abcdef"))
console.log(solution("abcdefg"))
console.log(solution(""))

// i like it
//const solution = str => (str + "_").match(/../g);