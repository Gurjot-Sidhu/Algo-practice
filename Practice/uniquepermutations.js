/* 
Given a collections of numbers that might contain duplicates 
return all possible unique permutations in any order
*/

function perm (nums){
    var results;
    if(nums.length = 1){
        results = nums
        return results
    }
    for(var i = 0;i < nums.length;i++){
        var first = nums[0]
        var innerperm = nums.splice(1)
        for(var j = 0;j < innerperm.length;j++){
            results += innerperm
        }

    }
    return results
}