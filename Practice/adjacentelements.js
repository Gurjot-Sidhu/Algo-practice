/* 
Given an array of integers,
find the pair of adjacent elements 
that has the largest product and return that product
*/
function adjacentelements(array){
    var total = 0
    var a = 0
    var b = 0
    for(var i = 0;i < array.length;i++){
        if(array[i] * array[i+1] > total){
            total = array[i] * array[i+1]
            a = array[i]
            b = array[i+1]
        }
    }
    
}