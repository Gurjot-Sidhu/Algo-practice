/* 
Given a set of numbers without duplicates and a target number, 
Find all unique combinations in whihc the numbers sum
*/

function combSum(candidates,target){
    candidates = candidates.sort(function(val1,val2)){
        return val1>val2:val1<val2?-1:0;
    }
}