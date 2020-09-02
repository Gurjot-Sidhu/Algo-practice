/* 
check if a string is a palindrome
return true or false
*/



function palindrome(string){
    var strlen = string.length()
        for(var i =0;i <strlen/2;i++){
            if(string[i] != string[strlen -(i +1){
                return false
            }else{
                return true
            }
        }
}