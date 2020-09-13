/* 
Given one integers return the sum of its digits
possible solution
*/

function addTwoDigits(n) {

    var ndig = n.toString()
    var dig1 = ndig.slice(0,1)
    var dig2 = ndig.slice(1,2)


    return parseInt(dig1 + dig2)
}