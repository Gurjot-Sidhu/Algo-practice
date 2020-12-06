/* 
Given an unsorted array find the smallest possible positive integer
*/

function firstMissingPositive(nums){
    var target = 1
    for(var i = 0;i<nums.length;i++){
        if(nums.includes(target) === true){
            target++
        }else{
            return target
        }
    }
}