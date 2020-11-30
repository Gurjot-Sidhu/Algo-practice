/* 
Given an array of sorted nums remove all of the duplicates and return the length
*/

function removeDuplicates(nums){
    for(var i = 0;i<nums.length;i++){
        if(i+1 <=nums.length){
            if(nums[i] === nums[i+1]){
                nums.splice(i,1)
            }
        }
    }
    return nums.length
}