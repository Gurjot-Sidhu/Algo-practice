/* 
Given a non-empty array of decimals add on to the value
*/

function plus0ne(digits){
    var lastpos = digts.length - 1;
    if(digits[lastpos] === 9){
        digits[lastpos] == 1
        digits.push(0)
    }else{
        digits[lastpos] = digits[lastpos] + 1
    }
    return digits
}