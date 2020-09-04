/* 
Given an array of integers,
find the pair of adjacent elements 
that has the largest product and return that product
*/
function adjacentelements(array){
    var largest = array[0] * array[1]
    for(var i = 0;i < array.length;i++){
        var product = array[i] * array[i+1]
        if(product > largest){
            largest = product
        }
    }
    return largest
}