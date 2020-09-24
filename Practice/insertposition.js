/* 
Given a sorted array and target value, 
return the index in a number could be inserted in order. No duplicates
*/

function position(nums,target){
    for(var i = 0; i <nums.length;i++){
        if(nums[i] < target && nums[i+1] > target){
            return i+1
        }else if(nums[i] === target){
            return 0
        }else{
            return 0 
        }
    }
}