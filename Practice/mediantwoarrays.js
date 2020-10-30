/* 
Given two sorted arrays return the median of two arrays
*/
var nums1 = [1,3];
var nums2 = [2,3,4];

function sortedmedian(nums1,nums2){
    var nums3 = nums1.concat(nums2);
    var median ;
    nums3.sort(function(a,b){return a - b})
    if(nums3.length % 2 > 0){
        median = (nums3[(Math.floor(nums3.length/2))] + nums3[(Math.floor(nums3.length/2 + 1))]) /2
        console.log(median)
    }else{
         
    }

}