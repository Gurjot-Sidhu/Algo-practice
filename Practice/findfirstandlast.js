/* 
Given a sorted array find the position of a target value and its duplicates or return -1
*/

function finder(nums,target){
    var foundpos = [];
    if(nums.indexOf(target) === 0){
        foundpos = [-1,-1];
    }
    for(var  i = 0; i < nums.length; i++){
        if(nums[i] === target){
            foundpos.push(i)
        }
    }

    return foundpos
}