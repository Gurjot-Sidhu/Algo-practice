/* 
Given an array of integers,determine how many numbers 
would need to be added to make the array contain integers
that are consecutive
*/

function makeArrayConsecutive(statues){
    statues.sort(function(a,b){return a - b})
        var max = statues[statues.length -1]
        var min = statues[0]
        var diff = (max-min+1)

    return diff - statues.length
}