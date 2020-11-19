/* 
Given an array of non-negative integeers nums, you start at the first position 
and its value is how many places you move in the array, determine the least 
amount of jumps needed to reach the end.
*/

function jump(nums){
    var jumps = 0;
    for(var i = 0;i<nums.length;i++){
        if(nums[0] + nums[i] === nums.length){
            jumps = 2
        }
    }
    return jumps
}