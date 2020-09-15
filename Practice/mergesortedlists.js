/* 
Given 2 sorted lists return the two lists as one new sorted lists
*/

function mergeTwoLists(l1,l2){
    if(!l1||!l2){
        return l1 || l2;
    }
    let l = r;
    while(l1 && l2){
        if(l1.val < l2.val){
            l.val = l1.val
            l1 = l1.next
        }else if (l1.val > l2.val){
            l.val = l2.val
            l2 = l2.next
        }else{
            l.val = l1.val
        }
    }
}