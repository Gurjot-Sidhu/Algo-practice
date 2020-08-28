/* 
Return the sum of integers within an array
*/

function simpleArraySum(ar) {
    var sum = 0
    for (var i = 0;i < ar.length; i++){
        sum = sum + ar[i]
    }
        return sum
}