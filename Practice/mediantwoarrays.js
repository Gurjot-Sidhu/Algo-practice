/* 
Given two sorted arrays return the median of two arrays
*/

function sortedmedian(nums1,nums2){
    var nums3 = nums1.concat(nums2);
    var median ;
    nums3.sort(function(a,b){return a - b})
    if(nums3.length % 2 > 0){
        median = (nums3[(nums3.length/2)] + nums3[(nums3.length/2 + 1)]) /2
        return median;
    }else{
         
    }

}