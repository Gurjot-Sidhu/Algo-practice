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
        while(l >= 0 && r < s.length -1 && s[l] === s[r+1]){
            r +=1;
        }
        while (l >= 0 && r<s.length && s[l] === s[r]){
            if(r + 1 - l > offset){
                [max_l,offset] = [l,,r+1 - l]
                l -= 1; r+=1
            }
        }
        return s.substring(max_l,max_l + offset)
    }
}