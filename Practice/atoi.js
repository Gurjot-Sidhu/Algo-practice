/* 
Given a string with a number or other values 
in it return what it consists of including the number
*/

function atoi(s){
    if(s){
        if(parseInt(s,10)){
            return parseInt(s,10)
        }
    }else{
        return 0
    }
}