/* 
Return the sum of all elements within an array.
it is a big integer value
*/


function bigsum (array){
    var sum = 0;
    for(var i = 0;i <array.length;i++){
        var newstr = array[i]
        if(newstr.contains("")){
            var newstr = array[i].toString()
            var pos = newstr.indexOf(" ")
            var nwnum = newstr.slice(0,pos).parseInt()
            sum = sum + nwnum
        }
        sum = sum + array[i]
    }
    return sum
}