/*
Compare triplets, Compare two arrays with integers. 
If one of the values is larger than the others, then u add 1 
and vice versa you thn return the results of the scores for both arrays
*/

let ne = [1,2,3];
let old = [0,4,2];



function score (arga, argb){
    var a = 0;
    var b = 0;
    for(var i = 0; i < arga.length;i++){
        if(arga[i]>argb[i]){
            a++;
        }else{
            b++
        }
        return a,b;
    }
}
score(ne , old)