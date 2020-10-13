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
           console.log(head[i])
        }else if(i+k < len){
            head[i] = head[i+k]
            if(head[i] > k){
                head[i-k] = head[i]
            }else if(head[i] +i< k){
                head[i+2] = head[i]
            }
        }
        return console.log(head[i+2]) + 4
    }
    return  console.log(head.slice(0,1))
}