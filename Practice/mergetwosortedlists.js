/* 
Given two sorted linked lists return one sorted linked list.
*/

function merge(l1,l2){
    var l3 = [...l1,...l2];
    l3.sort;
    return l3
}