/* 
Given a sorted array that may be rotated, find the target
*/

function search(nums,target){
    var foundpos;
    if(nums.indexOf(target) === 0){
        foundpos = -1
    }
    for(var i = 0; i < nums.length;i++){
        if(nums[i] === target){
            foundpos = i
        }
    }
    return foundpos
}