/* 
Given an 32 bit integer reverse the digits of said integer
*/

function reverse(x){
    if(x === 0){
        return 0
    }else{
        var newi = x.toString().split('').reverse().join('')
        return parseInt(newi,10)
    }
}