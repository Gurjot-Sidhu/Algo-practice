/* 
Rotate the list to the right by k places where k is 
non negative without making the array larger 
*/

function rotateList(head,k){
    var len = head.length
    
    for(var i = 0;i<head.length;i++){
        var newpos;
        if(i+k > len){
            head[i] = head[(i+k)% len]
        }else if(i+k < len){
            head[i] = head[i+k]
            if(head[i] > k){
                head[i-k] = head[i]
            }
        }
    }
}