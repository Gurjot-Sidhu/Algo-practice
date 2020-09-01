/* 
Given a year determine what century it is in.
1700 =  17th century
1905 = 20th century
*/

function centuryFromYear(year){
    var newstr = ""
    if(year % 100 > 0){
        newstr = year.toString()
        return parseInt(newstr.slice(0,2)) + 1
    }else{
        newstr = year.toString()
        return newstr 
    }
}