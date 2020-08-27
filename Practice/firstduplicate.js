/*
Given an array a that contains only numbers in the range from 
1 to a.length, find the first duplicate number for which the 
second occurrence has the minimal index. In other words, if 
there are more than 1 duplicated numbers, return the number 
for which the second occurrence has a smaller index than the 
second occurrence of the other number does. If there are no 
such elements, return -1.

*/
function firstDuplicate(a) {
    var found = 0
    for ( i = 0; i < a.length; i++){
        for(j = 0; j< a.length; a++){
            if(a[i] === a[j]){
                return i[a]
            }else{
                return -1
            }
        }
    }
}

