/* 
Given a sequence of integers as an array, determine whether it 
is possible to obtain a strictly increasing sequence by removing 
no more than one element from the array.
*/

function almostIncreasinSequence (sequence){
    var counter1 = 0;
    var counter2 = 0;
    var temp1 = sequence[0]
    var temp2 = sequence[sequence.size() - 1];
    var j = sequence.size() - 1;
    for(var i = 0;i < sequence.size();i++){
        if(temp1 >= sequence[i]){
            return counter1;
        }else{
            return temp1 = sequence[i]
        }
    }
}