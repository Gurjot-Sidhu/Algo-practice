/* 
Given an array (l) and a integer (k),
Remove all instances of k from arry l
*/

function removekfroml(l,k){
    for(var i = 0; i < l.length; i++){
        var newl = l.filter((singleint)=>{
            if(singleint === k){
                return null
            }else{
                return singleint
            }
        })
    }
   
    