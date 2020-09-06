/* 
find the area of a polygon given n
adding n-1 to a polygon will allow you to make a 
*/

function shapeArea (n){
    return (1 + (n-1)*n) *2 - 1
}