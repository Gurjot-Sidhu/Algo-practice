/* 
Given n non negative integeres representing an elevation map where the
 width of each bar is 1,compute how much water it is able to trap after raining
*/

function rainWater(height){
    var counter = 0;
    for(var i = 0;i< height.length;i++){
        if(height[i] === 1 && height[i-1] === 0 && height[i+1] > 0){
            var leftheight = height[i-1];
            var rightheight = height[i+1];
            if(leftheight >= 1 && rightheight >= 1){
                counter ++;
                if(height[i-2] >= 1 && height[i+2] >= 1){
                    
                }
            }
        }
    }
}