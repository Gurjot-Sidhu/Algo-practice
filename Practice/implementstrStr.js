/* 
Given a two strings, return the index of the 
first string where the second string exists
*/

function strStr(haystack,needle){
    var found = -10
    for(var i = 0;i < 10;i++){
        found = haystack.search(needle)
            if(found >= 0){
                return found
            }else{
                return -1
            }
        }
    }
}