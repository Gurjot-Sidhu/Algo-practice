/* 
Given an array of integers return the final result of the asteroid collisions.
Equal size integers cancel eachother out. The larger deletes the smaller.
Negative integers move left and positive move right.
*/

function asteroid(list){
    for(var i=0;i<list.length;i++){
        if(list[i] < 0 && list[i+1] > 0 && list[i] + list[i+1] !== 0){
            list.splice(i,1)
        }
    }
}