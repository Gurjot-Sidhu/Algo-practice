/* 
Given a m x n matrix that contains integers which are in order.
Find weather or not a value exists within the matrix
*/

function twodsearch(matrix,target){
    for(var i = 0;i<matrix.length;i++){
        for(j = 0;j<matrix[i].length;j++){
            if(matrix[i][j].includes(target)){
                return true
            }else{
                return false
            }
        }
    }
}