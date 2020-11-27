/* 
Given an array of non-negative integeers nums, you start at the first position 
and its value is how many places you move in the array, determine the least 
amount of jumps needed to reach the end.
*/

function jump(nums){
    var maxjumplength = 0;
    var jumps = 0;
    var newjump = [];
    for(var i = 0;i<nums.length;i++){
        if(nums[i] + nums[i+2] === nums.length){
            jumps = 2
        }else if(nums[1] + nums[2] === nums.length){
            jumps = 3
        }else{
            return 0
        }
    }
    return jumps
}