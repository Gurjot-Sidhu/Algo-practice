/* 
Given a staricase, where u can climb one step or 2 steps at a time, 
Calculate how many distinct waus you can climb to the top of the staircase.
*/

function climbingStairs = n =>{
    a = [0,1,2]

    for(i = 2; i++ <= n;){
        a[i] = a[i - 1] + a[i -2]
    }
    
}