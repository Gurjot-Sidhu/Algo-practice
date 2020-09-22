/* 
Given a long string, Find the longest palindrome within the string 
*/

function longestPalindrome(s){
    if (s === null || s.length < 1){
        return console.log("Empty")
    }
    let [max_l,offset] = [0,1];
    for(var i = 0;i < s.length-1;i++){
        let [l,r]= [i,i];
        while(l >= 0 && r < s.length -1 && s[l] === s[r+1]) 
        
    }
}