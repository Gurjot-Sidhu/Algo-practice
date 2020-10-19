/* 
Given two rows of dice that are opposistes of each other 
rotate the positions of the row so one of the rows are all the same.
Return the minimum number of rotations 
*/

function minDominoRotations(A,B){
    var mostfreq= 1;
    var m = 0;
    var item;
    for(var i=0;i<A.length;i++){
        for(var j=i;j<A.length;j++){
            if(A[i] === A[j]){
                m++;
            }
            if(mostfreq<m){
                mostfreq=m;
                item = arr[i];
            }
        }
    }
    m=0
}