/* 
I was given almost the exact same problem for a JPMorgan and Co. interview
I am doing this to restudy the question and find a new solution
Given a message containing letters from A-Z decode a non-empty 
string and determine thte number of total ways to decode it
*/

function decodeways(s){
    let f = []
    f[-1] = 1;
    for (var i = 0; i < s.length; i++){
        f[i] = 0;
        if(s[i] !== "0"){
            f[i] += f[i-1]
        }
        let twodigitNum = (i > 0) ? (parseInt(s.substr(i-1),2,10)) : 0
        if (twodigitNum >=10 && twodigitNum <= 26){
            f[i] += f[i-2];
        }
    }
    return f[s.length - 1]
}