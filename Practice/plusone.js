/* 
Given a non-empty array of decimals add on to the value
*/

function plus0ne(digits){
    var lastpos = digts.length - 1;
    digits[lastpos] = digits[lastpos] + 1
    return digits
}