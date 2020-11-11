/* 
Given an array of integers nums
find the contigous subarray which has the largest sum and return its sum
*/

function maximumsubarray(nums){
    for(var i = 0;i <nums.length;i++){
        var sum = 0 
        if(nums[i] + nums[i+1] > sum){
            sum += nums[i] + nums[i+1]
        }else if{
            nums[i] + nums[i+1] + nums[i+2] > sum
            sum = nums[i] + nums[i+1] + nums[i+2] 
        }
    }
}